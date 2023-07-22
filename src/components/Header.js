import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => (
  <div>
    <a href="/">
      <img
        src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
        alt="logo"
        className="logo"
      />
    </a>
  </div>
);

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
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
