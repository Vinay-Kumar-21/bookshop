import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import BestBooks from './components/BestBooks/BestBooks'
import Banner from './components/Banner/Banner';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';

function App() {
  return (
   <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar/>
        <Hero/>
        <BestBooks/>
        <Banner/>
        <AppStoreBanner/>
      </div>
    </>
  );
}

export default App;
