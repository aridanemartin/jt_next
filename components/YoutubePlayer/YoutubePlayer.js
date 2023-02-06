import React from "react";
import styles from "./YoutubePlayer.module.scss";

export const YoutubePlayer = () => {
  return (
    <div className={styles.youtubePlayerWrapper}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/JHCEV0by7pE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
