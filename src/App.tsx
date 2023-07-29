import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import Main from "./pages/Main";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
