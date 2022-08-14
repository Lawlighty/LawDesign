export interface TextProps {
  type?: 'primary' | 'success' | 'warning' | 'error' | 'disabled'
  children: string
  [props: string]: any
}
