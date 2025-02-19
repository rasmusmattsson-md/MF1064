export const command = "clock";
export const refreshFrequency = 3 * 60 * 1000; // Updates once per minute

export const className = `
  position: absolute;
bottom: calc(10% - 90px);
left: 50%;
transform: translate(calc(-50% - 0px), -50%);
  padding: 10px;
  z-index: 50;
  font-family: Helvetica, sans-serif;
  color: white;

  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: left;
  }

  .clock {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid rgb(220, 220, 220, 0.5);
    margin: 0;
  }

  .hand {
    position: absolute;
    transform-origin: 50% 100%;
    z-index: 9;
    border-radius: 5px;
  }

  .hour {
    height: 13px; width: 1px;
    top: 27px; left: 50%;
    margin-left: -1.5px;
    transition: transform 0.5s ease-in-out;
    background-color: rgb(220, 220, 220, 0.5);
  }

  .minute {
    height: 30px; width: 1px;
    top: 10px; left: 50%;
    margin-left: -1px;
    transition: transform 0.5s ease-in-out;
    background-color: rgb(220, 220, 220, 0.6);
  }

  .second {
    height: 30px; width: 1px;
    top: 10px; left: 50%;
    margin-left: -0.5px;
    animation: rotate 60s linear infinite;
    background-color: rgb(220, 220, 220, 0.9);
  }
.analogClock {
  font-size: 14px;
  color: white;
  text-align: left;
  background: transparent;
  z-index: 10;
}

  .marker {
    position: absolute;
    width: 1px;
    height: 6px;
    background-color: rgb(220, 220, 220, 0.7);
    left: 50%;
    top: 50%;
    transform-origin: 50% 50%;
    border-radius: 5px;
  }


  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const render = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;
  
    const degM = (minutes / 60) * 360 + (seconds / 60) * 6;
    const degH = (hours / 12) * 360 + (minutes / 60) * 30;
    const secondsOffset = (seconds / 60) * -360; // Sync second hand to current time
    const animationDelay = `-${seconds}s`; // Negative delay to sync animation
  
    // Generate 12 markers at equal intervals
    const radius = 40; 
    const markers = [];
    for (let i = 0; i < 12; i++) {
      const angle = i * 30; // 360° / 12 hours
      const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180)); // Adjusted for center
      const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));
    
      markers.push(
        <div
          key={`marker-${i}`}
          className="marker"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            left: `${x}%`,
            top: `${y}%`,
          }}
        ></div>
      );
    }
    
  
    return (
      <div>
        <div className="clock">
          {markers} {/* Render Markers */}
          <div key={`h-${degH}`} className="hand hour" style={{ transform: `rotate(${degH}deg)` }}></div>
          <div key={`m-${degM}`} className="hand minute" style={{ transform: `rotate(${degM}deg)` }}></div>
          <div key="s-hand" className="hand second" style={{ transform: `rotate(${secondsOffset}deg)`, animationDelay }}></div>
        </div>
      </div>
    );
  };
