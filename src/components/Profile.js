import { useEffect } from "react";

const Profile = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect return ");
    };
  }, []);

  return (
    <>
      <h2>Profile component</h2>
      <h3>Name : {name}</h3>
    </>
  );
};

export default Profile;
