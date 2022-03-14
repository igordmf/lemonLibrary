import { colors } from '../../styles/CSSConstants'
import { IconProps } from './type'

export const ArrowRight = ({ color = colors.WHITE }: IconProps) => {

  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M6.79611 0C6.62494 0.176 6.09099 0.71632 5.87702 0.936C8.0839 3.14192 12.5157 7.47344 12.5157 7.47344L0.00766488 7.47104L7.664e-07 8.64224L12.5135 8.66416C12.5135 8.66416 8.08693 12.864 5.87335 15.0754C6.12963 15.3326 6.58391 15.7867 6.79611 16C9.45184 13.3365 12.1497 10.6461 14.7879 8C12.1366 5.34592 9.4727 2.67925 6.79611 0Z" fill={color}/>
    </svg>
  )
}
