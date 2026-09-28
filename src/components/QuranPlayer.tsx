"use client";

import { useEffect, useRef, useState } from "react";
import {
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Repeat,
  ChevronDown,
} from "lucide-react";

import { reciters } from "@/data/reciters";

interface QuranPlayerProps {
  surahNumber: number;
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

export default function QuranPlayer({
  surahNumber,
}: QuranPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const availableReciters = reciters.filter(
    (reciter) => reciter.url
  );

  const [selectedReciterId, setSelectedReciterId] = useState(
    availableReciters[0]?.id ?? ""
  );

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [repeatCount, setRepeatCount] = useState(1);
  const [currentRepeat, setCurrentRepeat] = useState(1);

  const selectedReciter = availableReciters.find(
    (reciter) => reciter.id === selectedReciterId
  );

  const audioUrl = selectedReciter?.url
    ? `${selectedReciter.url}${surahNumber
        .toString()
        .padStart(3, "0")}.mp3`
    : "";

  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setCurrentRepeat(1);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (!audioRef.current || !audioUrl) {
      return;
    }

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleRestart = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.currentTime = 0;

    if (!playing) {
      audioRef.current.play();
    }
  };

  const handleSeek = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!audioRef.current) {
      return;
    }

    const value = Number(event.target.value);

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolume = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  const handleEnded = () => {
    if (!audioRef.current) {
      return;
    }

    if (currentRepeat < repeatCount) {
      setCurrentRepeat((previous) => previous + 1);

      audioRef.current.currentTime = 0;
      audioRef.current.play();

      return;
    }

    setCurrentRepeat(1);
    setPlaying(false);
    setCurrentTime(0);
  };

  const handleReciterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedReciterId(event.target.value);
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setCurrentRepeat(1);
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-[2rem]
        border
        border-green-100
        bg-[#f8f5ec]
        shadow-sm
      "
    >
      <div className="px-6 pb-5 pt-7 text-center md:px-10 md:pt-9">
        <div
          className="
            mx-auto
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#c9a96e]/40
            bg-white
            text-[#8d6b35]
          "
        >
          <Volume2 size={21} strokeWidth={1.7} />
        </div>

        <p
          className="
            mt-5
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#8d6b35]
          "
        >
          Récitation
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Écoutez la Parole d'Allah ﷻ
        </p>
      </div>

      <div className="px-6 md:px-10">
        <div
          className="
            rounded-2xl
            border
            border-green-100
            bg-white/80
            p-4
          "
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs text-gray-500">
                Récitateur
              </p>

              <p
                className="
                  mt-1
                  truncate
                  font-semibold
                  text-green-950
                "
              >
                {selectedReciter?.name}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {selectedReciter?.riwaya}
                {selectedReciter?.country
                  ? ` · ${selectedReciter.country}`
                  : ""}
              </p>
            </div>

            <ChevronDown
              size={18}
              className="shrink-0 text-green-800"
            />
          </div>

          <div className="relative mt-3">
            <select
              value={selectedReciterId}
              onChange={handleReciterChange}
              aria-label="Choisir un récitateur"
              className="
                w-full
                cursor-pointer
                appearance-none
                rounded-xl
                border
                border-green-100
                bg-[#faf9f5]
                px-4
                py-2.5
                pr-10
                text-sm
                text-green-950
                outline-none
                transition
                focus:border-[#c9a96e]
              "
            >
              {availableReciters.map((reciter) => (
                <option
                  key={reciter.id}
                  value={reciter.id}
                >
                  {reciter.name} — {reciter.riwaya}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-500
              "
            />
          </div>
        </div>
      </div>

      <div className="px-6 pt-7 md:px-10">
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={handleSeek}
          aria-label="Progression de la récitation"
          className="
            h-1.5
            w-full
            cursor-pointer
            accent-[#8d6b35]
          "
        />

        <div
          className="
            mt-2
            flex
            justify-between
            text-xs
            tabular-nums
            text-gray-500
          "
        >
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div
        className="
          flex
          items-center
          justify-center
          gap-4
          px-6
          py-6
        "
      >
        <button
          type="button"
          onClick={handleRestart}
          aria-label="Recommencer la récitation"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-green-100
            bg-white
            text-green-900
            transition
            hover:border-[#c9a96e]
            hover:text-[#8d6b35]
          "
        >
          <RotateCcw size={18} />
        </button>

        <button
          type="button"
          onClick={handlePlayPause}
          aria-label={playing ? "Mettre en pause" : "Lire"}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-green-950
            text-white
            shadow-md
            transition
            hover:bg-green-900
            hover:shadow-lg
          "
        >
          {playing ? (
            <Pause size={22} fill="currentColor" />
          ) : (
            <Play
              size={22}
              fill="currentColor"
              className="ml-0.5"
            />
          )}
        </button>

        <div
          className="
            flex
            items-center
            gap-2
            text-green-900
          "
        >
          {volume === 0 ? (
            <VolumeX size={18} />
          ) : (
            <Volume2 size={18} />
          )}

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolume}
            aria-label="Volume"
            className="
              w-20
              cursor-pointer
              accent-[#8d6b35]
              sm:w-24
            "
          />
        </div>
      </div>

      <div
        className="
          grid
          border-t
          border-green-100
          sm:grid-cols-2
        "
      >
        <div
          className="
            border-b
            border-green-100
            p-5
            sm:border-b-0
            sm:border-r
          "
        >
          <div className="flex items-center gap-2">
            <Repeat
              size={17}
              className="text-[#8d6b35]"
            />

            <label
              htmlFor="repeat"
              className="text-sm font-medium text-green-950"
            >
              Répétition
            </label>
          </div>

          <select
            id="repeat"
            value={repeatCount}
            onChange={(event) => {
              setRepeatCount(Number(event.target.value));
              setCurrentRepeat(1);
            }}
            className="
              mt-3
              w-full
              rounded-xl
              border
              border-green-100
              bg-white
              px-3
              py-2
              text-sm
              text-green-950
              outline-none
              focus:border-[#c9a96e]
            "
          >
            <option value={1}>Une fois</option>
            <option value={3}>3 fois</option>
            <option value={5}>5 fois</option>
            <option value={10}>10 fois</option>
          </select>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">
            Statut
          </p>

          <p className="mt-2 text-sm font-medium text-green-950">
            {playing
              ? "Lecture en cours"
              : "Prêt à écouter"}
          </p>

          {repeatCount > 1 && (
            <p className="mt-1 text-xs text-gray-500">
              Répétition {currentRepeat}/{repeatCount}
            </p>
          )}
        </div>
      </div>

      <audio
        ref={audioRef}
        key={audioUrl}
        src={audioUrl}
        preload="metadata"
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration);
          event.currentTarget.volume = volume;
        }}
        onTimeUpdate={(event) => {
          setCurrentTime(event.currentTarget.currentTime);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={handleEnded}
      />
    </div>
  );
}
