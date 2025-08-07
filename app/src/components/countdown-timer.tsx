"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const weddingDate = new Date("2025-12-19T09:00:00").getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Until "I Do"</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-4xl font-bold">{timeLeft.days}</p>
            <p className="text-sm text-muted-foreground">Days</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.hours}</p>
            <p className="text-sm text-muted-foreground">Hours</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.minutes}</p>
            <p className="text-sm text-muted-foreground">Minutes</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.seconds}</p>
            <p className="text-sm text-muted-foreground">Seconds</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
