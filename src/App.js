import './App.css';
import NavBar  from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
