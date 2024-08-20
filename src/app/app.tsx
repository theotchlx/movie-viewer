import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import PassPage from '@/pages/pass/src/lib/ui/pass-page';
import ViewPage from '@/pages/view/src/lib/ui/view-page';
import MoviePage from '@/pages/view/src/lib/ui/movie-page';

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to="/pass" />} />
          <Route path="/pass" element={<PassPage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/view/:movieId" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
