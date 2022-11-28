import { useRef, useEffect, useState } from 'react';

export function CameraK() {
    const videosRef = useRef(null);
    const photoRef = useRef(null);
    const [hasphoto, setHasphoto] = useState(false);
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 1920, height: 1080 }, audio: false })
            .then((stream) => {
                let video = videosRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const takePhoto = () => {
        let video = videosRef.current;
        let canvas = photoRef.current;
        let context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 640, 480);
        setHasphoto(true);
    };
    const savePhoto = () => {
        let canvas = photoRef.current;
        let link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'photo.png';
        link.click();
        setHasphoto(false);
    };
    useEffect(() => {
        getVideo();
    }, [videosRef]);

    return (
        <>
            <div>
                <video ref={videosRef}></video>
                <button onClick={takePhoto}>Snap!</button>
            </div>
            <div className={'result' + (hasphoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button>Close!</button>
            </div>
        </>
    );
}
