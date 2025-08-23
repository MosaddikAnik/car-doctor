import { Outlet } from 'react-router-dom';
import Navbar from '../Componets/Home/Navbar/Navbar';
import Footer from '../Componets/Home/Footer/Footer';

const Main = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;