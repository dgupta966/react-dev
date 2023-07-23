const Shimmer = () => {
  return (
    <div>
      <div className="flex flex-wrap m-2 p-2">
        {Array(20)
          .fill("")
          .map((item, index) => (
            <div key={index} className="h-52 w-52 m-2 p-2 bg-gray-300 "></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
