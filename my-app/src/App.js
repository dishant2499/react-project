
import './App.css';
import Header from './container/header';
import Home from './container/Home';
import Package from './container/Package';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from './container/Calculator';
import Todo from './container/Todo';
import Noresult from './container/Noresult';
import Weather from './container/Weather';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/package" element={<Package/>} />
    <Route path="/calculator" element={<Calculator/>} />
    <Route path="/todo" element={<Todo/>} />
    <Route path="/weather" element={<Weather/>} />
    <Route path="*" element={<Noresult/>} />
    
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
