"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

type QuranAudioProps = {
  audioUrl: string;
  title: string;
};

export default function QuranAudio({
  audioUrl,
  title,
}: QuranAudioProps) {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);


  const toggleAudio = () => {

    if (!audioRef.current) return;


    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };


  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">

      <h3 className="mb-5 text-center text-xl font-bold text-green-900">
        🎧 {title}
      </h3>


      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setPlaying(false)}
        className="hidden"
      />


      <div className="flex justify-center">

        <button
          onClick={toggleAudio}
          className="flex items-center gap-3 rounded-full bg-green-900 px-8 py-3 text-white transition hover:bg-green-800"
        >

          {playing ? (
            <>
              <Pause size={20} />
              Pause
            </>
          ) : (
            <>
              <Play size={20} />
              Écouter
            </>
          )}

        </button>

      </div>

    </div>
  );
}