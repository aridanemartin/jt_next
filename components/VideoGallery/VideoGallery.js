import styles from "./VideoGallery.module.scss";
import Separador from "@components/Separador/Separador";

export const VideoGallery = ({ videoArray, author }) => {
  if (videoArray.every((item) => item.title === "null")) {
    return null;
  }

  return (
    <>
      <Separador
        title={`Vídeos`}
        text={`A continuación puedes ver algunos de los vídeos realizados por ${author}`}
      />
      <div className={styles.videoGallery}>
        {videoArray.map((video, index) => {
          if (video.src !== "null") {
            return (
              <div className={styles.videoCard} key={video.src + index}>
                <h1>{video.title !== "null" ? video.title : "Vídeo"}</h1>
                <iframe
                  src={`https://www.youtube.com/embed/${video.src}`}
                  width="100%"
                  height="360"
                  allowFullScreen
                ></iframe>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
