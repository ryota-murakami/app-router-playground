import React from 'react'

import { getCategories } from '#/app/api/categories/getCategories'
import { LayoutHooks } from '#/app/hooks/_components/router-context-layout'
import { ClickCounter } from '#/ui/click-counter'
import { TabGroup } from '#/ui/tab-group'

const title = 'Hooks'

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
  const categories = await getCategories()

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/hooks"
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

      <LayoutHooks />

      <div>{children}</div>
    </div>
  )
}
