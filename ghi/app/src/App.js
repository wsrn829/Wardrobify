import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListHats from './ListHats';
import CreateHat from './CreateHat';
import { useEffect, useState } from 'react';

function App() {
  const [hats, setHats] = useState([]);

  const getHats = async () => {
    const hatsResponse = await fetch('http://localhost:8090/api/hats/')

    if (hatsResponse.ok) {
      const hatData = await hatsResponse.json()

      setHats(hatData.hats)
    }
  }

      useEffect(() => {
        getHats();
      }, [])

    return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hats" element={<ListHats hats={hats} getHats={getHats}/>} />
            <Route path="/create/hat" element={<CreateHat getHats={getHats}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;
