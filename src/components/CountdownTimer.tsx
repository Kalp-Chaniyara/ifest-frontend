import { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    // Set the festival date (example: March 15, 2025)
    const festivalDate = new Date('2025-11-14T09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = festivalDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft([
          { value: days, label: 'DAYS' },
          { value: hours, label: 'HOURS' },
          { value: minutes, label: 'MINS' },
          { value: seconds, label: 'SECS' }
        ]);
      } else {
        setTimeLeft([
          { value: 0, label: 'DAYS' },
          { value: 0, label: 'HOURS' },
          { value: 0, label: 'MINS' },
          { value: 0, label: 'SECS' }
        ]);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-8">
      {timeLeft.map((unit, index) => (
        <div
          key={unit.label}
          className="pixel-card p-4 md:p-6 text-center min-w-[80px] md:min-w-[100px] pixel-glow-cyan"
        >
          <div className="text-2xl md:text-4xl font-pixel-header text-pacman-yellow mb-2">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-ghost-grey font-pixel-body">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};