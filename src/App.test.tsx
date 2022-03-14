import { render, screen } from '@testing-library/react';
import App from './App';
import { buttonsPrimary, buttonsSecondary } from './utils.js/buttons';

const bgURL = "https://assets.website-files.com/5f7e0994165e365ab297bfe7/5f7fe4c0c5021fe56276361f_redefina%201.png"

describe('App', () => {
  it('should have "Lemon Energia" text rendered', () => {

    render(<App />);

    const linkElement = screen.getByText(/Lemon Energia/i);

    expect(linkElement).toBeInTheDocument();
  })

  it(`should have ${buttonsPrimary.length + buttonsSecondary.length} buttons rendered`, () => {
    render(<App />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(buttonsPrimary.length + buttonsSecondary.length);
  })

  it(`should have background image`, () => {
    render(<App />);

    const background = screen.getByTitle('bg-image');

    expect(background).toBeInTheDocument();
    expect(background).toHaveStyle(`background-image: url(${bgURL})`);	
  })
});
