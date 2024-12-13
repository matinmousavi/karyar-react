import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/generalLayout/Content/Content';
import Footer from './components/generalLayout/Footer/Footer';
import Header from './components/generalLayout/header/Header';
import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}

export default App;