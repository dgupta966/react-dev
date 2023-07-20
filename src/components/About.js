import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <p>This is a About us page </p>
//       {/* <ProfileFunctionalComponent name={"Deepak"} /> */}
//       <ProfileClassComponent name={"Deepak"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent component");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent render()");
    return (
      <div>
        <h1>About us page</h1>
        <p>This is a About us page </p>
        {/* <ProfileFunctionalComponent name={"Deepak"} /> */}
        <ProfileClassComponent name={"Deepak"} />
        {/* <ProfileClassComponent name={"Deepak"} /> */}
      </div>
    );
  }
}

export default About;
