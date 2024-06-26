//React Query
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
//Redux and Toolkit
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
//React-Router-Dom
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Route";
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
// Mantine
import { MantineProvider } from "@mantine/core";
import { MantineTheme } from "./theme/MantineTheme";
//Zustand
import { useBookStore } from "./store/zustandStore/bookStore";
import { useEffect } from "react";
const queryClient = new QueryClient();

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const amount = useBookStore((state) => state.amount);
  const updateAmount = useBookStore((state) => state.updateAmount);


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CacheProvider value={cacheRtl}>
          <PersistGate persistor={persistor}>
            <ConfigProvider theme={antDTheme}>
              <ThemeProvider theme={MuiTheme}>
                <MantineProvider theme={MantineTheme}></MantineProvider>
                <RouterProvider router={router} />
              </ThemeProvider>
            </ConfigProvider>
            <div className='App'>Template For React Config
            <button onClick={()=> updateAmount(amount + 1)} >zustand {amount} </button>
            
            </div>
          </PersistGate>
        </CacheProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
