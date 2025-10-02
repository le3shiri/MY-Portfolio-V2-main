import React, { useState, useEffect, useRef } from "react";
import { VolumeUp, VolumeMute } from "react-bootstrap-icons";
// import "./AudioPlayer.scss";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const scrollSoundRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollCooldown = useRef(false);
  const hasPlayedScrollSound = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Audio playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Create a separate audio element for scroll sound
    const scrollSound = new Audio("/sounds/scroll-effect.mp3");
    scrollSoundRef.current = scrollSound;
    
    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const timeDelta = now - lastScrollTime.current;
      
      // Calculate scroll speed (pixels per millisecond)
      const scrollSpeed = scrollDelta / (timeDelta || 1);
      
      // Higher threshold - only play sound on fast scrolling (2 pixels per ms)
      // And only if we haven't played the sound before
      if (scrollSpeed > 1.1 && !scrollCooldown.current && !hasPlayedScrollSound.current) {
        // Play the scroll sound
        scrollSound.currentTime = 0;
        scrollSound.play().catch(err => console.log("Scroll sound error:", err));
        
        // Set cooldown
        scrollCooldown.current = true;
        
        // Mark that we've played the sound
        hasPlayedScrollSound.current = true;
        
        setTimeout(() => {
          scrollCooldown.current = false;
        }, 800);
      }
      
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = now;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // Reset the scroll sound flag when toggling music
    // This allows the scroll sound to play again if the user toggles the music
    hasPlayedScrollSound.current = false;
  };

  return (
    <div className="audio-player">
      <audio 
        ref={audioRef} 
        src="/sounds/bg.mp3" 
        loop 
      />
      <button 
        className="audio-toggle" 
        onClick={togglePlay} 
        title={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? <VolumeUp /> : <VolumeMute />}
      </button>
    </div>
  );
};

export default AudioPlayer;