import "./App.css";
import UserPage from "./pages/UersPage";
import UserComponentWithPagination from "./pages/UserComponentWithButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/pagination" element={<UserComponentWithPagination />} />
      </Routes>
    </Router>
  );
}

export default App;
