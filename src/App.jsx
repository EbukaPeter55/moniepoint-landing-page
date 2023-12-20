import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing/Landing.component.jsx";
import './App.css';

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Landing />} />
          </Routes>
      </BrowserRouter>
      )
}

export default App
