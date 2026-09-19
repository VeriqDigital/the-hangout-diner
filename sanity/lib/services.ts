import type {SanityImageSource} from '@sanity/image-url'
import {defineQuery} from 'next-sanity'

import {sanityFetch} from './live'

export type Service = {
  _id: string
  title: string
  slug: string
  description: string | null
  image: SanityImageSource | null
  order: number | null
}

export const SERVICES_QUERY = defineQuery(/* groq */ `
  *[
    _type == "service" &&
    defined(title) &&
    title != "" &&
    defined(slug.current)
  ] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    image,
    order
  }
`)

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const isSanityImageSource = (value: unknown): value is SanityImageSource => {
  if (!isRecord(value) || !isRecord(value.asset)) return false

  return (
    typeof value.asset._ref === 'string' || typeof value.asset._id === 'string'
  )
}

const normalizeService = (value: unknown): Service | null => {
  if (!isRecord(value)) return null

  const {_id, title, slug, description, image, order} = value

  if (
    typeof _id !== 'string' ||
    typeof title !== 'string' ||
    title.trim() === '' ||
    typeof slug !== 'string' ||
    slug.trim() === ''
  ) {
    return null
  }

  return {
    _id,
    title,
    slug,
    description: typeof description === 'string' ? description : null,
    image: isSanityImageSource(image) ? image : null,
    order: typeof order === 'number' && Number.isFinite(order) ? order : null,
  }
}

export const getServices = async (): Promise<Service[]> => {
  try {
    const {data} = await sanityFetch({
      query: SERVICES_QUERY,
      perspective: 'published',
      stega: false,
    })

    return Array.isArray(data)
      ? data.flatMap((service) => {
          const normalized = normalizeService(service)
          return normalized ? [normalized] : []
        })
      : []
  } catch (error) {
    console.error('Unable to load published Sanity services.', error)
    return []
  }
}
