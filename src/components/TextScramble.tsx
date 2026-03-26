import { useEffect, useState } from 'react';

const CHARS = '!<>-_/[]{}—=+*^?#________';

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  trigger?: boolean;
}

export function TextScramble({ text, className = '', duration = 400, delay = 0, trigger = true }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(() => 
    text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
  );

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      let iteration = 0;
      const totalIterations = text.length;
      const stepTime = duration / totalIterations;

      intervalId = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');
        });

        if (iteration >= totalIterations) {
          clearInterval(intervalId);
        }

        iteration += 1 / 3; // Slow down the reveal slightly
      }, stepTime);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, duration, delay, trigger]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="opacity-0">{text}</span>
      <span className="absolute inset-0">{displayText}</span>
    </span>
  );
}
