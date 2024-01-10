import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Main = () => {
    return (
        <div className="container mx-auto text-center mt-40">
            <Header></Header>
            <Outlet></Outlet>
           
            
        </div>
    );
};

export default Main;