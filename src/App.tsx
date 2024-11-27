import {Provider} from 'react-redux';
import FirebaseAppWrapper from '~/firebase/app-wrapper';
import {store} from '~/redux/store';
import AppRouter from '~/routes/router';

import '@egjs/react-flicking/dist/flicking.css';
import {theme} from './mui-theme';
import {ThemeProvider} from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <FirebaseAppWrapper>
          <AppRouter />
        </FirebaseAppWrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
