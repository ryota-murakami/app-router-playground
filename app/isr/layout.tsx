import React from 'react'

import { TabGroup } from '#/ui/tab-group'

const title = 'Incremental Static Regeneration (ISR)'

export const metadata = {
  openGraph: {
    images: [`/api/og?title=${title}`],
    title,
  },
  title,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: '1' }, { id: '2' }, { id: '3' }]

  return (
    <div className="space-y-9">
      <TabGroup
        path="/isr"
        items={[
          {
            text: 'Home',
          },
          ...ids.map((x) => ({
            slug: x.id,
            text: `Post ${x.id}`,
          })),
        ]}
      />

      <div>{children}</div>
    </div>
  )
}
