"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, Repeat } from "lucide-react";

import { reciters } from "@/data/reciters";


interface QuranPlayerProps {
  surahNumber: number;
}


export default function QuranPlayer({
  surahNumber,
}: QuranPlayerProps) {


  const audioRef = useRef<HTMLAudioElement | null>(null);


  const [selectedReciter, setSelectedReciter] = useState(
    reciters[0].url
  );


  const [playing, setPlaying] = useState(false);


  const [repeatCount, setRepeatCount] = useState(1);


  const [currentRepeat, setCurrentRepeat] = useState(1);



  const audioUrl =
    selectedReciter
      ? `${selectedReciter}${surahNumber
          .toString()
          .padStart(3, "0")}.mp3`
      : "";





  function handleEnded() {

    if (currentRepeat < repeatCount) {

      setCurrentRepeat(currentRepeat + 1);

      audioRef.current?.play();

    } else {

      setCurrentRepeat(1);

      setPlaying(false);

    }

  }





  return (

    <div
      className="
        rounded-3xl
        bg-green-50
        p-8
        text-center
        shadow-sm
      "
    >


      <Volume2
        size={45}
        className="mx-auto text-green-900"
      />



      <h2
        className="
          mt-4
          text-2xl
          font-bold
          text-green-900
        "
      >
        Récitation du Coran
      </h2>



      <p className="mt-2 text-gray-600">
        Choisissez votre récitateur
      </p>





      <select
        value={selectedReciter}
        onChange={(e) => {

          setSelectedReciter(e.target.value);

          setPlaying(false);

          setCurrentRepeat(1);

        }}

        className="
          mt-6
          rounded-xl
          border
          border-green-200
          bg-white
          px-5
          py-3
        "
      >


        {reciters
          .filter((reciter) => reciter.url)
          .map((reciter) => (

          <option
            key={reciter.id}
            value={reciter.url}
          >
            {reciter.name} — {reciter.riwaya}
          </option>

        ))}


      </select>





      <div className="mt-6">


        <div className="
          flex
          items-center
          justify-center
          gap-2
          text-green-900
        ">

          <Repeat size={20} />

          <span className="font-semibold">
            Répétition
          </span>

        </div>




        <select
          value={repeatCount}
          onChange={(e) =>
            setRepeatCount(Number(e.target.value))
          }

          className="
            mt-3
            rounded-xl
            border
            border-green-200
            bg-white
            px-5
            py-2
          "
        >

          <option value={1}>
            Une fois
          </option>

          <option value={3}>
            3 fois
          </option>

          <option value={5}>
            5 fois
          </option>

          <option value={10}>
            10 fois
          </option>

        </select>


      </div>






      <audio
        ref={audioRef}
        key={audioUrl}
        controls
        className="
          mx-auto
          mt-6
          w-full
        "
        src={audioUrl}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleEnded}
      />






      <div
        className="
          mt-5
          flex
          items-center
          justify-center
          gap-2
          text-green-900
        "
      >

        {playing ? (

          <>
            <Pause size={20} />
            Lecture en cours
          </>

        ) : (

          <>
            <Play size={20} />
            Prêt à écouter
          </>

        )}

      </div>





      {repeatCount > 1 && (

        <p className="mt-3 text-sm text-gray-600">

          Répétition :
          {currentRepeat}/{repeatCount}

        </p>

      )}



    </div>

  );
}