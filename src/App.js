import Home from './components/Home'
import Portfolio from './components/Portfolio'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
    </div>
  );
}

export default App;
