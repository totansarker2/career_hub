import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="text-red-500">
            <header></header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;