export const refreshFrequency = 60*3600000;

const moon = (
  <svg width="30px" height="30px" viewBox="0 -4.5 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M121.957 103.163C125.881 102.928 129.837 102.923 133.72 102.388C136.915 101.948 140.025 100.889 143.171 100.09C144.691 99.7039 146.182 99.1546 147.722 98.9084C149.978 98.5468 152.001 99.1598 153.325 101.147C154.572 103.018 154.264 104.954 153.333 106.905C148.513 117.012 140.849 124.655 131.986 131.141C121.135 139.082 108.699 143.113 95.4809 144.727C83.273 146.22 71.0442 146.272 58.9531 143.581C41.4413 139.684 26.3475 131.645 15.1444 117.275C4.13504 103.155 -0.0989723 87.0189 1.45589 69.2977C2.82654 52.995 8.52934 37.3547 17.9739 23.9961C23.4215 16.2146 29.9055 9.38657 38.073 4.33996C41.1493 2.43658 44.3527 0.861628 48.0742 0.664725C51.9288 0.463885 53.2713 2.38262 51.5635 5.85005C49.1278 10.7962 47.0392 15.8499 46.0186 21.3061C44.6114 28.8264 45.0945 36.2542 46.782 43.6767C50.4181 59.6657 57.3876 73.8803 68.9806 85.6373C78.1431 95.0885 90.3707 100.969 103.474 102.226C109.604 102.883 115.778 103.131 121.932 103.566C121.939 103.437 121.948 103.299 121.957 103.163ZM135.166 114.522L134.675 113.716C132.895 113.803 131.106 113.809 129.336 113.989C121.505 114.712 113.623 114.668 105.801 113.858C85.496 111.959 68.9865 103.067 56.2719 87.1816C46.7389 75.1897 40.233 61.0786 37.3039 46.0418C35.0461 34.9057 35.1379 23.989 39.2774 13.2736C39.3607 13.0583 39.1666 12.7358 39.0373 12.1897C37.6078 13.4486 36.2878 14.4907 35.1064 15.6688C18.843 31.9145 10.5927 51.6164 10.1962 74.5235C9.93043 89.8451 14.8215 103.357 25.3577 114.71C34.7177 124.796 46.4814 130.463 59.6646 133.425C72.5478 136.32 85.5466 136.06 98.4981 133.917C108.934 132.191 118.632 128.475 127.031 121.894C129.905 119.647 132.464 116.992 135.166 114.522Z" 
fill="rgb(220, 220, 220, 0.7)"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="153.583" height="145.707" fill="white" transform="translate(0.579834 0.0625)"/>
</clipPath>
</defs>
</svg>
);

const sun = (
  <svg fill="white" width="30px" height="30px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"
   preserveAspectRatio="xMinYMin" className="jam jam-sun">
    <path d='M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z'/>
    </svg>

);

const partlyCloudy = (
  <svg id="partlyCloudy" fill="white" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 406.245 406.245">
<g>
	<g>
		<g>
			<path d="M345.102,249.537c-0.236-16.72-6.655-31.964-17.054-43.573c2.771-8.489,4.189-17.343,4.189-26.394
				c0-46.93-38.176-85.11-85.101-85.11c-6.834,0-13.637,0.813-20.219,2.418c-4.024,0.981-6.491,5.039-5.511,9.063
				c0.981,4.024,5.041,6.492,9.063,5.51c5.42-1.321,11.027-1.991,16.666-1.991c38.653,0,70.101,31.451,70.101,70.11
				c0,5.255-0.585,10.424-1.719,15.464c-10.648-7.172-23.461-11.365-37.237-11.365c-8.241,0-16.416,1.536-24.063,4.488
				c-5.886-17.846-16.906-33.862-31.646-45.778c-17.405-14.072-39.34-21.822-61.764-21.822c-52.788,0-95.993,41.821-98.224,94.069
				c-16.798,4.977-31.923,15.035-43.06,28.741C6.934,258.862,0,278.412,0,298.414c0,48.173,39.192,87.365,87.365,87.365H315.23
				c39.365,0,71.392-32.026,71.392-71.392C386.622,286.511,370.144,261.102,345.102,249.537z M315.23,370.779H87.365
				C47.463,370.779,15,338.316,15,298.414c0-16.567,5.741-32.758,16.166-45.589c10.281-12.654,24.654-21.553,40.47-25.058
				c3.482-0.771,5.939-3.889,5.876-7.455l-0.003-0.191c-0.008-0.417-0.016-0.833-0.016-1.251c0-45.94,37.375-83.314,83.314-83.314
				c19.278,0,37.375,6.393,52.334,18.486c14.536,11.752,24.806,28.201,28.914,46.315c0.523,2.307,2.104,4.231,4.265,5.193
				c2.163,0.962,4.648,0.848,6.713-0.308c7.686-4.302,16.416-6.576,25.247-6.576c28.578,0,51.828,23.25,51.828,51.828
				c0,1.028-0.042,2.134-0.132,3.481c-0.221,3.312,1.762,6.375,4.873,7.531c21.994,8.165,36.771,29.416,36.771,52.88
				C371.622,345.482,346.325,370.779,315.23,370.779z"/>
			<path d="M199.075,116.621c0.088,0.208,0.053,0.124,0.01,0.021c1.795,4.212,7.027,5.877,10.924,3.436
				c4.044-2.533,4.573-8.262,1.296-11.638c-2.589-2.517-6.645-2.91-9.621-0.824c-2.839,1.991-3.927,5.788-2.614,8.99
				C199.025,116.497,198.983,116.4,199.075,116.621z"/>
			<path d="M247.141,79.065c4.143,0,7.5-3.358,7.5-7.5V27.966c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v43.599
				C239.641,75.707,242.999,79.065,247.141,79.065z"/>
			<path d="M323.511,110.699c1.919,0,3.839-0.732,5.303-2.197l30.83-30.829c2.93-2.929,2.93-7.677,0.001-10.606
				c-2.929-2.929-7.678-2.929-10.606,0l-30.83,30.829c-2.93,2.929-2.93,7.677-0.001,10.606
				C319.672,109.967,321.591,110.699,323.511,110.699z"/>
			<path d="M398.745,172.068h-43.6c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h43.6c4.143,0,7.5-3.358,7.5-7.5
				C406.245,175.426,402.887,172.068,398.745,172.068z"/>
			<path d="M165.468,108.501c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.678,0-10.606
				l-30.83-30.829c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606L165.468,108.501z"/>
		</g>
	</g>
</g>
</svg>
)
const snow = (
<svg viewBox="-2 -1 28 24" className="fillSnow" xmlns="http://www.w3.org/2000/svg"><path d="M19.335 15.268l2.485 1.405-.492.871-2.467-1.395-.267 2.492-.994-.108.313-2.92L13 12.836v6.04l2.602 1.033-.369.93L13 19.952V22h-1v-2.048l-2.233.887-.369-.93L12 18.876v-6.04l-4.913 2.777.313 2.92-.994.108-.267-2.492-2.467 1.395-.492-.871 2.485-1.405-1.962-1.581.628-.78 2.271 1.832 4.882-2.76-4.881-2.758-2.272 1.832-.628-.78 1.963-1.582L3.18 7.286l.492-.871L6.139 7.81l.267-2.491.994.108-.312 2.919L12 11.123V5.124L9.398 4.091l.369-.93L12 4.048V2h1v2.048l2.233-.887.369.93L13 5.124v5.999l5.195-2.937-.296-2.759.995-.108.249 2.331 2.185-1.235.492.871-2.185 1.235 1.869 1.417-.605.796-2.212-1.677-5.171 2.922 4.882 2.76 2.271-1.832.628.78-1.962 1.581z"/>
<path fill="none" d="M0 0h24v24H0z"/>
</svg>

)
const cloudy = (
<svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="strokeIcon" d="M17.93 15.745H6.87C4.45 15.745 2.5 13.725 2.5 11.215C2.5 8.72503 4.45 6.68503 6.87 6.68503C7.4 6.68503 7.89999 6.77503 8.35999 6.95503C8.60999 7.04503 8.87001 6.95503 9.01001 6.73503C9.74001 5.49503 11.07 4.65503 12.59 4.65503C14.61 4.65503 16.28 6.11503 16.69 8.06503C16.75 8.33503 16.97 8.47504 17.24 8.41504C17.46 8.36504 17.69 8.34503 17.93 8.34503C19.91 8.34503 21.5 10.005 21.5 12.055C21.51 14.095 19.91 15.745 17.93 15.745Z" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
</svg>
)
const rain = (
  <svg viewBox="-0.5 0 25 25" fill="transparent" xmlns="http://www.w3.org/2000/svg">
<path className="strokeIcon" d="M17.93 15.745H6.87C4.45 15.745 2.5 13.725 2.5 11.215C2.5 8.72503 4.45 6.68503 6.87 6.68503C7.4 6.68503 7.89999 6.77503 8.35999 6.95503C8.60999 7.04503 8.87001 6.95503 9.01001 6.73503C9.74001 5.49503 11.07 4.65503 12.59 4.65503C14.61 4.65503 16.28 6.11503 16.69 8.06503C16.75 8.33503 16.97 8.47504 17.24 8.41504C17.46 8.36504 17.69 8.34503 17.93 8.34503C19.91 8.34503 21.5 10.005 21.5 12.055C21.51 14.095 19.91 15.745 17.93 15.745Z" stroke="#0F0F0F" strokeMiterlimit="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
<path className="strokeIcon" d="M10.51 20.345L12.01 17.745" stroke="#0F0F0F" strokeMiterlimit="5" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
<path className="strokeIcon" d="M14.51 20.345L16.01 17.745" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeWidth="0.5" strokeLinejoin="round"/>
<path className="strokeIcon" d="M6.51001 20.345L8.01001 17.745" stroke="#0F0F0F" strokeMiterlimit="10" strokeWidth="0.5" strokeWinecap="round" strokeLinejoin="round"/>
</svg>
)

export const className = `
position: absolute;
bottom: calc(15% - 30px);
left: 50%;
transform: translate(calc(-50% + 90px), -50%);
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

.card {
  color: #d0d0d0;
  font-family: 'NotoSans', sans-serif;
  margin: 0;
  width: auto;
  padding: 15px;
  text-align: center;
}

.card:empty {
  display: none;
}


.current-day {
  font-size: 2em;
  margin-top: 10px;
  display: flex; /* Enables horizontal alignment */
  align-items: center; /* Vertically aligns the items */
  justify-content: space-between; /* Distributes space evenly */
}

.current-day .leftSide {
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%; /* Adjust as needed */
  gap: 10px;
}
  .leftSideContent {
  position: relative;
  display: flex;
  flex-direction: row; /* Stacks content vertically */
  align-items: left; /* Center aligns text within */
  font-size: 0.8em; /* Adjust size as needed */
  text-align: left;
  gap: 30px;
}
  .week-change {
font-size: 12px;
}

.current-day .rightSide {
  display: flex;
  flex-direction: column; /* Keeps text stacked */
  text-align: right;
  width: 50%; /* Adjust as needed */
}

.current-day .maxTemp,
.current-day .lowTemp,
.current-day .sunrise,
.current-day .sunset {
  display: block;
  font-size: 0.5em;
}




.week-table {
border-top: 1px solid rgba(220, 220, 220, 0.7);
margin: auto;
  border-collapse: collapse;
  width: auto; /* Let the table take up only necessary space */
  font-size: 0.8em;
}

.week-table th, .week-table td {
  padding: 2px 6px;
  text-align: center;
  white-space: nowrap;
}

 .week-table td {
 position: relative;
}
 

.week-table th {
  font-weight: bold;
}
.lowTemp {
color:rgb(149, 149, 149);
}



.tempIndicator {
position: absolute;
top: 5px;
right: 0;
font-size: 8px;
}


.cardTitle {
position: absolute;
left: -125px;
top: 35px;
font-size: 14px;
}
.cardTitle .number {
font-size: 24px;
font-weight: 600;
}

.leftSideContent .curve {
display: inline-block;
}

.curveIllustration {
position: absolute;
height: 10px;
width: 10px;
}

.tableIcon svg {
width: 20px;
height: 20px;
}
.tableIcon .strokeIcon {
stroke: white;
}
.tableIcon .fill {
fill: white;
}
.tableIcon .fillSnow {
fill: rgba(220, 220, 220, 0.9);
}

`;

export const command = `
curl --silent --get "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/stockholm?unitGroup=metric&include=events%2Cdays&key=3QBJHVB3NKGJXBYXZ5QTFZUJE&contentType=json"
`;
const iconMap = {
  "clear": sun,
  "partly-cloudy-day": partlyCloudy,
  "cloudy": cloudy,
  "rain": rain,
  "thunderstorm": "⛈️",
  "snow": snow,
  "fog": "🌫️"
};

export const render = ({ output }) => {
    if (!output) return <div className="card">Loading...</div>;
  
    try {
      const data = JSON.parse(output);
      if (!data || !data.days || data.days.length === 0) {
        return <div className="card">No weather data available</div>;
      }

            // Get current time in minutes
            const now = new Date();
            const weekNumber = Math.ceil(
              ((now - new Date(now.getFullYear(), 0, 4) + 86400000) / 86400000 + new Date(now.getFullYear(), 0, 4).getDay() + 1) / 7
            );
            const currentMinutes = now.getHours() * 60 + now.getMinutes();

  
            let days = data.days.slice(1, 7); // Start from the day after today
            const today = data.days[0]; // The actual current day

            console.log(days)
            
            // Function to convert HH:MM to total minutes
            const getTotalMinutes = (time) => {
              const [hour, min] = time.split(":").map(Number);
              return hour * 60 + min;
            };
            
            // Get sunrise and sunset times in minutes
            const sunriseMinutes = getTotalMinutes(today.sunrise);
            const sunsetMinutes = getTotalMinutes(today.sunset);
            
            // Include today in the calculation by adding it to the loop
            let totalDaylightChange = 0;
            const relevantDays = [today, ...days]; // Ensure today is part of the comparison

            console.log(relevantDays)
            
            if (relevantDays.length > 1) {
              const lastDay = relevantDays[relevantDays.length - 1]; // Last day in the list
              const lastSunriseDiff = Math.abs(getTotalMinutes(lastDay.sunrise) - sunriseMinutes);
              const lastSunsetDiff = Math.abs(getTotalMinutes(lastDay.sunset) - sunsetMinutes);
              totalDaylightChange = lastSunriseDiff + lastSunsetDiff;
              console.log(lastSunriseDiff, lastSunsetDiff)
            }
            


      const posNegIcon = totalDaylightChange > 0 ? "+" : "-"; 
  

      // Determine if it's day or night
      const isDaytime = currentMinutes >= sunriseMinutes && currentMinutes < sunsetMinutes;
      const icon = isDaytime ? (iconMap[today.icon] || "❓") : moon;

      return (
        <div className="card">
          <span className="cardTitle">v.{weekNumber} ger oss<br /><span className="number">{totalDaylightChange} min</span> <br/> längre dagar</span>
          <div className="current-day">
            <div className="leftSide">
              <span className="day-icon">{icon}</span>
                <div className="leftSideContent">
                <span className="sunrise curve">{today.sunrise.slice(0, 5)}</span>
                <span className="curveIllustration"></span>
                <span className="sunset curve">{today.sunset.slice(0, 5)}</span>
                </div>
            </div>
            <div className="rightSide">
              <span className="maxTemp">{Math.round(today.tempmax)}°C</span>
              <span className="lowTemp">{Math.round(today.tempmin)}°C</span>
            </div>
          </div>
          <table className="week-table">
            <thead>
              <tr>
                {days.map((day, index) => (
                  <th key={index}>
                    {new Date(day.datetime).toLocaleDateString("en-US", { weekday: "short" })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            <tr>
                {days.map((day, index) => (
                  <td key={index} className="tableIcon">{iconMap[day.icon] || "❓"}</td>
                ))}
              </tr>
              <tr>
                {days.map((day, index) => (
                  <td key={index} className="maxTemp">{Math.round(day.tempmax)}°C</td>
                ))}
              </tr>
              <tr>
                {days.map((day, index) => (
                  <td key={index} className="lowTemp">{Math.round(day.tempmin)}°C</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );
    } catch (error) {
      return <div className="card">Error loading weather data</div>;
    }
  };
  
  
