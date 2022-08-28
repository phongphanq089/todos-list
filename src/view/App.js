import logo from './logo.svg';
import "./App.scss";
import Todolist from './todos/todoslist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './navigation bar/navBar';
import Home from './navigation bar/home';
import About from './navigation bar/about';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
        <Navigation/>
        <img src={logo} className="App-logo" alt="logo" />
        
      
       
     <Switch>
     <Route path="/" exact>
       <Home/>
     </Route>
     <Route path="/todo">
     <Todolist />
     </Route>
     <Route path="/about">
       <About/>
     </Route>
   </Switch>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
