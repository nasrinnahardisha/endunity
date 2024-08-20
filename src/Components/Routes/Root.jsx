import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto p-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;