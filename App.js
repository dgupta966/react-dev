import React from "react";
import ReactDOM from "react-dom/client";
// # parcel
// creating a server
// HMR - hot module replacement -> doing this parcel or bundler
// File watcher algorithm - written in C++
// Bundling
// minify
// cleaning our code
// dev and production build
// super fast build algorithm
// image optimization
// caching while development
// compression - e.g., rename variables, etc
// compatible of older version of browser
// it also add polyfill
// HTTPS on dev --> npx parcel index.html --https(may be complaint because of localhost and chrome doesn't trust localhost)
// manages port numbers
// consistent hashing --> that parcel uses for caching
// tree shaking -> removing unwanted code

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Heading 1"
// );

// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );

// React.createElement => object => html(DOM)

// console.log(container);

// JSX ??

// JSX => React.createElement => object => html(DOM)

// babel convert JSX => React.createElement

// const heading3 = <h1 key="h3">React</h1>;

const choleBhature = {
  name: "Chole bhature",
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hdo9as1kpcnrr8bc61dw",
  cusines: ["North india", "masala"],
  rating: 4.2,
};

const RestaurantsCard = () => (
  <div className="card">
    <img src={choleBhature.img} alt="" />
    <h2>{choleBhature.name}</h2>
    <h3>{choleBhature.cusines.join(",")}</h3>
    <h4>{choleBhature.rating} star</h4>
  </div>
);

const Title = () => (
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

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
      <RestaurantsCard />
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
