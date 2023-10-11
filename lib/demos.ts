export type Item = {
  name: string
  description?: string
  slug: string
}

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        description: 'Create UI that is shared across routes',
        slug: 'layouts',
      },
      {
        name: 'Grouped Layouts',
        description: 'Organize routes without affecting URL paths',
        slug: 'route-groups',
      },
      {
        name: 'Parallel Routes',
        description: 'Render multiple pages in the same layout',
        slug: 'parallel-routes',
      },
      {
        name: 'Route Handlers',
        description: 'Route Handlers',
        slug: 'route-handlers',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
        slug: 'loading',
      },
      {
        name: 'Error',
        description: 'Create Error UI for specific parts of an app',
        slug: 'error-handling',
      },
      {
        name: 'Not Found',
        description: 'Create Not Found UI for specific parts of an app',
        slug: 'not-found',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Streaming with Suspense',
        description:
          'Streaming data fetching from the server with React Suspense',
        slug: 'streaming',
      },
      {
        name: 'Static Data',
        description: 'Generate static pages',
        slug: 'ssg',
      },
      {
        name: 'Dynamic Data',
        description: 'Server-render pages',
        slug: 'ssr',
      },
      {
        name: 'Incremental Static Regeneration',
        description: 'Get the best of both worlds between static & dynamic',
        slug: 'isr',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client Context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
        slug: 'context',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'Client Component Hooks',
        description: 'Preview the routing hooks available in Client Components',
        slug: 'hooks',
      },
      {
        name: 'CSS and CSS-in-JS',
        description: 'Preview the supported styling solutions',
        slug: 'styling',
      },
      {
        name: 'Code Snippets',
        description: 'A collection of useful App Router code snippets',
        slug: 'snippets',
      },
    ],
  },
]
