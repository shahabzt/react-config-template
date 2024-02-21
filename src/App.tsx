//React Query
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
//Redux and Toolkit
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
//React-Router-Dom
import { RouterProvider } from "react-router-dom";
import { Router } from "./pages/Route";
//AntD Theme
import { ConfigProvider } from "antd";
import { antDTheme } from "./theme/antDTheme";
//MUI Themes
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import MuiTheme from "./theme/MuiTheme";

const queryClient = new QueryClient();

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CacheProvider value={cacheRtl}>
          <PersistGate persistor={persistor}>
            <ConfigProvider theme={antDTheme}>
              <ThemeProvider theme={MuiTheme}></ThemeProvider>
              <RouterProvider router={Router} />
            </ConfigProvider>
            <div className='App'>Template For React Config</div>
          </PersistGate>
        </CacheProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
