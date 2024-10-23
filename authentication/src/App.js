import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { PrivateRoute } from './General/PrivateRoute';
import { Dashboard } from './Pages/Dashboard';
import { Query } from './Pages/Query';
import { WithoutQuery } from './Pages/WithoutQuery';
import { Formic } from './Pages/Formic';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route element={<PrivateRoute />}> 
                  <Route path='/dashboard' element={<Dashboard  />}/>
                  <Route path='/withReactQuery' element={<Query />}/>
                  <Route path='/withoutReactQuery' element={<WithoutQuery  />}/>
                  <Route path='/formic' element={<Formic  />}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
