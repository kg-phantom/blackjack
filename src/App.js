import Header from './components/Header';
import Intro from './components/Intro';
import Game from './components/Game';
import NoMatch from './components/NoMatch';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/play' element={<Game />} />

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
