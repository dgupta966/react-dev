import React from "react";

// Life cycle methods in class based components
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this);
    this.state = {
      count: 0,
      name: "",
      img: "",
      location: "",
    };
    console.log("Constructor - child");
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/dgupta966");
    // const json = await data.json();
    // this.setState({
    //   name: json.name,
    //   img: json.avatar_url,
    //   location: json.location,
    // });
    // console.log("componentDidMount", json);
    // this.timer = setInterval(() => {
    //   console.log("setInterval");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate-child");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }

  render() {
    console.log("render() - child");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name : {this.state.name}</h2>
        <img src={this.state.img} alt="" />
        <h3>{this.state.location}</h3>

        {/* <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Setcount
        </button> */}
      </div>
    );
  }
}

export default Profile;
