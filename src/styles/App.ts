import { colors } from './CSSConstants';

export const AppStyles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column' as 'column',
  height: '100vh',
  justifyContent: 'center',
}

const bgURL = "https://assets.website-files.com/5f7e0994165e365ab297bfe7/5f7fe4c0c5021fe56276361f_redefina%201.png"

export const BgStyles = {
  backgroundImage: `url(${bgURL})`,
  backgroundPosition: '50% 0',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  bottom: '0',
  left: '0',
  minHeight: '100vh',
  minWidth: '100%',
  position: 'fixed' as 'fixed',
  right: '0',
  top: '0',
  zIndex: '-8',
}

export const ButtonsDivStyles = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '20px',
  width: '311px',
}

export const HeaderStyles = {
  alignItems: 'end',
  color: colors.WHITE,
  display: 'flex',
  fontSize: '2rem',
  marginBottom: '20px',
  width: '800px',
}

export const MainStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '80px',
  width: '800px',
}

export const TitleStyles = {
  margin: '0 auto',
  transform: 'translateX(-58px)',
}
