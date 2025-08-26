import React from "react";
import { useState, useEffect } from "react";

const api = {
  key: "031ffe2d617e055dbda438338212158b", 
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}weather?q=sri ganganagar&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, []);

  const searchPressed = () => {
    if (search.trim() === "") return;
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="text-gray-900 bg-gray-300 p-5 rounded-lg font-sans w-full max-w-md mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-blue-400">Weather</h1>
        <div className="flex gap-2 mb-4 max-[400px]:flex-col">
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
          />
          <button
            onClick={searchPressed}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        {weather.cod === "404" ? (
          <p className="text-red-500 font-semibold">City not found</p>
        ) : typeof weather.main !== "undefined" ? (
          <div className="space-y-1">
            <p className="text-lg font-semibold">{weather.name}</p>
            <p className="text-2xl font-bold">{weather.main.temp}°C</p>
            <p className="text-blue-700">{weather.weather[0].main}</p>
            <p className="italic text-gray-700">({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Weather;