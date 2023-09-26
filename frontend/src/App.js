
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/shared/MyNav';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import WalletForm from './components/WalletForm';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          {/* <Route  path='/login' element={<Login/>}></Route>
          <Route  path='/signup' element={<SignUp/>}></Route> */}
          <Route  path='/createwallet' element={<WalletForm/>}></Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
