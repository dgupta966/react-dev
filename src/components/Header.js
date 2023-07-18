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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
