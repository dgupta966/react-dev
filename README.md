# react-dev

# parcel

1. creating a server
2. HMR - hot module replacement -> doing this parcel or bundler
3. File watcher algorithm - written in C++
4. Bundling
5. minify
6. cleaning our code
7. dev and production build
8. super fast build algorithm
9. image optimization
10. caching while development
11. compression - e.g., rename variables, etc
12. compatible of older version of browser
13. it also add polyfill
14. HTTPS on dev --> npx parcel index.html --https(may be complaint because of localhost and chrome doesn't trust localhost)
15. manages port numbers
16. consistent hashing --> that parcel uses for caching
17. tree shaking -> removing unwanted code

# JSX ??

JSX => React.createElement => object => html(DOM)

babel convert JSX => React.createElement

# using React.createElement

const heading = React.createElement(
"h1",
{
id: "title",
key: "h1",
},
"Heading 1"
);

const heading2 = React.createElement(
"h1",
{
id: "title",
key: "h2",
},
"Heading 2"
);

const container = React.createElement(
"div",
{
id: "container",
},
[heading, heading2]
);

React.createElement => object => html(DOM)

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
