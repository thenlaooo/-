import './App.css';
import './assets/css/styles.css'
import './assets/css/icons.min.css'
import './assets/css/theme.min.css'
import './assets/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NRSKPage from './Pages/NRSKPage';
import AddNRSKPage from "./Pages/AddNRSKPage";
import MyNRSKPage from "./Pages/MyNRSKPage";

export const SERVER_URL = 'http://127.0.0.1:8000';

function App() {
  return (
      <div className="App">

       <BrowserRouter>
           <Routes>
               <Route path={'/'} element={<MainPage/>}/>
               <Route path={'/login'} element={<LoginPage/>}/>
               <Route path={'/register'} element={<RegisterPage/>}/>
               <Route path={'/nrsk_editor'} element={<NRSKPage/>}/>
               <Route path={'/add_nrsk'} element={<AddNRSKPage/>}/>
               <Route path={'/my_nrsk'} element={<MyNRSKPage/>}/>
           </Routes>
       </BrowserRouter>

      </div>
  );
}

export default App;
