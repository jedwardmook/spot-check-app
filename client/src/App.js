import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogIn from './LogIn';
import MapContainer from './MapContainer';
import SignUp from './SignUp';

function App() {

  return (
    <Router>
    <div className="App">
      <MapContainer />
      <Routes>
      <Route path='signup'
        element={<SignUp />}
        />
      <Route path='login'
        element={<LogIn />}
        />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
