import {Provider} from 'react-redux';
import FirebaseAppWrapper from '~/firebase/app-wrapper';
import {store} from '~/redux/store';
import AppRouter from '~/routes/router';

import '@egjs/react-flicking/dist/flicking.css';

function App() {
  return (
    <Provider store={store}>
      <FirebaseAppWrapper>
        <AppRouter />
      </FirebaseAppWrapper>
    </Provider>
  );
}

export default App;
