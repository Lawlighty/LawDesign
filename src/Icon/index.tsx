import React from 'react'
import IconProps from './type.ts'

export default (props: IconProps) => {
  const { icon, size = '', transparent = false, half = false, empty = false } = props
  return (
    <i
      className={`nes-icon ${size && `is-${size}`} ${icon} ${transparent && 'is-transparent'} ${
        half && 'is-half'
      } ${empty && 'is-empty'}`}
    ></i>
  )
}
