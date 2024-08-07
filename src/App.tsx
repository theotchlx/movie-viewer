import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/pass/ui/auth-page";
import MoviePage from "./pages/view/ui/movie-page";
import ViewPage from "./pages/view/ui/view-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pass" />} />
        <Route path="/pass" element={<AuthPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/view/:movieId" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
