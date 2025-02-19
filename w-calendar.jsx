export const command = `curl -s "https://calendar.google.com/calendar/ical/private-f/basic.ics"`;

export const refreshFrequency = 60 * 60 * 1000;

export const className = `
  position: absolute;
  top: 25px;
  left: 20px;
  width: fit-content;
  padding: 10px;
  font-family: Helvetica, sans-serif;
  color: white;
  z-index: 50;

  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: left;
    text-transform: uppercase;
  }

  .event {
    padding: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .event:last-child {
    border-bottom: none;
  }

  .event-title {
    font-size: 14px;
    font-weight: bold;
  }

  .event-time {
    font-size: 12px;
    font-style: italic;
    opacity: 0.7;
  }

  .soon {
    color: red;
    font-weight: bold;
  }
`;

export const render = ({ output }) => {
  if (!output) return <div>Loading...</div>;

  try {
    const lines = output.split("\n");
    const events = [];
    let currentEvent = {};

    for (let line of lines) {
      if (line.startsWith("BEGIN:VEVENT")) {
        currentEvent = {}; // Start a new event block
      } else if (line.startsWith("SUMMARY:")) {
        currentEvent.title = line.replace("SUMMARY:", "").trim();
      } else if (line.startsWith("DTSTART:")) {
        const timeString = line.replace("DTSTART:", "").trim();
        currentEvent.startTime = new Date(
          `${timeString.substring(0, 4)}-${timeString.substring(4, 6)}-${timeString.substring(6, 8)}T${timeString.substring(9, 11)}:${timeString.substring(11, 13)}:00Z`
        );
      } else if (line.startsWith("END:VEVENT")) {
        events.push(currentEvent); // Save event
      }
    }

    // Extract the 5 latest upcoming events
    const now = new Date();
    const futureEvents = events
      .filter(e => e.startTime && e.title && e.startTime > now) // Only future events
      .sort((a, b) => a.startTime - b.startTime) // Sort by soonest first
      .slice(0, 5) // Get first 5
      .map((e, index) => {
        const daysLeft = Math.ceil((e.startTime - now) / (1000 * 60 * 60 * 24));
        const soonClass = daysLeft < 5 ? "soon" : "";

        return (
          <div key={index} className={`event ${soonClass}`}>
            <div className="event-title">{e.title}</div>
            <div className="event-time">{daysLeft} days left</div>
          </div>
        );
      });

    return (
      <div>
        <div className="title">Upcoming</div>
        {futureEvents.length > 0 ? futureEvents : <div>No upcoming events</div>}
      </div>
    );
  } catch (error) {
    return <div>Error loading events</div>;
  }
};
