import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import MainPage from "./page/MainPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
