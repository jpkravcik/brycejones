import placeholder from './assets/placeholder.mp4'
import Header from './components/Header'
import Home from './components/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
