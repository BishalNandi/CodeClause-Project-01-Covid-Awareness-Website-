import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Main from './Main';
import Latest from './Latest';
import About from './About';
import Symptoms from './Symptoms';
import Prevention from './Prevention';
import ContactUs from './ContactUs';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <Main/>
  <Latest/>
  <About/>
  <Symptoms/>
  <Prevention/>
  <ContactUs/>
  <Footer/>

  </>
);


