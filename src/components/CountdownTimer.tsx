import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const { t, isRTL } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-05T18:00:00+04:00").getTime();

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
    { value: timeLeft.days, labelKey: "countdown.days" },
    { value: timeLeft.hours, labelKey: "countdown.hours" },
    { value: timeLeft.minutes, labelKey: "countdown.minutes" },
    { value: timeLeft.seconds, labelKey: "countdown.seconds" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {timeUnits.map((unit) => (
          <div
            key={unit.labelKey}
            className="card-premium rounded-xl p-6 md:p-8 text-center group"
          >
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-2 transition-transform group-hover:scale-105">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              {t(unit.labelKey)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
