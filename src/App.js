

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMovies from './components/AllMovies/AllMovies';
import Begin from './components/Begin/Begin';
import BookMark from './components/BookMark/BookMark';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import TvShow from './components/TvShow/TvShow';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Begin />} />
        <Route path='/home' element={<Home />}>
          <Route index element={<AllMovies />} />
          <Route path='movie' element={<Movies />} />
          <Route path='tvshow' element={<TvShow />} />
          <Route path='bookmark' element={<BookMark />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
