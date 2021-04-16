// import React from 'react';
// import styled from 'styled-components';

// const ModalContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: #00000080;
//   z-index: 100000;

//   .weatherModal {
//     background-color: #fff;
//     position: absolute;
//     width: 350px;
//     height: 350px;
//     border: 1px solid black;
//     border-radius: 10px;
//     text-align: center;
//   }

//   .weatherList {
//     margin-top: 10px;
//   }

//   button {
//     margin-top: 10px;
//     width: 50px;
//     height: 35px;
//     font-family: 'Roboto', sans-serif;
//     font-size: 11px;
//     text-transform: uppercase;
//     letter-spacing: 2.5px;
//     font-weight: 500;
//     color: #000;
//     background-color: #a6ffcf;
//     border: none;
//     border-radius: 45px;
//     box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//     transition: all 0.3s ease 0s;
//     cursor: pointer;
//     outline: none;
//   }
//   button:hover {
//     background-color: #2ee59d;
//     box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
//     color: #fff;
//     transform: translateY(-7px);
//   }
// `;

// export default function Modal({ myModal, setMyModal, weather, setWeather, loading, setLoading }) {
//   const handleModalCancel = (e) => {
//     setMyModal(false);
//   };

//   return (
//     <div>
//       {loading ? (
//         '...로딩중'
//       ) : (
//         <ModalContainer>
//           <div className="weatherModal">
//             <h2>오늘의 날씨</h2>
//             <div>
//               <img
//                 src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//                 alt="weather"
//               />
//             </div>
//             <div className="weatherList">오늘의 날씨는 : {weather.weather[0].main}</div>
//             <div className="weatherList">현재 위치는 : {weather.name}</div>
//             <div className="weatherList">현재 기온은 : {weather.main.temp}도 입니다</div>

//             <div className="weatherList">오늘의 최고 기온은 : {weather.main.temp_max}도 입니다</div>

//             <button onClick={handleModalCancel}>취소</button>
//           </div>
//         </ModalContainer>
//       )}
//     </div>
//   );
// }
