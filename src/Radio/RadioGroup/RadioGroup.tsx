import React, { FC, useState, useEffect, memo, useCallback } from 'react'
import styles from './index.less'

interface RadioGroupProps {
  children: Array<Object>
  /**
   * @description 默认值
   * @default 0
   */
  value?: number
  vertical?: boolean
  onChange?: Function
}
interface RadioProps {
  children: string
  disabled: boolean
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { children, value, vertical = false, onChange } = props

  const [selectIndex, setSelectIndex] = useState(value || 0) //选中索引
  const [renderOptions, setRenderOptions] = useState(children)

  const changeOptions = (item: RadioProps, i: number, e: any) => {
    if (item.disabled) return
    e && e.stopPropagation()
    setSelectIndex(i)
    onChange && onChange(item, i)
  }

  const handleChange = (event: any) => {
    console.log('handleClick event', event.target.value)
  }

  return (
    <div className={`${styles['raido-group-wrapper']} ${vertical && styles['vertical-wrapper']}`}>
      {renderOptions.map((item: any, index: number) => {
        return (
          <label
            className={styles['raido-group-wrapper-label']}
            key={index}
            onClick={(e) => changeOptions(item.props, index, e)}
            style={item.props.disabled && { cursor: 'not-allowed' }}
          >
            <input
              style={item.props.disabled && { cursor: 'not-allowed' }}
              type="radio"
              className="nes-radio"
              checked={selectIndex === index}
              onChange={handleChange}
            />
            <span style={item.props.disabled && { cursor: 'not-allowed', color: 'gray' }}>
              {item?.props?.children}
            </span>
          </label>
        )
      })}
    </div>
  )
}

export default memo(RadioGroup)
