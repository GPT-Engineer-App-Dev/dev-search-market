import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Developers from "./pages/Developers.jsx";
import Developer from "./pages/Developer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:id" element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;
