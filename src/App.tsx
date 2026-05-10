// App.tsx
import { useState } from "react";

export default function App() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const resetScore = () => {
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        marginTop: "50px",
      }}
    >
      <h1>Score Board App</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "30px",
        }}
      >
        {/* Team A */}
        <div
          style={{
            padding: "20px",
            border: "2px solid black",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h2>Team A</h2>
          <h1>{teamA}</h1>

          <button onClick={() => setTeamA(teamA + 1)}>
            Add Point
          </button>

          <br />
          <br />

          <button onClick={() => setTeamA(teamA - 1)}>
            Remove Point
          </button>
        </div>

        {/* Team B */}
        <div
          style={{
            padding: "20px",
            border: "2px solid black",
            borderRadius: "10px",
            width: "200px",
          }}
        >
          <h2>Team B</h2>
          <h1>{teamB}</h1>

          <button onClick={() => setTeamB(teamB + 1)}>
            Add Point
          </button>

          <br />
          <br />

          <button onClick={() => setTeamB(teamB - 1)}>
            Remove Point
          </button>
        </div>
      </div>

      <br />

      <button
        onClick={resetScore}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        Reset Score
      </button>
    </div>
  );
}