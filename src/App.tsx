import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Routes from './router';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
