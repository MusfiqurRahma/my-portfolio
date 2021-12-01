import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/Home/About/About';
import Resume from './pages/Home/Resume/Resume';
import Contact from './pages/Home/Contact/Contact';
import Blogs from './pages/Home/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Projects from './pages/Home/Projects/Projects';
import BarHouse from './pages/ProjectDetails/BarHouse';
import Travoloky from './pages/ProjectDetails/Travoloky/Travoloky';
import HealthCare from './pages/ProjectDetails/HealthCare/HealthCare';
import SmartSchool from './pages/ProjectDetails/SmartSchool/SmartSchool';
import SuperHero from './pages/ProjectDetails/SuperHero/SuperHero';
import SuperRestaurant from './pages/ProjectDetails/SuperRestaurant/SuperRestaurant';
import MacBook from './pages/ProjectDetails/MacBook/MacBook';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/home' element={<Home></Home>}>
          </Route>
          <Route path='/about' element={<About></About>}>
          </Route>
          <Route path='/resume' element={<Resume></Resume>}>
          </Route>
          <Route path='/projects' element={<Projects></Projects>}>
          </Route>
          <Route path='/contact' element={<Contact></Contact>}>
          </Route>
          <Route path='/blog' element={<Blogs></Blogs>}>
          </Route>
          <Route path='/barHouse' element={<BarHouse></BarHouse>}>
          </Route>
          <Route path='/travoloky' element={<Travoloky></Travoloky>}>
          </Route>
          <Route path='/healthCare' element={<HealthCare></HealthCare>}>
          </Route>
          <Route path='/smartSchool' element={<SmartSchool></SmartSchool>}>
          </Route>
          <Route path='/superHeroes' element={<SuperHero></SuperHero>}>
          </Route>
          <Route path='/superRestaurant' element={<SuperRestaurant></SuperRestaurant>}>
          </Route>
          <Route path='/macBook' element={<MacBook></MacBook>}>
          </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
