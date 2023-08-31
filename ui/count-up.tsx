'use client'

import { useCountUp } from 'use-count-up'

const CountUp = ({
  start,
  end,
  duration = 1,
}: {
  start: number
  end: number
  duration?: number
}) => {
  const { value } = useCountUp({
    decimalPlaces: 1,
    duration,
    end,
    isCounting: true,
    start,
  })

  return <span>{value}</span>
}

export default CountUp
