const WeatherApp = () => {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="seach-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">London</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter location" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
