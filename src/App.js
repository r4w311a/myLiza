import React, { useState } from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen/index";
import Login from "./components/Screen/login.js";
import CustomCursor from "./components/Screen/CustomCursor.js";

import chilling from "./assets/chilling.gif";
import chilling_2 from "./assets/chilling_2.gif";
import fun_2 from "./assets/fun_2.jpg";
import he_care from "./assets/he_care.gif";
import hug_phone from "./assets/hug_phone.gif";
import love_2 from "./assets/love_2.gif";
import love_meet from "./assets/love_meet.gif";
import okay from "./assets/okay.gif";
import she_care from "./assets/she_care.gif";
import she_cry from "./assets/she_cry.gif";
import she_happy from "./assets/she_happy.gif";
import she_kiss from "./assets/she_kiss.webp";
import she_mad from "./assets/she_mad.gif";
import they_hug from "./assets/they_hug.gif";
import read_book from "./assets/read_book.gif";
import she_sleeping from "./assets/she_sleeping.gif";
import ice_cream from "./assets/ice_cream.gif";
import they_hug2 from "./assets/they_hug2.gif";

import kiss from "./assets/kiss.jpeg";


import backgroundSong from "./assets/my_valentine.mp3"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <AudioPlayer style={{
      }}
        autoPlay={true}
        src={backgroundSong}
        onPlay={e => console.log("onPlay")}
        showJumpControls={false}
        layout={'horizontal'}
        loop={true}
      // other props here
      />
      <div className="main">
        {!loggedIn && <Login onLogin={handleLogin} />}
        {loggedIn && (
          <>

            <Screen
              imageUrl={okay}
              bgColor={colors.red}
              textColor={colors.white}
              bigTitle="Unexpected Encounters"
              title="When Our Worlds Collided"
              text="I never imagined our paths would cross in the bustling streets of Destin, Florida. But from the moment I laid eyes on you, Liza, I knew my world would never be the same."
              btnNext="more.."
              sequency="1"
            />
            <Screen
              imageUrl={fun_2}
              bgColor={colors.blue}
              textColor={colors.white}
              bigTitle="From Mischievous Beginnings"
              title="When You Pranked Me with 'огурец'"
              text="I'll never forget the mischievous glint in your eye when you taught me the Russian word 'огурец'. Little did I know, you weren't just teaching me a word; you were teaching me to laugh, to let go, to fall for you, Liza."
              btnNext="Next"
              sequency="2"
            />
            <Screen
              imageUrl={love_meet}
              bgColor={colors.pink}
              textColor={colors.white}
              bigTitle="Unexpected Connections"
              title="Across Continents, We Found Each Other"
              text="From Jordan to Belarus, our worlds were worlds apart. But fate had other plans, bringing us together in the heart of America. And from that moment on, I knew you were the missing piece of my puzzle, Liza."
              btnNext="Next"
              sequency="3"
            />
            <Screen
              imageUrl={chilling_2}
              bgColor={colors.red}
              textColor={colors.white}
              bigTitle="Laughter in the Little Things"
              title="Our Shared Jokes, Our Shared Hearts"
              text="In the chaos of Whataburger, amidst the sizzle of burgers and the clatter of pans, we found solace in our shared jokes. 'Cash' and 'Pump' became more than just words; they became symbols of our budding romance, Liza."
              btnNext="Next"
              sequency="4"
            />
            <Screen
              imageUrl={chilling}
              bgColor={colors.purple}
              textColor={colors.white}
              bigTitle="Moments of Revelation"
              title="The Night We Shared Our Souls"
              text="Underneath the starlit sky, by the shimmering poolside, we bared our souls to each other. Your words, your thoughts, they captivated me, Liza. And in that moment, I knew I was falling for you, head over heels."
              btnNext="Next"
              sequency="5"
            />
            <Screen
              imageUrl={read_book}
              bgColor={colors.green}
              textColor={colors.white}
              bigTitle="A Gentle Awakening"
              title="When I Fell for You, One Page at a Time"
              text="As the first light of dawn kissed the sky, I found myself mesmerized by the sight of you, lost in the pages of your book. And in that moment, I realized that love had quietly crept into my heart, all thanks to you, Liza."
              btnNext="Next"
              sequency="6"
            />
            <Screen
              imageUrl={she_sleeping}
              bgColor={colors.blue}
              textColor={colors.white}
              bigTitle="The Beauty of Innocence"
              title="The Night I Couldn't Bring Myself to Wake You"
              text="As you slept peacefully beside me, I couldn't help but marvel at your beauty, Liza. And when I gently played with your hair, it was as if time stood still. It was the most beautiful moment of my life."
              btnNext="Next"
              sequency="7"
            />
            <Screen
              imageUrl={ice_cream}
              bgColor={colors.yellow}
              textColor={colors.white}
              bigTitle="Sweet Gestures"
              title="Each Ice Cream a Love Story"
              text="In the sweltering heat of summer, I sought to cool you with sweet indulgence. But with every ice cream cone I bought you, it wasn't just a treat; it was a symbol of my love, my devotion, my adoration for you, Liza."
              btnNext="Next"
              sequency="8"
            />
            <Screen
              imageUrl={they_hug2}
              bgColor={colors.purple}
              textColor={colors.white}
              bigTitle="A Date to Remember"
              title="High Above the City, I Found My View"
              text="Atop the Empire State Building, with the city sprawled out beneath us, I couldn't tear my eyes away from you, Liza. Amidst the breathtaking view, you were my best sight, my most beautiful memory."
              btnNext="Next"
              sequency="9"
            />
            <Screen
              imageUrl={she_cry}
              bgColor={colors.blue}
              textColor={colors.white}
              bigTitle="The Pain of Separation"
              title="The Hardest Goodbye"
              text="As we parted ways at the airport, my heart shattered into a million pieces, Liza. But in that moment of agony, I realized that our love was stronger than any distance, any obstacle. And it was then that I knew, you were worth every mile, every tear."
              btnNext="Next"
              sequency="10"
            />
            <Screen
              imageUrl={she_care}
              bgColor={colors.yellow}
              textColor={colors.white}
              bigTitle="Unwavering Support"
              title="Your Support, My Lifeline"
              text="Liza, in my darkest days, you were my guiding light. Your unwavering support, your comforting words, they lifted me up when I felt like I was drowning. And in those moments, I knew I was never alone, because you were always by my side."
              btnNext="Next"
              sequency="11"
            />
            <Screen
              imageUrl={he_care}
              bgColor={colors.red}
              textColor={colors.white}
              bigTitle="My First Option"
              title="My First Thought, My First Option"
              text="When life threw its curveballs, you were my first thought, my first option. Whether it was to share my joy or to seek solace in my sorrow, you were always there, ready to listen, ready to care, ready to love, Liza."
              btnNext="Next"
              sequency="12"
            />
            <Screen
              imageUrl={she_happy}
              bgColor={colors.pink}
              textColor={colors.white}
              bigTitle="Compassion and Care"
              title="Your Heart of Gold"
              text="Liza, your heart is as beautiful as it is kind. Your compassion, your care, they extend not just to me, but to everyone around you. And in your selflessness, I find myself endlessly grateful to have you in my life."
              btnNext="Next"
              sequency="13"
            />
            <Screen
              imageUrl={they_hug}
              bgColor={colors.green}
              textColor={colors.white}
              bigTitle="A Future Bright"
              title="A Future as Bright as Your Smile"
              text="With your intelligence, your wit, your determination, I have no doubt that you'll be the best, just like your mother, Liza. Your future shines as bright as your smile, and I can't wait to witness every success, every triumph, by your side."
              btnNext="Next"
              sequency="14"
            />
            <Screen
              imageUrl={she_mad}
              bgColor={colors.purple}
              textColor={colors.white}
              bigTitle="Handling Jealousy with Grace"
              title="Your Graceful Response"
              text="In moments of jealousy, you handled my desires with grace, Liza. Your understanding, your patience, they calmed my insecurities, easing my fears and reminding me of the depth of your love. For that, I am endlessly grateful."
              btnNext="Next"
              sequency="15"
            />
            <Screen
              imageUrl={fun_2}
              bgColor={colors.blue}
              textColor={colors.white}
              bigTitle="Going the Extra Mile"
              title="Above and Beyond"
              text="Liza, you never hesitate to go the extra mile for me. From the little things that make me smile to the grand gestures that take my breath away, you do it all with a love so pure, so genuine, it leaves me in awe."
              btnNext="Next"
              sequency="16"
            />
            <Screen
              imageUrl={hug_phone}
              bgColor={colors.purple}
              textColor={colors.white}
              bigTitle="Planning Our Next Adventure"
              title="A Counting Down the Days"
              text="Egypt awaits us, Liza, and with each passing day, my excitement grows. The thought of exploring new sights, creating new memories with you by my side, it's what keeps me going, what fills my dreams with hope and anticipation."
              btnNext="Next"
              sequency="17"
            />
            <Screen
              imageUrl={she_kiss}
              bgColor={colors.blue}
              textColor={colors.white}
              bigTitle="Messages of Love"
              title="Love That Knows No Bounds"
              text="Even in the silence of night, your love finds a way to reach me. Your messages, scheduled to send every hour during my night shifts, they're more than just words; they're reminders of your unwavering support, your boundless love, even when you're fast asleep, Liza."
              btnNext="Next"
              sequency="18"
            />
            <Screen
              imageUrl={love_2}
              bgColor={colors.green}
              textColor={colors.white}
              bigTitle="Strength in Distance"
              title="Love Across the Miles"
              text="Miles apart, yet our hearts beat as one, Liza. Through the vast expanse of distance, our love remains steadfast, a beacon of hope guiding us through the darkness, reminding us that no matter how far apart we may be, our love knows no bounds."
              btnNext="Next"
              sequency="19"
            />

            <Screen
              imageUrl={kiss}
              bgColor={colors.red}
              textColor={colors.white}
              bigTitle="Dreams Filled with You"
              title="Dreaming of Our Reunion"
              text="As I lay my head down to sleep each night, my dreams are filled with visions of you, Liza. And in those moments, I find solace, knowing that soon, very soon, I'll hold you in my arms once more, our love stronger than ever before."
              btnNext="Restart"
              sequency="20"
            />
          </>
        )}

      </div>
    </div>
  );
};

export default App;
