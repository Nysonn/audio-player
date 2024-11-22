import React, { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ videoUrl }) {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause functionality for the embedded YouTube video
  const togglePlayPause = () => {
    const iframe = iframeRef.current;
    const iframeWindow = iframe.contentWindow;

    if (isPlaying) {
      iframeWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo' }),
        '*'
      );
    } else {
      iframeWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo' }),
        '*'
      );
    }

    setIsPlaying(!isPlaying);
  };

  // Effect when the video URL changes or the component mounts
  useEffect(() => {
    setIsPlaying(false); // Reset the play state when the video URL changes
  }, [videoUrl]);

  // Optionally, you can also track when the component is mounted
  useEffect(() => {
    console.log("AudioPlayer component mounted!");

    return () => {
      console.log("AudioPlayer component unmounted!");
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <div className="w-full h-64 max-w-3xl">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoUrl.split('/')[3].split('?')[0]}?autoplay=0&controls=1&mute=0`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
