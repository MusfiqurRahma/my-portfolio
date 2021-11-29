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
         </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
