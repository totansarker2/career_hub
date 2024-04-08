import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="text-red-500">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;