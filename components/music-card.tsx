import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Music, Play, Pause } from "lucide-react"

const formatTime = (time: number) => {
  const m = Math.floor(time / 60)
  const s = Math.floor(time % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function MusicCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    if (!audioRef.current) return
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const update = () => setCurrentTime(audio.currentTime)
    const meta = () => setDuration(audio.duration)
    const end = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", update)
    audio.addEventListener("loadedmetadata", meta)
    audio.addEventListener("ended", end)

    return () => {
      audio.removeEventListener("timeupdate", update)
      audio.removeEventListener("loadedmetadata", meta)
      audio.removeEventListener("ended", end)
    }
  }, [])

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <Card className="md:col-span-6 lg:col-span-4 bg-zinc-900 border-zinc-800 overflow-hidden p-8 flex flex-col justify-between relative h-85">
      {/* Background (UNCHANGED) */}
      <Image
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
        alt="Music Background"
        fill
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <Music className="w-5 h-5 text-white/90" />
          <p className="text-sm tracking-wide text-white/90">
            Now Playing
          </p>
        </div>

        {/* Title */}
        <div className="text-center mt-4">
          <p className="text-xl font-semibold text-white">
            Blue Mood
          </p>
          <p className="text-sm text-white/75 mt-1">
            Chill beats to code
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-white/95 hover:bg-white flex items-center justify-center transition"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-purple-600" />
            ) : (
              <Play className="w-5 h-5 text-purple-600 ml-0.5" />
            )}
          </button>

          <div className="flex-1">
            <div className="h-[2px] bg-white/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-[11px] text-white/70 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src="/music/lofi-blue.mp3" />
      </div>
    </Card>
  )
}
