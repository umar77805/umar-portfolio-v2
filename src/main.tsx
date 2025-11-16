declare global {
  interface Window {
    removeSpinner: () => void;
  }
}

import AOS from "aos";
import "aos/dist/aos.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

AOS.init({
  duration: 700,
  easing: "ease-out",
  delay: 0,
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);

window.removeSpinner?.();
