import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogIn from './LogIn';
import MapContainer from './MapContainer';
import SignUp from './SignUp';
import Navbar from './Navbar';
import MyProfile from './MyProfile';
import AddSpot from './AddSpot';
import { UserProvider } from '../context/user';
import { useState } from 'react';
import { SwitchesProvider } from '../context/switches';

function App() {
  const [addSpot, setAddSpot] = useState(false)
  const [spotLat, setSpotLat] = useState(null)
  const [spotLng, setSpotLng] = useState(null)

  return (
    <Router>
    <div className="App">
      <UserProvider>
        <SwitchesProvider>
        <Navbar
          addSpot={addSpot}
          setAddSpot={setAddSpot}
          />
        <Routes>
          <Route exact path='/'
          element={<MapContainer
            addSpot={addSpot} 
            setAddSpot={setAddSpot}
            setSpotLat={setSpotLat}
            setSpotLng={setSpotLng}
            />}
          />
          <Route exact path='addspot'
          element={<AddSpot
            spotLat={spotLat}
            spotLng={spotLng}
            addSpot={addSpot}
            setAddSpot={setAddSpot}
            />}
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
      </SwitchesProvider>
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
