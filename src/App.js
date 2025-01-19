import logo from './logo.svg';
import './App.css';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import ErrorPage from './pages/error';
import MapWithGeoJSON from './pages/map';
import TrackingPage from './pages/track';


function App() {
  return (<>
    
       <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link to="/map" className="hover:underline">Map</Link>
          </li>
          <li>
            <Link to="/track" className="hover:underline">TrackMe</Link>
          </li>
    
        </ul>
      </nav>

      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<MapWithGeoJSON />} /> 
          <Route path="/track" element={<TrackingPage />} /> 
          <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
    </Router>
    
        </>
  );
}

export default App;
