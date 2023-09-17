const title = 'Parallel Routes'

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
}

export default function Layout({
  audience,
  children,
  views,
}: {
  audience: React.ReactNode
  children: React.ReactNode
  views: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        {children}

        <div className="space-y-6">
          {audience}
          {views}
        </div>
      </div>
    </div>
  )
}
