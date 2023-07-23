import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy name",
    email: "dummy@gmail.com",
  },
});

// to show display name of our context in react devtools --> for debugging
UserContext.displayName = "UserContext";

export default UserContext;
