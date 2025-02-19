export const refreshFrequency = 900000; // Refresh every 15 min

export const className = `
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

.card {
    position: relative;
    color: #d0d0d0;
    font-family: 'Klasik Rough', serif;
    margin: 0;
    width: 560px;
    padding: 15px;
    min-height: 110px;
    text-align: center;
        border: 1px solid transparent; 
}


.card::before,
.card::after {
    content: "";
    position: absolute;
    width: 100px; 
    height: 100px;
    border: 1px solid rgba(220, 220, 220, 0.5);
}


.card::before {
    top: -5px; 
    left: -5px; 
    border-right: none;
    border-bottom: none;
}

.card::after {
    bottom: -5px; 
    right: -5px;
    border-left: none;
    border-top: none;
}

.card:empty {
  display: none;
}
.facts {
  margin: 10px 0;
  font-size: 1.2em;
  font-style: italic;
  list-style: none;
  padding: 0;
}

.fact {
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
}
  .factHeader {
     font-size: 2em;
    font-weight: normal;
    margin: 0;
    margin-bottom: 10px;
  }
.factHeader.dad {
     font-size: 1.8em;
  }
    .factTitle {
  font-size: 16px;
      font-family: 'Klasik Rough', serif;
  }
    .factText {
  font-size: 16px;
  }

  .refresh-button {
  background: transparent;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
}
  .refresh-button:hover {
  cursor: pointer;
}

.riddleAnswer {
margin-top: 10px;
    transform: rotate(180deg);
    font-style: italic;
}





  .pronunciation {
    font-size: 1.2em;
    font-style: italic;
    margin-bottom: 0;
  }

  h2.title {
    font-weight: normal;
    margin: 0;
    font-size: 0.8em;
    text-transform: uppercase;
  }

  .definitions {
    margin: 0;
    font-style: italic;
    list-style: none;
    margin-bottom: 20px;
  }

  .definitions.d1 {
    font-size: 1em;
    list-style: none;
    text-align: center;
    padding: 10px 0;
  }

  .definitions.d2 {
    font-size: 1em;
    text-align: center;
    padding: 0 10px;
  }

  h1.word {
     font-size: 2.6em;
    line-height: 1em;
    font-weight: normal;
    margin: 0;
  }

  .alike_words_wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
  }
.alike {
  position: relative;
  display: flex;
  align-items: center ; /* Align text to the top */
  text-transform: uppercase;
  box-sizing: border-box;
  gap: 10px; /* Adds space between h3 and synonyms */
  text-align: center;
  margin: auto;
  padding: 0;
  margin-top: -20px;
  height: 20px;
}

.alike h3 {
  display: flex;
  font-size: 0.8em;
  margin: 0;
  font-weight: normal;
  padding-right: 10px;
  flex-shrink: 0;
  margin-top:0px;
}

.alike_words {
  font-size: 0.6em;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  flex: 1; 
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}
  .alike_words span:hover {
    cursor: pointer;
  }

  .quoteImg {
  width: 20px;
  color: white;
  background: white;
  fill-color: white;
  fill: white;
  }

`;


// Get the current time
const now = new Date();
const month = now.getMonth() + 1; 
const day = now.getDate();
const minutes = now.getMinutes();
const randomOffset = Math.floor(Math.random() * 50); // Random between 0-50

// Determine which API to call based on the quarter-hour range
let apiValue;
if (minutes < 15) {
    apiValue = 
    `curl --silent --get "https://api.api-ninjas.com/v1/historicalevents?month=${month}&day=${day}&offset=${randomOffset}" \
    -H "X-Api-Key: bg3Doh7Al7OMfmI+XDqIbQ==yjNtsiWEUL0n6fxG"
    `;
} else if (minutes < 30) {
    apiValue = 
    `curl --silent --get "https://wordsapiv1.p.rapidapi.com/words/?random=true&partOfSpeech=adjective" \
    -H "x-rapidapi-key: 296347fae9msh7af148d706b112dp1534d1jsn8d55458a10f0" \
    -H "x-rapidapi-host: wordsapiv1.p.rapidapi.com"
    `;
} else if (minutes < 45) {
    apiValue = 
    `curl --silent --get "https://api.api-ninjas.com/v1/riddles" \
    -H "X-Api-Key: bg3Doh7Al7OMfmI+XDqIbQ==yjNtsiWEUL0n6fxG"
    `;
} else {
    apiValue = 
    `curl --silent --get "https://api.api-ninjas.com/v1/dadjokes" \
    -H "X-Api-Key: bg3Doh7Al7OMfmI+XDqIbQ==yjNtsiWEUL0n6fxG"
    `;
}


// Construct the command to fetch the appropriate API
export const command = apiValue;

export const render = ({ output }) => {
    if (!output) return <div className="card">Loading...</div>;
    const refreshButton = (
        <button className="refresh-button" onClick={() => window.location.reload()}>
            <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.729 18.664c0 6.467-5.261 11.729-11.729 11.729s-11.729-5.261-11.729-11.729c0-6.452 5.237-11.703 11.684-11.728v5.333l10.129-5.865-10.129-5.864v5.33c-7.047 0.024-12.751 5.741-12.751 12.794 0 7.065 5.727 12.795 12.795 12.795 7.066 0 12.795-5.73 12.795-12.795h-1.066zM17.022 2.39l6.935 4.015-6.935 4.016v-8.030z" fill="white"></path>
            </svg>
        </button>
    );



    try {
        const data = JSON.parse(output);
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return <div className="card">No facts found</div>;
        }

        if (minutes < 15) {
            // Assume historical events API returns an array
            const eventObj = data[0];

            return (
                <div className="card">
                    <div className="factHeader">Event of the Day</div>
                    <div className="factTitle">{eventObj.year} - {eventObj.month}/{eventObj.day}</div>
                    <div className="factText">{eventObj.event}</div>
                    {refreshButton}
                </div>
            );


        } else if (minutes < 30) {
            // Random fact API
            const data = JSON.parse(output);
            if (!data || !data.results) return <div className="card">No word found</div>;
        
            // Extract word details
            const word = data.word || "Unknown";
            const pronunciation = data.pronunciation?.all ? `(${data.pronunciation.all})` : "";
            const definitions = data.results
            .filter(res => res.partOfSpeech === "adjective")
            .map(res => res.definition)
            .slice(0, 1);
            const synonyms = data.results.flatMap(res => res.synonyms || []).slice(0, 5);
            const similarTo = data.results.flatMap(res => res.similarTo || []).slice(0, 5);


            return (
                <div className="card">
                <div className="wrap">
                  <h1 className="word">{word}</h1>
                  <p className="pronunciation">{pronunciation}</p>
                </div>
                <ul className={`definitions d${definitions.length}`}>
                  {definitions.map((def, index) => (
                    <li key={index} className="definition">
                      <svg fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        width="20px" height="20px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
                      <g>
                        <path d="M17.572,43.713c-0.809,0-1.617,0.101-2.02,0.303c0.899-3.602,4.307-7.642,7.513-9.387c0.007-0.003,0.012-0.008,0.018-0.011
                          c0.024-0.013,0.048-0.031,0.071-0.044l-0.003-0.002c0.355-0.19,0.605-0.552,0.605-0.983c0-0.388-0.208-0.713-0.505-0.916
                          l0.025-0.024l-4.196-2.65l-0.013,0.011c-0.189-0.143-0.413-0.242-0.668-0.242c-0.184,0-0.35,0.054-0.504,0.132l-0.021-0.019
                          c-6.26,4.442-10.401,11.206-10.401,18.78c0,6.562,4.241,10.297,8.985,10.297c4.342,0,7.978-3.634,7.978-7.977
                          C24.437,46.641,21.409,43.713,17.572,43.713z"/>
                        <path d="M38.119,43.713c-0.809,0-1.617,0.101-2.02,0.303c0.899-3.602,4.307-7.642,7.513-9.387c0.007-0.003,0.012-0.008,0.018-0.011
                          c0.024-0.013,0.048-0.031,0.071-0.044l-0.003-0.002c0.355-0.19,0.605-0.552,0.605-0.983c0-0.388-0.208-0.713-0.505-0.916
                          l0.025-0.024l-4.196-2.65l-0.013,0.011c-0.189-0.143-0.413-0.242-0.668-0.242c-0.184,0-0.35,0.054-0.504,0.132l-0.021-0.019
                          c-6.26,4.442-10.401,11.206-10.401,18.78c0,6.562,4.241,10.297,8.985,10.297c4.342,0,7.978-3.634,7.978-7.977
                          C44.984,46.641,41.956,43.713,38.119,43.713z"/>
                      </g>
                      </svg>
                      {def}
                      <svg fill="white" version="1.1" id="Layer_12" xmlns="http://www.w3.org/2000/svg" 
                        width="20px" height="20px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
                      <g>
                        <path d="M62.994,41.041c-4.342,0-7.978,3.634-7.978,7.977c0,4.341,3.028,7.269,6.865,7.269c0.809,0,1.617-0.101,2.02-0.303
                          c-0.899,3.602-4.307,7.642-7.513,9.387c-0.007,0.003-0.012,0.008-0.018,0.011c-0.024,0.013-0.048,0.031-0.071,0.044l0.003,0.002
                          c-0.355,0.19-0.605,0.552-0.605,0.983c0,0.388,0.208,0.713,0.505,0.916l-0.025,0.024l4.196,2.65l0.013-0.011
                          c0.189,0.143,0.413,0.242,0.668,0.242c0.184,0,0.35-0.054,0.504-0.132l0.021,0.019c6.26-4.443,10.401-11.206,10.401-18.78
                          C71.979,44.776,67.738,41.041,62.994,41.041z"/>
                        <path d="M83.541,41.041c-4.342,0-7.978,3.634-7.978,7.977c0,4.341,3.028,7.269,6.865,7.269c0.809,0,1.617-0.101,2.02-0.303
                          c-0.899,3.602-4.307,7.642-7.513,9.387c-0.007,0.003-0.012,0.008-0.018,0.011c-0.024,0.013-0.048,0.031-0.071,0.044l0.003,0.002
                          c-0.355,0.19-0.605,0.552-0.605,0.983c0,0.388,0.208,0.713,0.505,0.916l-0.025,0.024l4.196,2.65l0.013-0.011
                          c0.189,0.143,0.413,0.242,0.668,0.242c0.184,0,0.35-0.054,0.504-0.132l0.021,0.019c6.26-4.443,10.401-11.206,10.401-18.78
                          C92.526,44.776,88.285,41.041,83.541,41.041z"/>
                      </g>
                      </svg>
                      </li>
                  ))}
                </ul>
                <div className="alike_words_wrapper">
                {similarTo.length > 0 && (
                  <div className="alike">
                    <h3>Similar To:</h3>
                    <p className="alike_words">{similarTo.join(", ")}</p>
                  </div>
                )}
                {synonyms.length > 0 && (
                  <div className="alike">
                    <h3>Synonyms:</h3>
                    <p className="alike_words">{synonyms.join(", ")}</p>
                  </div>
                )}
                </div>
       
               </div>
            );

        } else if (minutes < 45) {
            const eventObj = data[0];


            return (
                <div className="card">
                    <div className="factHeader">Riddle of the Day</div>
                    <div className="factText">{eventObj.question}</div>
                    <div className="riddleAnswer">{eventObj.answer}</div>

                    {refreshButton}
                </div>
            );
            
        } else if (data) {
            const eventObj = data[0];

            return (
                <div className="card">
                    <div className="factHeader dad">Dad Joke of the Day</div>
                    <div className="factText">{eventObj.joke}</div>

                    {refreshButton}
                </div>
            );

        } else {
            return <div className="card">Unexpected data format</div>;
        }

    } catch (error) {
        return <div className="card">Error loading facts</div>;
    }
};