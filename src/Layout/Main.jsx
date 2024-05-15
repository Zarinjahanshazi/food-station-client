import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam maiores obcaecati ipsa iste expedita, dolore perferendis odio modi consectetur praesentium, molestias suscipit quidem officiis repellendus? Exercitationem illum labore cum in.</P>
        </div>
    );
};

export default Main;