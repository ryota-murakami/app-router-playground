import type { FunctionComponent } from 'react'

declare module 'react' {
  type ServerComponent<P = {}> =
    | Promise<FunctionComponent<P>>
    | FunctionComponent<P>
}
