export const API = {
  key: '062f94b6879d4a4a64755999bee3a513',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export const WEATHER_API =
  '${API.base}weather?lat=${myLocation.coordinates.lat}&lon=${myLocation.coordinates.lon}&appid=${API.key}&units=metric';
