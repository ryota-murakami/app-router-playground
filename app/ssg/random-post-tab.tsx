'use client'

import clsx from 'clsx'
import React, { useEffect } from 'react'

import { Tab } from '#/ui/tab'

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export function RandomPostTab({ path }: { path: string }) {
  const [post, setPost] = React.useState<null | { text: string; slug: string }>(
    null,
  )

  useEffect(() => {
    const randomId = String(randomNumber(3, 100))
    setPost({ slug: randomId, text: `Post ${randomId} (On Demand)` })
  }, [])

  return (
    <div
      className={clsx('inline-flex transition', {
        'opacity-0': !post,
        'opacity-100': post,
      })}
    >
      {post ? (
        <Tab path={path} item={{ slug: post.slug, text: post.text }} />
      ) : null}
    </div>
  )
}
