'use client'

import { useCountUp } from 'use-count-up'

const CountUp = ({
  duration = 1,
  end,
  start,
}: {
  duration?: number
  end: number
  start: number
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
