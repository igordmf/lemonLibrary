import { LemonButton } from './components/LemonButton';
import { ColorType } from './components/LemonButton/LemonButton.styles';
import { GlobalStyle } from './styles/global.styles';
import { buttonsPrimary, buttonsSecondary } from './utils.js/buttons';
import { AppStyles, BgStyles, HeaderStyles, ButtonsDivStyles, MainStyles, TitleStyles } from './styles/App';
import lemonLogo from './assets/lemon-logo.png';

function App() {
  return (
    <>
      <GlobalStyle />

      <div className='App' style={AppStyles}>
        <header className='App-header' style={HeaderStyles}>
          <img alt='lemon' src={lemonLogo} />

          <h1 style={TitleStyles}>Lemon Energia</h1>
        </header>

        <main className='App-main' style={MainStyles}>
          <div style={ButtonsDivStyles}>
            {buttonsPrimary.map(button => {
              const color = button.color as ColorType;
              return (
                <LemonButton key={button.id} {...button} color={color} />
              );
            })}
          </div>

          <div style={ButtonsDivStyles}>
            {buttonsSecondary.map(button => {
              const color = button.color as ColorType;
              return (
                <LemonButton key={button.id} {...button} color={color} />
              );
            })}
          </div>
        </main>
      </div>
      
      <div style={BgStyles}/>
    </>
  );
}

export default App;
