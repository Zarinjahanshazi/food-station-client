import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui in accusantium vitae necessitatibus aspernatur recusandae pariatur expedita facere fugiat nisi? Facere ipsum dolor magnam neque vero quidem atque necessitatibus vitae!</p>
        </div>
    );
};

export default Main;