import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Price } from "./Page/Price";
import { Footer } from "./Page/Footer";
import { Feature } from "./Page/Feature";
function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Feature />} /> */}

        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Footer />} /> */}
        <Route path="/pricing" element={<Price />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}

export default App;
