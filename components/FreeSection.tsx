import type { ComponentProps } from 'react'
import React from 'react'

import { cn } from '../lib/utils'
const FreeSection: React.FC<ComponentProps<'section'>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className={cn('w-hull', className)} {...rest}>
      {children}
    </section>
  )
}

export default FreeSection
