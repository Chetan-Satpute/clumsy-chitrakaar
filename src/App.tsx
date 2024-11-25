import {Provider} from 'react-redux';
import AppRouter from './routes/router';
import '@egjs/react-flicking/dist/flicking.css';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
