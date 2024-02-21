import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./pages/Route";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={Router} />
          <div className='App'>Template For React Config</div>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
