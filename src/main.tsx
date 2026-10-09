import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import ContactForm from "./Medium Difficulty/ContactForm.tsx";
import ItemListManager from "./Medium Difficulty/ItemListManager.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <div className="module">
      <ContactForm />
    </div>
    <div className="module">
      <ItemListManager />
    </div>
  </StrictMode>,
);
