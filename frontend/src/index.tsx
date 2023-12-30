import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './entities/store/redux-store';
import { LanguageProvider } from 'widgets/setLanguage/langContent';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div className='loader_comp_content'>Loading...</div>}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
