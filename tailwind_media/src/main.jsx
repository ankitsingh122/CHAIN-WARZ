import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store/index.jsx'
import { Provider } from 'react-redux'
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThirdwebProvider
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
          coinbaseWallet(),
          walletConnect(),
        ]}
        clientId="263ce4ddd19e94c4f99551c0effead31"
      >
        <App />
      </ThirdwebProvider>
    </Provider>
  </React.StrictMode>
);
