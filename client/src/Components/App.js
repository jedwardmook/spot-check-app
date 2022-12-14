import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogIn from './LogIn';
import MapContainer from './MapContainer';
import SignUp from './SignUp';
import Navbar from './Navbar';
import MyProfile from './MyProfile';
import { UserProvider } from '../context/user';

function App() {

  return (
    <Router>
    <div className="App">
      <UserProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/'
          element={<MapContainer />}
          />
          <Route path='signup'
          element={<SignUp />}
          />
          <Route path='login'
          element={<LogIn />}
          />
          <Route path={'myprofile'}
          element={<MyProfile/>}
          />
      </Routes>
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
