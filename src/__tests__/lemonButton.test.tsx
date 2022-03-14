import { render, screen } from '@testing-library/react';
import { LemonButton } from '../components/LemonButton';
import { colors } from '../styles/CSSConstants';

const primaryNoIcon = {
  children: 'primary',
  color: 'primary' as 'primary',
  disabled: false,
}

const secondaryNoIcon = {
  children: 'secondary',
  color: 'secondary' as 'secondary',
  disabled: false,
}

const primaryWithIcon = {
  children: 'primary',
  color: 'primary' as 'primary',
  disabled: false,
  icon: 'arrow-right',
}

const secondaryWithIcon = {
  children: 'secondary',
  color: 'secondary' as 'secondary',
  disabled: false,
  icon: 'check',
}

const primaryIconDisabled = {
  children: 'primary',
  color: 'primary' as 'primary',
  disabled: true,
  icon: 'refresh',
}

const secondaryNoIconDisabled = {
  children: 'secondary',
  color: 'secondary' as 'secondary',
  disabled: true,
}

describe('Lemon button', () => {
  it('should renders with primary conditions and no icon', () => {
    expect.assertions(5);

    render(<LemonButton {...primaryNoIcon} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('primary');
    expect(button).toHaveStyle(`background-color: ${colors.PRIMARY_NORMAL}`);
    expect(button).toHaveStyle(`color: ${colors.WHITE}`);
    expect(button).toHaveStyle('justify-content: center');

  });

  it('should renders with secondary conditions and no icon', () => {
    expect.assertions(5);

    render(<LemonButton {...secondaryNoIcon} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('secondary');
    expect(button).toHaveStyle(`background-color: ${colors.SECONDARY_NORMAL}`);
    expect(button).toHaveStyle(`color: ${colors.BLACK}`);
    expect(button).toHaveStyle('justify-content: center');
  });

  it('should renders with primary conditions and arrow-right icon', () => {
    expect.assertions(3);

    render(<LemonButton {...primaryWithIcon} />);

    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: ${colors.PRIMARY_NORMAL}`);
    expect(button).toHaveStyle('justify-content: space-between');
  });

  it('should renders with secondary conditions and check icon', () => {
    expect.assertions(3);

    render(<LemonButton {...secondaryWithIcon} />);

    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: ${colors.SECONDARY_NORMAL}`);
    expect(button).toHaveStyle('justify-content: space-between');
  });

  it('should renders with primary conditions and disabled', () => {
    expect.assertions(4);

    render(<LemonButton {...primaryIconDisabled} />);

    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: ${colors.PRIMARY_DISABLED}`);
    expect(button).toHaveStyle('justify-content: space-between');
    expect(button).toBeDisabled();
  });

  it('should renders with secondary conditions and disabled', () => {
    expect.assertions(4);

    render(<LemonButton {...secondaryNoIconDisabled} />);

    const button = screen.getByRole('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background-color: ${colors.SECONDARY_DISABLED}`);
    expect(button).toHaveStyle('justify-content: center');
    expect(button).toBeDisabled();
  });
})