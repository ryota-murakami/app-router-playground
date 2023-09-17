import React from 'react'

import { getCategories } from '#/app/api/categories/getCategories'
import { ClickCounter } from '#/ui/click-counter'
import { TabGroup } from '#/ui/tab-group'

const title = 'Loading'

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
}
export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/loading"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              slug: x.slug,
              text: x.name,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
