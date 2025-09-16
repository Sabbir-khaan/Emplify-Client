import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;