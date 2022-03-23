import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Book from './components/Book';
import Pricing from './components/Pricing';
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book" element={<Book />} />
        </Routes>
    </div>
  );
}

export default App;
