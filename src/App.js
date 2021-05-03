import {Provider} from 'react-redux';
import {store} from './store';
import Comp1 from './Comp1';

function App() {
  return (
    <Provider store={store}>
      <Comp1 />
    </Provider>
  );
}

export default App;
