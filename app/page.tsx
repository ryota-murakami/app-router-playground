'use client'
import Link from 'next/link'
import React from 'react'

import { demos } from '#/lib/demos'

import FreeSection from '../components/FreeSection'

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>
      <FreeSection className="artboard h-[500px] space-x-8 flex">
        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn w-64 rounded-full">Button</button>
      </FreeSection>
      <div className="space-y-10 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.name}
              </div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
