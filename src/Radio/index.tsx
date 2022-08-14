import React, { useState } from 'react'
import RadioProps from './type.ts'

export default (props: RadioProps) => {
  const { checked = false, children = '' } = props
  const [isChecked, setIsChecked] = useState<boolean>(checked)
  const handleChange = (event: any) => {
    console.log('handleChange event', event.target.value)
    if (!event?.target?.value) {
      setIsChecked(true)
    }
  }
  const handleClick = (event: any) => {
    console.log('handleClick event', event.target.value)
  }

  return (
    <label>
      <input
        type="radio"
        className="nes-radio"
        checked={false}
        onChange={handleChange}
        onClick={handleClick}
      />
      <span>{children}</span>
    </label>
  )
}
