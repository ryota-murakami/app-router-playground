import React from 'react'

import { Tab } from '#/ui/tab'

import { RandomPostTab } from './random-post-tab'

const title = 'Static Data'

export const metadata = {
  openGraph: {
    images: [`/api/og?title=${title}`],
    title,
  },
  title,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/ssg" item={{ text: 'Home' }} />
        <Tab path="/ssg" item={{ slug: '1', text: 'Post 1' }} />
        <Tab path="/ssg" item={{ slug: '2', text: 'Post 2' }} />
        <RandomPostTab path="/ssg" />
      </div>

      <div>{children}</div>
    </div>
  )
}
