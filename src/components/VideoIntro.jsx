import { useRef, useState } from "react";
import videoSrc from "../assets/video/jessica-intro.mp4";
import standImg from "../assets/img/jessica-em-pe.jpeg";
import "./VideoIntro.css";

export default function VideoIntro() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="video" className="video-intro">
      <div className="container video-intro__inner">
        <div className="video-intro__text">
          <p className="video-intro__eyebrow">05 — Um convite</p>
          <h2 className="video-intro__title">
            Antes de marcar, ouça um pouco sobre como eu trabalho.
          </h2>
          <p className="video-intro__lede">
            Preparei um vídeo curto contando como conduzo o acompanhamento e
            o que você pode esperar do primeiro encontro — seja para você,
            seja para quem procura pelo filho ou filha.
          </p>
          <img
            className="video-intro__side-img"
            src={standImg}
            alt={`Jéssica em pé, sorrindo, com as mãos nos bolsos`}
          />
        </div>

        <div className="video-intro__frame">
          <div className="video-intro__phone">
            <video
              ref={videoRef}
              src={videoSrc}
              muted={muted}
              loop
              playsInline
              autoPlay
              onClick={togglePlay}
            />
            <button
              className="video-intro__sound"
              onClick={toggleSound}
              aria-label={muted ? "Ativar som" : "Desativar som"}
            >
              {muted ? "🔇 Ativar som" : "🔊 Silenciar"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
