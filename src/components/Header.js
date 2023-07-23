import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

export const Title = () => (
  <div>
    <a href="/">
      <img
        src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
        alt="logo"
        className="h-28 p-2"
      />
    </a>
  </div>
);

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            {user.name}
            {isOnline ? <span>✅</span> : <span>🔴</span>}
            {loggedInUser ? (
              <>
                <button onClick={() => setLoggedInUser(false)}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => setLoggedInUser(true)}>Login</button>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
