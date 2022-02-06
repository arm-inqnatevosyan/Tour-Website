import './App.css';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
