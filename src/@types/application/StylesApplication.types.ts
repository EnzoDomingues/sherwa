export interface IDefaultStylesProps {
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end'
  marginTops?: number
  marginBottom?: number
  width?: number
  fontSize?: string
  textAlign?: string
}

export enum EDefaultJustifyContent {
  spaceBetween = 'space-between',
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
}
