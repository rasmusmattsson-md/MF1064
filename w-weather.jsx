export const refreshFrequency = 3600000;

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





`;

export const command = `
curl --silent --get "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/stockholm?unitGroup=metric&include=events%2Cdays&key=3QBJHVB3NKGJXBYXZ5QTFZUJE&contentType=json"
`;

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
      const icon = isDaytime ? sun : moon; 

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
  
  
