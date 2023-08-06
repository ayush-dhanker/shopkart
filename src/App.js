import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductPage from "./Components/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
