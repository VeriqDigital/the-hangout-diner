export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-[#101116]">
      {children}
    </div>
  )
}
