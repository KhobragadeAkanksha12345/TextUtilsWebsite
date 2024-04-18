import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //state variable whenever dark mode is enableed or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500 );
  }

const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("white mode has been enabled", "success")
  }
}
  return (
<>
 {/*<Navbar  title="TextUtils" aboutText="About" mode={darkMode} />*/}
 <Router>
 <Navbar  title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
 <div className='container my-3'>
 <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
         <Route path="/">
         <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Charecter counter, Remove Extra Spaces" mode={mode} />
          </Route>
        </Switch>
     {/*<About />*/}
 </div>
 </Router>
 </>
);
}
export default App;
