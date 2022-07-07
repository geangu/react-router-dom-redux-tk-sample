import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import store from './data/store';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Profile from './pages/profile';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1>App</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
