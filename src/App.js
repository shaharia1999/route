

import { Route, Routes } from 'react-router-dom';
import About from './compunant/About/About';
import Deteles from './compunant/EachFriendsDetels/Deteles';
import Friends from './compunant/Friends/Friends';
import Header from './compunant/Header/Header';
import Home from './compunant/Home/Home';
import Nastet from './compunant/Nastet/Nastet';
import NotFound from './compunant/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friends/:detels'element={<Deteles></Deteles>}></Route>
        <Route path='/page' element={<Nastet/>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
