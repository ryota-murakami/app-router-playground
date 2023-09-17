import { Tab } from '#/ui/tab'

export type Item = {
  parallelRoutesKey?: string
  segment?: string
  slug?: string
  text: string
}

export const TabGroup = ({
  items,
  parallelRoutesKey,
  path,
}: {
  items: Item[]
  parallelRoutesKey?: string
  path: string
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => (
        <Tab
          key={path + item.slug}
          item={item}
          path={path}
          parallelRoutesKey={parallelRoutesKey}
        />
      ))}
    </div>
  )
}
