
import A from './countercomponent/A';
import B from './countercomponent/B';
import Color from './theme/Color';
import Theme from './theme/Theme';
const App = () => {
  return (
    <div>
      <A />
      <B />
      <br /><br />
      <Theme />
      <Color />
    </div>
  );
};
export default App;
