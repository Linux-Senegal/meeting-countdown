import Head from 'next/head'
import React, { useEffect, useState } from "react"

export default function Home() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(process.env.eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  //const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key="{interval}">
        {timeLeft[interval]} {interval != "secondes" ? interval:""}{" "}
      </span>
    );
  });

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Linux - Sénégal | Meeting Countddown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="grid grid-cols-3 gap-4 h-48">
        <div className="col-span-2">
          <h1 className="text-7xl">Linux Sénégal</h1>
        </div>
        <div>
          <h2 className="text-5xl text-right">Virtual Meet</h2>
        </div>
      </header>

      <main className="flex justify-center text-center">
        <div>
          <h3 className="text-9xl h-48">Bientôt</h3>
          <h3 className="font-black text-7xl text-secondary">
            {timerComponents.length ? timerComponents : <span>Et c'est parti</span>}
          </h3>
        </div>
      </main>

      <footer className="flex justify-center my-48">
        <div>
          <img src="./logo.svg" alt="logo"/>
        </div>
      </footer>

    </div>
  )
}
