'use client'
// https://github.com/vercel/next.js/tree/canary/examples/with-redux
/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { store } from './store'

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>
}
