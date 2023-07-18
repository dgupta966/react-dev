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

const restaurantData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "30126",
      name: "Evergreen Sweet House",
      uuid: "7c732eb9-5968-4ed4-b905-2f73cd6786a2",
      city: "4",
      area: "Dwarka",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "hdo9as1kpcnrr8bc61dw",
      cuisines: ["North Indian", "South Indian", "Chinese", "Sweets"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "evergreen-sweet-house-dwarka-dwarka",
        city: "delhi",
      },
      cityState: "4",
      address: "3, Pinnacle Mall, Sector 10, Dwarka, New Delhi",
      locality: "Dwarka",
      parentId: 3183,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "special",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 4000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4000,
        message: "",
        title: "Delivery Charge",
        amount: "4000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "LIGHT",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7474698~p=1~eid=00000189-6845-da93-192b-f31600d00116~srvts=1689671555731",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "30126",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "LIGHT",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "52832",
      name: "Sab Ki Rasoi Madras Cafe",
      uuid: "79ce5811-54e5-4024-a611-ac614e7a37b1",
      city: "4",
      area: "Dwarka",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "nee89w7qxbhrypnm0uvg",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "sab-ki-rasoi-madras-cafe-dwarka-dwarka",
        city: "delhi",
      },
      cityState: "4",
      address:
        "B-171, Sector 7, Palam Extention, Near Ramphal Chowk, Dwarka, New Delhi",
      locality: "Sector 7",
      parentId: 15924,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3200,
        message: "",
        title: "Delivery Charge",
        amount: "3200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "52832",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "359846",
      name: "Punjabi Angithi",
      uuid: "0bd02131-0d64-40a3-bc08-a54f9e6c324e",
      city: "4",
      area: "Dwarka",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "yzr38r3icerrt3tl5mfg",
      cuisines: ["North Indian", "Chinese", "Punjabi", "Tandoor", "Kebabs"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "punjabi-angithi-dwarka-dwarka",
        city: "delhi",
      },
      cityState: "4",
      address: "C-389, Ramphal Chowk, Sector 7, Dwarka",
      locality: "Sector 6",
      parentId: 4464,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3200,
        message: "",
        title: "Delivery Charge",
        amount: "3200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "359846",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "P",
      id: "35278",
      name: "Biryani By Kilo",
      uuid: "51a61b26-d235-4ec8-9cc9-594845c17712",
      city: "4",
      area: "Dwarka",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "rvaskqm6dl14edrmbq8w",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      tags: [],
      costForTwo: 70000,
      costForTwoString: "₹700 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "biryani-by-kilo-sector-18-dwarka",
        city: "delhi",
      },
      cityState: "4",
      address: "D- 484, 1st floor, dwarka sector 7",
      locality: "Sector 7",
      parentId: 130,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3200,
        message: "",
        title: "Delivery Charge",
        amount: "3200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7493042~p=4~eid=00000189-6845-da93-192b-f31700d0046e~srvts=1689671555731",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "35278",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "324769",
      name: "Grover Sweets",
      uuid: "aaf0a332-e4d6-4478-a4af-1e26e323468a",
      city: "4",
      area: "Dwarka",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "usooiazpsx6dh2ywoham",
      cuisines: [
        "Sweets",
        "Snacks",
        "Indian",
        "North Indian",
        "Tandoor",
        "Desserts",
        "Street Food",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: "grover-sweets-dwarka-dwarka",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Ground Floor G-50&51, Vardhman star city mall, LSC -3, Sector 7, Dwarka",
      locality: "Vardhman Star City Mall",
      parentId: 91010,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3200,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3200,
        message: "",
        title: "Delivery Charge",
        amount: "3200",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.8 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "324769",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantsCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} star</h4>
    </div>
  );
};

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
      {restaurantData?.map((item) => (
        <RestaurantsCard key={item.data.id} {...item.data} />
      ))}
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
