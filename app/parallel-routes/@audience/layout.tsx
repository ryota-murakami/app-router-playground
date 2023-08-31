import { Boundary } from '#/ui/boundary'
import { TabGroup } from '#/ui/tab-group'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['parallel-routes/@audience/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/parallel-routes"
          items={[
            {
              text: 'Home',
            },
            {
              slug: 'demographics',
              text: 'Demographics',
            },
            {
              slug: 'subscribers',
              text: 'Subscribers',
            },
          ]}
        />

        {children}
      </div>
    </Boundary>
  )
}
