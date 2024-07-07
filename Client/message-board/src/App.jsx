import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MakePosts from './MakePosts';
import Posts from './Posts';
import Header from './Components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/MakePosts" element={<MakePosts />} />
      </Routes>
    </Router>
  );
};

export default App;

