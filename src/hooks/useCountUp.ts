import { useEffect, useState } from 'react'

export function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let frame = 0
    const totalFrames = Math.round(duration / 16)
    const increment = target / totalFrames

    const tick = () => {
      frame += 1
      if (frame >= totalFrames) {
        setValue(target)
        return
      }
      setValue(Math.round(increment * frame))
      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [active, target, duration])

  return value
}
