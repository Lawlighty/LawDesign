import React from 'react'
import IconProps from './type.ts'

const ICON_LIST = ['mario', 'ash', 'pokeball', 'bulbasaur', 'charmander', 'squirtle', 'kirby']
export default (props: IconProps) => {
  const { icon, size = '', transparent = false, half = false, empty = false } = props

  return (
    <i
      className={`${ICON_LIST.includes(icon) ? `nes-${icon}` : `nes-icon ${icon}`} ${
        size && `is-${size}`
      }  ${transparent && 'is-transparent'} ${half && 'is-half'} ${empty && 'is-empty'}`}
    ></i>
  )
}
