import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider className="h-full">
      <App />
    </HeroUIProvider>
  </React.StrictMode>
);
