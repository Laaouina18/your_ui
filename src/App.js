import './App.css';
import { Routes, Route} from 'react-router-dom'
import  Home  from './pages/home';
import  About  from './pages/about';
import  Navbar  from './components/Navbar';
import  Order  from './components/Order';
import  Notfound  from './components/Notfound';
import  FeaturedProducts  from './components/utils/FeaturedProducts';
import  NewProducts  from './components/utils/NewProducts';
import  Categories  from './pages/categories';
import  Register  from './pages/register';
import  Confirmation  from './pages/Confirmation';
import Footer from './components/footer';
import  CategoriesSession  from './components/CategoriesSession';
import  CategoriesSubSession  from './components/CategoriesSubSession';

function App() {
  return (
    <>
      <div className='App'>  
        <Navbar />

	<CategoriesSession/>
<Confirmation/>
<FeaturedProducts/>
<Home/>
<NewProducts/>
<Notfound/>
<Register/>

        <Footer/>
      </div>
    </>
  );
}

export default App;
