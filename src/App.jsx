import 'typeface-roboto';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const videoUrl = 'https://youtu.be/Lpjcm1F8tY8?si=sLGja01OYYz_bR-g'; 

  return (
    <div className="h-screen bg-gradient-to-r from-[#3C3D37] to-[#697565] text-white flex items-center justify-center font-roboto">
      <div className="p-8 rounded-lg shadow-lg bg-[#3C3D37] w-full max-w-3xl">
        <AudioPlayer videoUrl={videoUrl} />
      </div>
    </div>
  );
}
