import { useState } from "react";
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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            {loggedInUser ? (
              <>
                <span>🟢</span>
                <button onClick={() => setLoggedInUser(false)}>Logout</button>
              </>
            ) : (
              <>
                <span>🔴</span>
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
