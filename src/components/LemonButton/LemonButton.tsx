import { ReactNode } from "react";
import { Container, ColorType } from "./LemonButton.styles";
import { ArrowRight, Check, Refresh } from "../icons";
import { colors } from "../../styles/CSSConstants";

interface LemonButtonProps { 
  children: ReactNode;
  color: ColorType;
  disabled: boolean;
  icon?: string;
  onClick?: () => void;
}

export const LemonButton = ({
  children,
  color = 'primary',
  disabled = false,
  icon,
  onClick
}: LemonButtonProps) => {

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'arrow-right':
        return <ArrowRight color={color === 'primary' ? colors.WHITE : colors.BLACK} />;
      case 'check':
        return <Check color={color === 'primary' ? colors.WHITE : colors.BLACK} />;
      case 'refresh':
        return <Refresh color={color === 'primary' ? colors.WHITE : colors.BLACK} />;
      default:
        return null;
    }
  }

  return(
    <Container color={color} disabled={disabled} icon={icon} onClick={onClick} >
      {children}
      {children && icon && renderIcon(icon)}
    </Container>
  )
}
