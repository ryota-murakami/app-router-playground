import React from 'react'

import { TabGroup } from '#/ui/tab-group'

const title = 'Streaming'

export const metadata = {
  openGraph: {
    images: [`/api/og?title=${title}`],
    title,
  },
  title,
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/streaming"
          items={[
            {
              text: 'Home',
            },
            {
              segment: 'edge',
              slug: 'edge/product/1',
              text: 'Edge Runtime',
            },
            {
              segment: 'node',
              slug: 'node/product/1',
              text: 'Node Runtime',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  )
}
