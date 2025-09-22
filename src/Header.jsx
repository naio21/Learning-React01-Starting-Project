import logo from './assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Cool', 'Essential', 'Key', 'Important', 'Necessary', 'Vital', 'Indispensable'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const prefix = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
      <header>
        <img src={logo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {prefix} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
export default Header;