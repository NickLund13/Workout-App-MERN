import {BrowserRouter, Routes, Route} from 'react-router-dom'
// turotial from https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE
// tutorial github https://github.com/iamshaunjp/MERN-Stack-Tutorial/tree/lesson-14

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
         <Route 
          path="/"
          element={<Home />}
          />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
