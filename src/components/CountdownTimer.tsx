import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-04T18:00:00+04:00").getTime(); // 6 PM UAE time

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 md:p-6 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            style={{
              animation: "fade-in 0.5s ease-out forwards",
              animationDelay: `${index * 0.1}s`,
              opacity: 0,
            }}
          >
            <div className="font-serif text-3xl md:text-5xl font-bold text-primary mb-2">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
