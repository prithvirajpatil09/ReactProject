import { Route, Router, Routes, } from 'react-router-dom';
import './App.css';
import LoginForm from './Component/LoginForm';
import Dashboard from './Component/Dashboard';
import International from './International';
import Domestic from './Domestic';
import NavBarComponet from './Component/NavBar';
import PopularPackage from './Component/PopularPackage';
import Footer from './Component/Footer';
import ReviewCard from './Component/ReviewCard';
import SubCategories from './Component/SubCategories';
function App() {
  return (


    <>
      <NavBarComponet />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/international" element={<International />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/popularPackage" element={<PopularPackage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/SubCategories" element={<SubCategories />} />

      </Routes>
      <Footer/>
    </>




  );
}

export default App;
