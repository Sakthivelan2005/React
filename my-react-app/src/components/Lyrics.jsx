import { memo, useMemo, useState } from "react";
import styles from "../App.module.css";

export default function LyricsComp() {
  const [count, setCount] = useState(0);

  const inc = () => setCount((count) => count + 1);

  const lyrics = useMemo(() => {
    console.log("Creating lyrics array");

    return [
      {
        id: 1,
        value: "When you look at me",
      },
      {
        id: 2,
        value: "I can see the stars",
      },
      {
        id: 3,
        value: "You make me feel alive",
      },
      {
        id: 4,
        value: "Every moment feels right",
      },
      {
        id: 5,
        value: "Stay with me tonight",
      },
    ];
  }, []);

  return (
    <div>
      <button className={styles.button} onClick={inc}>
        + {count}
      </button>

      {lyrics.map((val) => {
        return <Lyric props={val} key={val.id} />;
      })}
    </div>
  );
}

const Lyric = memo(({ props }) => {
  console.log("Lyric rendering");

  return <div className={styles.value}>🎵 {props.value}</div>;
});
