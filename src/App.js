import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
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
