import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./app/globals.scss";
import Loading from "./layouts/loading.tsx";
const App = React.lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
