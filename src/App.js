import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home'
import LocationTime from './pages/LocationTime';
import TimeDifference from './pages/TimeDifference';
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/location-time' element={<LocationTime/>} />
        <Route path='/time-difference' element={<TimeDifference/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
