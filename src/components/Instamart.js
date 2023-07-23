import { useState } from "react";

const Section = ({ name, description, isvisible, setIsVisible, id }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="text-xl font-bold">{name}</h1>
      {isvisible ? (
        <>
          <button onClick={() => setIsVisible("none")} className="underline">
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible(id)} className="underline">
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl font-bold m-2 p-2">Instamart</h1>
      <Section
        name="About Instamart"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isvisible={visibleSection === "about"}
        setIsVisible={(id) => {
          setVisibleSection(id);
        }}
        id="about"
      />

      <Section
        name="Team Instamart"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isvisible={visibleSection === "team"}
        setIsVisible={(id) => {
          setVisibleSection(id);
        }}
        id="team"
      />

      <Section
        name="Career"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isvisible={visibleSection === "career"}
        setIsVisible={(id) => {
          setVisibleSection(id);
        }}
        id="career"
      />

      <Section
        name="Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isvisible={visibleSection === "products"}
        setIsVisible={(id) => {
          setVisibleSection(id);
        }}
        id="products"
      />

      <Section
        name="Details"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isvisible={visibleSection === "details"}
        setIsVisible={(id) => {
          setVisibleSection(id);
        }}
        id="details"
      />
    </div>
  );
};

export default Instamart;
