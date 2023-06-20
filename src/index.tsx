import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./redux/store";
import LanguageContextProvider from "./localization/languageContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/muiTheme";

import "./index.css";

import './fonts/HelveticaNeue/HelveticaNeueItalicExtraBold.ttf';
import './fonts/HelveticaNeue/HelveticaNeueItalicMedium.ttf';
import './fonts/HelveticaNeue/HelveticaNeueItalicSemiBold.ttf';
import './fonts/HelveticaNeue/HelveticaNeueRegular.ttf';
import './fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf';

let { store, persistor } = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LanguageContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </LanguageContextProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
