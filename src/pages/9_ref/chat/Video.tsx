import { useRef, useState } from "react";
import "./Video.scss";

export default function Video({ src, type }: { src: string; type: string }) {
    // const likeCountRef = useRef<number>(0);  // not re-rendered!
    const videoRef = useRef<HTMLVideoElement>(null);

    const [likeCount, setLikeCount] = useState<number>(0);
    const [isPlay, setIsPlay] = useState<boolean>(false);

    function handleClick() {
        setIsPlay(!isPlay);
        if (!videoRef.current) {
            return;
        }
        if (!isPlay) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <div className="video-box">
            <div className="video" onClick={handleClick}>
                <video ref={videoRef} loop>
                    <source src={src} type={type} />
                </video>
                <i className="fa-solid fa-video" />
                <i
                    className={`fa-solid fa-${
                        isPlay ? "pause" : "play"
                    } control`}
                />
            </div>
            <button
                className="like"
                onClick={() => {
                    setLikeCount(likeCount + 1);
                }}
            >
                <i className="fa-solid fa-thumbs-up" /> {likeCount}
            </button>
        </div>
    );
}
