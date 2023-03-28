import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';
import Policy from './Components/Components/footer-documentation/privacy-policy';
import Returnpolicy from './Components/Components/footer-documentation/ret-policy';
import FAQ from './Components/Components/footer-documentation/FAQ/faq';
import Terms from './Components/Components/footer-documentation/terms';

ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/policy" element={<Policy />}/>
      <Route path="/ret-policy" element={<Returnpolicy/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/terms" element={<Terms/>}/>


     </Routes>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
