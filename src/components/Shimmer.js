const Shimmer = () => {
  return (
    <div>
      <div className="restaurant-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <>
              <div key={index} className="shimmer-card"></div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
