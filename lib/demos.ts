export type Item = {
  name: string
  slug: string
  description?: string
}

export const demos: { name: string; items: Item[] }[] = [
  {
    items: [
      {
        description: 'Create UI that is shared across routes',
        name: 'Nested Layouts',
        slug: 'layouts',
      },
      {
        description: 'Organize routes without affecting URL paths',
        name: 'Grouped Layouts',
        slug: 'route-groups',
      },
      {
        description: 'Render multiple pages in the same layout',
        name: 'Parallel Routes',
        slug: 'parallel-routes',
      },
    ],
    name: 'Layouts',
  },
  {
    items: [
      {
        description:
          'Create meaningful Loading UI for specific parts of an app',
        name: 'Loading',
        slug: 'loading',
      },
      {
        description: 'Create Error UI for specific parts of an app',
        name: 'Error',
        slug: 'error-handling',
      },
      {
        description: 'Create Not Found UI for specific parts of an app',
        name: 'Not Found',
        slug: 'not-found',
      },
    ],
    name: 'File Conventions',
  },
  {
    items: [
      {
        description:
          'Streaming data fetching from the server with React Suspense',
        name: 'Streaming with Suspense',
        slug: 'streaming',
      },
      {
        description: 'Generate static pages',
        name: 'Static Data',
        slug: 'ssg',
      },
      {
        description: 'Server-render pages',
        name: 'Dynamic Data',
        slug: 'ssr',
      },
      {
        description: 'Get the best of both worlds between static & dynamic',
        name: 'Incremental Static Regeneration',
        slug: 'isr',
      },
    ],
    name: 'Data Fetching',
  },
  {
    items: [
      {
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
        name: 'Client Context',
        slug: 'context',
      },
    ],
    name: 'Components',
  },
  {
    items: [
      {
        description: 'Preview the routing hooks available in Client Components',
        name: 'Client Component Hooks',
        slug: 'hooks',
      },
      {
        description: 'Preview the supported styling solutions',
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
      },
      {
        description: 'A collection of useful App Router code snippets',
        name: 'Code Snippets',
        slug: 'snippets',
      },
    ],
    name: 'Misc',
  },
]
