import { type SchemaTypeDefinition } from 'sanity'
import {serviceType} from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType],
}
