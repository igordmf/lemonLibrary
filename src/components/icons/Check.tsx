import { colors } from '../../styles/CSSConstants'
import { IconProps } from './type'

export const Check = ({ color = colors.WHITE }: IconProps) => {

  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M0.787872 5.91926L1.72787 4.97295L6.48867 9.77956L15.853 0.329102L16.7879 1.27573L6.48643 11.6709L0.787872 5.91926Z" fill={color}/>
    </svg>
  )
}
