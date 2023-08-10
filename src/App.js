import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enable or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const togglemode = ()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#0C2D48'
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtil" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container  my-3" mode={mode}>
    <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/" element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
    </div>
    </BrowserRouter>
  </>
  );
}

export default App;
