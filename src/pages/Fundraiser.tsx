import { useEffect, useState } from "react";

import ParkinsonsChampionsImage from "../images/fundraiser/parkinsons_champions.png";
import nycHalfImage from "../images/fundraiser/nychalf.png";

import slideshowImage1 from "../images/fundraiser/slideshow/1.jpg";
import slideshowImage2 from "../images/fundraiser/slideshow/2.jpg";
import slideshowImage3 from "../images/fundraiser/slideshow/3.jpg";
import slideshowImage4 from "../images/fundraiser/slideshow/4.jpg";
import slideshowImage5 from "../images/fundraiser/slideshow/5.jpg";

import mile1Image from "../images/fundraiser/miles/1.png";
import mile2Image from "../images/fundraiser/miles/2.png";
import mile3Image from "../images/fundraiser/miles/3.png";
import mile4Image from "../images/fundraiser/miles/4.png";
import mile5Image from "../images/fundraiser/miles/5.png";
import mile6Image from "../images/fundraiser/miles/6.png";
import mile7Image from "../images/fundraiser/miles/7.png";
import mile8Image from "../images/fundraiser/miles/8.png";
import mile9Image from "../images/fundraiser/miles/9.png";
import mile10Image from "../images/fundraiser/miles/10.png";
import mile11Image from "../images/fundraiser/miles/11.png";
import mile12Image from "../images/fundraiser/miles/12.png";
import mile13Image from "../images/fundraiser/miles/13.png";

const Fundraiser = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex items-center gap-16">
        <div className="w-3/4">
          <img src={ParkinsonsChampionsImage} alt="Parkinson's Champions" />
        </div>
        <div className="w-1/4">
          <img src={nycHalfImage} alt="NYC Half Marathon" />
        </div>
      </div>

      <Slideshow />

      <p>
        On March 15, 2026, I will be running the NYC Half Marathon to raise
        money for the Parkinson's Foundation. This cause is very important to me
        and my family, as my grandpa, William “Bill” Palmby, was diagnosed in
        1978 and lived with Parkinson's for 35 years before passing away in
        2013. I wish I knew him during my adult life, but I have fond childhood
        memories of him visiting my family in Omaha, playing Nags (a computer
        game about horse racing), and most likely getting Dairy Queen whenever I
        visited him in Brownsburg. I'm running this race in memory of him and to
        support anyone else who is living with PD.
        <br />
        <br />
        Your donation to the Parkinson's Foundation will be used to improve the
        lives of people living with Parkinson's, conduct research towards a
        cure, train medical professionals, and provide resources to the
        Parkinson's community. You can learn more about the foundation and the
        resources they provide at{" "}
        <a
          href="https://parkinson.org"
          target="_blank"
          rel="noreferrer"
          className="text-parkinsons hover:underline font-bold"
        >
          parkinson.org
        </a>
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-center">
          My fundraising goal is {formatMoney(fundraisingGoal)}, so far we have
          raised {formatMoney(totalRaised)}
        </p>
        <div className="w-full bg-white rounded-full h-2.5">
          <div
            className="bg-parkinsons h-2.5 rounded-full"
            style={{
              width: `${(totalRaised / fundraisingGoal) * 100}%`,
            }}
          />
        </div>
      </div>

      <DonateButton />

      <div className="w-full flex flex-col gap-2">
        <p className="text-xl font-bold text-center">
          Thank you to everyone who has donated so far!
        </p>
        <div className="w-full overflow-hidden">
          <div className="w-max flex flex-row animate-marquee">
            {[...donors, ...donors].map((donor, i) => (
              <p className="text-xl whitespace-nowrap shrink-0 px-8" key={i}>
                {donor}
              </p>
            ))}
          </div>
        </div>
      </div>

      <RaceCountdown />

      <SponsoredMiles />

      <div className="flex flex-col">
        <p className="text-xl font-bold text-center">My training plan</p>
        <p className="text-center">
          I am following a running plan on Runna that gives me a weekly schedule
          of runs to complete. It generally follows this pattern, with the long
          run distance increasing each week as we get closer to the race.
          <br />
          <br />
          <p>Monday: Easy Run</p>
          <p>Tuesday: Rest</p>
          <p>Wednesday: Interval Run</p>
          <p>Thursday: Easy Run</p>
          <p>Friday: Rest</p>
          <p>Saturday: Long Run</p>
          <p>Sunday: Rest</p>
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-xl font-bold">Long runs so far</p>
        <TrainingMilestones />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-xl font-bold">Follow along on Strava</p>
        <div className="flex flex-col gap-8">
          <iframe
            title="Weekly Stats"
            height="160"
            width="300"
            allowTransparency
            src="https://www.strava.com/athletes/116957125/activity-summary/b4c85584ee72fa6c619ee20bb2de1d4c33328102"
          />

          <iframe
            title="Strava Activities"
            height="454"
            width="300"
            allowTransparency
            src="https://www.strava.com/athletes/116957125/latest-rides/b4c85584ee72fa6c619ee20bb2de1d4c33328102"
          />
        </div>
      </div>
    </div>
  );
};

// Components

const DonateButton = () => {
  return (
    <a
      href="http://www3.parkinson.org/goto/alec-skinner"
      className="py-2 px-8 rounded-xl text-2xl bg-parkinsons hover:bg-parkinsons/90 active:bg-parkinsons/80"
    >
      Donate
    </a>
  );
};

const Slideshow = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((idx) => (idx + 1) % slideShowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      className="h-80 rounded-lg"
      src={slideShowImages[idx]}
      alt="Slideshow"
    />
  );
};

const SponsoredMiles = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="text-xl font-bold">Sponsor a mile</p>

      <p className="text-center">
        Donate $20 or more to sponsor a mile along the route. After you donate,
        just send me the mile number you would like to claim, and I will put
        your name up there! You can view the full route here:{" "}
        <a
          href="/nyc-half-route.pdf"
          target="_blank"
          className="text-parkinsons hover:underline font-bold"
        >
          NYC Half Marathon Route
        </a>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sponsoredMiles.map((mile) => (
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-bold">Mile {mile.number}</p>
            <img
              className="w-full aspect-square"
              src={mile.image}
              alt={`Route for mile ${mile.number}`}
            />
            <p className="text-center text-sm">{mile.description}</p>
            {mile.sponsor && (
              <p className="italic text-sm font-bold">
                Sponsored by {mile.sponsor}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TrainingMilestones = () => {
  return (
    <div className="flex flex-col gap-2">
      {trainingMilestones.map((milestone, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              milestone.accomplished ? "bg-green-500" : "bg-gray-300"
            }`}
          />
          <p className="w-20 font-bold">{milestone.miles} miles</p>
          <p className="text-xs w-20 text-right">
            {milestone.accomplished ? "" : "~"}
            {milestone.date}
          </p>
        </div>
      ))}
    </div>
  );
};

const RaceCountdown = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const raceDate = new Date("2026-03-15T09:00:00-04:00"); // March 15, 2026 at 9:00 AM EDT
      const diff = raceDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("The race has started!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s until race day!`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-xl font-bold">{timeLeft}</p>;
};

// Constants

const slideShowImages = [
  slideshowImage1,
  slideshowImage2,
  slideshowImage3,
  slideshowImage4,
  slideshowImage5,
];

const donors = [
  "Jess Rakhman",
  "Kim",
  "JillandJeff Palmby",
  "AzulGrizzly",
  "Greer Padgett",
  "Ashley Palmby Schott",
  "Rose Palmby",
  "Jean Palmby Brinson",
  "Anne Palmby Skinner",
  "Nate Skinner",
  "Keith",
  "Wyetta Stille",
  "Alec Skinner",
];

const totalRaised = 1081.57;

const fundraisingGoal = 2000;

const sponsoredMiles = [
  {
    number: 1,
    sponsor: null,
    description:
      "Start the race at Prospect Park, making a short loop on Flatbush Avenue",
    image: mile1Image,
  },
  {
    number: 2,
    sponsor: null,
    description:
      "Continue through the rest of Prospect Park, ending at the Brooklyn Library",
    image: mile2Image,
  },
  {
    number: 3,
    sponsor: null,
    description:
      "Exiting Prospect Park, continue through Brooklyn, passing Grand Army Plaza",
    image: mile3Image,
  },
  {
    number: 4,
    sponsor: null,
    description:
      "Continue through Brooklyn, passing the Barclays Center and Brooklyn Paramount",
    image: mile4Image,
  },
  {
    number: 5,
    sponsor: null,
    description:
      "Continue through Brooklyn, entering the downtown area then making the ascent up the Manhattan Bridge",
    image: mile5Image,
  },
  {
    number: 6,
    sponsor: null,
    description:
      "Descend the Manhattan Bridge, entering Lower Manhattan and Chinatown, ending on FDR Drive",
    image: mile6Image,
  },
  {
    number: 7,
    sponsor: null,
    description:
      "Continue east on FDR Drive, passing Pier 36 and the Manhattan Bridge",
    image: mile7Image,
  },
  {
    number: 8,
    sponsor: null,
    description:
      "Continue north on FDR Drive until 14th Street, passing the Williamsburg Bridge",
    image: mile8Image,
  },
  {
    number: 9,
    sponsor: null,
    description:
      "Continue north on FDR Drive until 30th Street, passing Belleve Hospital",
    image: mile9Image,
  },
  {
    number: 10,
    sponsor: null,
    description:
      "Continue north on FDR Drive, turning left onto 42nd Street, passing the United Nations Headquarters and the Chrysler Building",
    image: mile10Image,
  },
  {
    number: 11,
    sponsor: null,
    description:
      "Continue west on 42nd Street, passing Grand Central Terminal and Bryant Park, turning right into Times Square",
    image: mile11Image,
  },
  {
    number: 12,
    sponsor: null,
    description:
      "Continue north through Times Square, making our way to the Southeast entrance of Central Park",
    image: mile12Image,
  },
  {
    number: 13,
    sponsor: null,
    description:
      "Continue north, winding through Central Park and finishing on the west side of the park near Tavern on the Green",
    image: mile13Image,
  },
];

const trainingMilestones = [
  {
    miles: 6.5,
    date: "1/24/25",
    accomplished: true,
  },
  {
    miles: 7.5,
    date: "1/31/25",
    accomplished: true,
  },
  {
    miles: 9,
    date: "2/7/25",
    accomplished: true,
  },
  {
    miles: 10,
    date: "2/21/25",
    accomplished: true,
  },
  {
    miles: 12,
    date: "2/28/25",
    accomplished: false,
  },
];

// Utils

const formatMoney = (amount: number) => {
  const formatted = `$${amount.toFixed(2)}`;
  if (formatted.endsWith(".00")) {
    // Remove the .00 if it's a whole number
    return formatted.slice(0, -3);
  } else {
    return formatted;
  }
};

export default Fundraiser;
