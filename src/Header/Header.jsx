import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <Link to={'/'} className="mr-5 font-bold">Home</Link>
           <Link to ={'/login'} className="font-bold">Login</Link>
            
        </div>
    );
};

export default Header;