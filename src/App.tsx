import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import UserProvider from './contexts/UserContext.tsx'
import HomePage from './Pages/HomePage.tsx';
import Login from './Pages/Login.tsx';
import PrivateRoutes from './components/PrivateRoutes.js';
import Profile from './Pages/Profile.js';
import History from './Pages/History.js';
import Focus from './Pages/Focus.js';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme.ts';
import GoalsPage from './Pages/GoalsPage.tsx';
import Store from './Pages/Store.tsx';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
          <Routes>
              <Route element={<PrivateRoutes/>}>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/goals" element={<GoalsPage/>}/>
                  <Route path="/store" element={<Store/>}/>
                  {/* <Route path="/history" element={<History/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/focus" element={<Focus/>}/> */}
              </Route>
              <Route path="/login" element={<Login/>}/>
            </Routes>
        </UserProvider>
    </ThemeProvider>
  );
}

export default App;
