import { NavLink } from "react-router-dom";

const Header = () => {
  
    return (
        <div className="flex justify-around mb-20">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addApple">AddApple</NavLink>
            <NavLink to="/updateApple">UpdateApple</NavLink>
        </div>
    );
};

export default Header;