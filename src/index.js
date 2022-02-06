import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';



ReactDOM.render(
  <React.StrictMode>
<Router>
<App />
  <Routes>
   <Route path="/" element={<Navbar />}>
      <Route index element={<App/>} />
      <Route path="services" element={<Blog />} />
      <Route path="sign-up" element={<Footer />} />
      <Route path="*" element={<NotFound />} />
   </Route>
  </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
