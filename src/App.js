import logo from "./logo.svg";
import "./App.css";

import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import SearchComponent from "./coponents/Search";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<SearchComponent />} />
      </Routes>
    </>
  );
}

export default App;
