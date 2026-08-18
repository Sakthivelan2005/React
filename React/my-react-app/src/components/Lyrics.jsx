import React, { useState } from 'react';

// Extract child component outside and wrap in React.memo
const Lyric = ({ value }) => {
  console.log("Lyric Child Component Rendered");
  return <div>{value}</div>;
};

export const Lyrics = () => {
  const [count, setCount] = useState(0);

  // Called on every state change / render
  const LyricsList = () => {
    console.log("Lyrics Rendering..........!");
    return [
      { id: 1, lyrics: "Lyrics 1" },
      { id: 2, lyrics: "Lyrics 2" },
      { id: 3, lyrics: "Lyrics 3" },
      { id: 4, lyrics: "Lyrics 4" }
    ];
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <div>
        {LyricsList().map((val) => (
          <Lyric value={val.lyrics} key={val.id} />
        ))}
      </div>
    </div>
  );
};