import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import Modal from "./Modal";

const NavHead = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;

const Header = ({ myModal, setMyModal }) => {
  let time = new Date().toLocaleTimeString();
  const [ntime, setNtime] = useState(time);
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState("true");
  const [myLocation, setMyLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lon: "" },
  });
  const API = {
    key: "062f94b6879d4a4a64755999bee3a513",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const handleGeoSucces = (location) => {
    setMyLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };

  const handleGeoError = (error) => {
    setMyLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      handleGeoError({
        code: 0,
        message: "not support",
      });
    }
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  }, []);

  useEffect(() => {
    fetch(
      `${API.base}weather?lat=${myLocation.coordinates.lat}&lon=${myLocation.coordinates.lon}&appid=${API.key}&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        setLoading(false);
      });
  }, [myLocation]);

  const handleModal = (e) => {
    setMyModal(!myModal);
  };

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setNtime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <NavHead>
      <div onClick={handleModal}>날씨</div>
      {myModal === true ? (
        <Modal
          myModal={myModal}
          setMyModal={setMyModal}
          weather={weather}
          setWeather={setWeather}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        ""
      )}
      <div>{ntime}</div>
      <div>{moment().format("YYYY-MM-DD")}</div>
    </NavHead>
  );
};

export default Header;
