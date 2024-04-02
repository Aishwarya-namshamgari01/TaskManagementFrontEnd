import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import AppRoutes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import "./styles/customProperties.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
            <ToastContainer
              position="top-right"
              autoClose={5000}
            ></ToastContainer>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
