import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
