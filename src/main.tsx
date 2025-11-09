declare global {
  interface Window {
    removeSpinner: () => void;
  }
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import App from "./App.tsx";

AOS.init({
  duration: 700,
  easing: "ease-out",
  delay: 0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

window.removeSpinner?.();
