import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner/Banner';
import "bootstrap/dist/css/bootstrap.css";
import Cardspart from './Component/Cardspart/Cardspart';
import Roles from './Component/Roles/Roles';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Navpart from './Component/Navpart/Navpart';

function App() {
  return (
    <BrowserRouter>
     
     

      <Routes>
        <Route 
          path="/" 
          element={
            <>
            <Navpart/>
              <Banner /><Cardspart /><Roles /><Footer />
            </>
          } 
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
