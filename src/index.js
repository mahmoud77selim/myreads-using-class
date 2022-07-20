import React from 'react';
import ReactDOM from 'react-dom/client';
import './MyReads.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import {HashRouter as Router,Routes,Route,} from "react-router-dom";

const rendcontainer = document.getElementById('root');
const root = ReactDOM.createRoot(rendcontainer);

root.render(<App name="MyReads" />);

function PageNotFound(){ return(<div><h1>404</h1><h2>Page Not Found</h2></div>);}

function App() {return (
    <Router><Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes></Router>);}
export default App;

// register() and unregister() >_ if work offline and to load faster use register() below 
serviceWorker.register();
