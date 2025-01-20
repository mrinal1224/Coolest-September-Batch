import './index.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieCard from './components/MovieCard';
function App() {
  return (
    <>
    <Navbar/>
    <div className='space-y-10 flex flex-wrap'>
     <Banner/>
     <MovieCard/>
     <MovieCard/><MovieCard/><MovieCard/><MovieCard/>
     <MovieCard/>
     <MovieCard/>
     <MovieCard/>
    </div>
    </>
  );
}

export default App;
