interface IProject {
  img?: string;
  title: string;
  month: string;
  year: number;
  description: string;
  href: string;
}

const projects: IProject[] = [
  {
    img: require('../assets/diatris.png'),
    title: 'Diatris Soundtrack',
    month: 'July',
    year: 2019,
    description:
      "Soundtrack to Rob van Saaze's crazy addicting diagonal tetris game.",
    href: 'https://soundcloud.com/niksudan/sets/diatris',
  },
  {
    img: require('../assets/captain-gastronaut.gif'),
    title: 'Captain Gastronaut',
    month: 'October',
    year: 2018,
    description:
      'Save your planet from extinction with your amazing fart powers! A ridiculous collaboration made in under 48 hours for the Jupiter Hadley Game Jam in London.',
    href: 'https://gamejolt.com/games/captain-gastronaut/373463',
  },
  {
    img: require('../assets/absence.jpg'),
    title: 'Absence',
    month: 'April',
    year: 2018,
    description:
      'A collection of cinematic covers of Nine Inch Nails songs, originally written by Trent Reznor. A month in the making.',
    href: 'https://soundcloud.com/niksudan/sets/absence',
  },
  {
    img: require('../assets/bgelf.jpg'),
    title: 'BGelF Toy Trouble',
    month: 'December',
    year: 2017,
    description:
      'Christmas-themed mobile game developed for the investment firm BGF. Designed, developed, and distributed in just 2 weeks.',
    href: 'https://forge.uk/our-portfolio/bgelf',
  },
  {
    img: require('../assets/boozy-blundering.png'),
    title: 'Boozy Blundering',
    month: 'October',
    year: 2017,
    description:
      "You've only got one shot of alcohol in your system - will this be enough to convince four bar patrons that you're off your rockers, or will they see through your lack of intake and oust you?",
    href: 'https://gamejolt.com/games/boozy-blundering/290440',
  },
  {
    img: require('../assets/risk-ahoy.jpg'),
    title: 'Risk Ahoy!',
    month: 'September',
    year: 2017,
    description:
      'Mobile arcade game built in Unity made to raise awareness of risks at sea. Highly commended at the Safety at Sea Awards 2018.',
    href: 'https://forge.uk/our-portfolio/risk-ahoy',
  },
  {
    img: require('../assets/butt.png'),
    title: 'butt',
    month: 'April',
    year: 2017,
    description: 'Discord bot that farts at you.',
    href: 'https://github.com/niksudan/butt',
  },
  {
    img: require('../assets/grimstorm.gif'),
    title: 'Grimstorm',
    month: 'April',
    year: 2015,
    description:
      'Intense, action-adventure set in a dark and grim world filled with knights and beasts. Made in user 2 weeks for a game jam, and featured in PC Gamer and Kotaku.',
    href: 'https://nik.gamejolt.io/grimstorm',
  },
  {
    img: require('../assets/prettylight.png'),
    title: 'prettylight',
    month: 'February',
    year: 2015,
    description:
      'Powerful lighting engine for use with GameMaker: Studio. Open source & highly rated on the GameMaker Marketplace by other developers.',
    href: 'https://github.com/niksudan/prettylight',
  },
  {
    img: require('../assets/taking-over-raves.jpg'),
    title: 'Taking Over Raves with Triangle Waves',
    month: 'October',
    year: 2013,
    description:
      'A collection of 5 chiptune tracks in a modern, electronic style.',
    href: 'https://soundcloud.com/niksudan/sets/taking-over-raves-with',
  },
  {
    title: 'Knife to Meet You',
    month: 'October',
    year: 2013,
    description: 'A truly terrifying experience',
    href: 'https://gamejolt.com/games/knife-to-meet-you/18667',
  },
  {
    title: "Ahriman's Treasure",
    month: 'September',
    year: 2013,
    description:
      'After having found a magical, flying carpet, you must flee the Temple of Ahriman as it collapses. Avoid obstacles and gather the rare treasure of Ahriman on the way.',
    href: 'https://gamejolt.com/games/ahriman-s-treasure/17966',
  },
  {
    title: 'Lokopolis',
    month: 'August',
    year: 2013,
    description:
      'Procedurally generated adventure where you must collect as many treasures are you can before you perish! Watch out for devious traps, and a Cyclops that guards the place.',
    href: 'https://gamejolt.com/games/lokopolis/17066',
  },
  {
    title: 'Zero Residuum',
    month: 'July',
    year: 2013,
    description:
      'A robotic race known as the Zerox have taken over the Earth, turning it into a wasteland. Take back what was yours by destroying the robotic menace!',
    href: 'https://gamejolt.com/games/zerox-residuum/15975',
  },
  {
    title: 'SOOPAH DOOPAH POOPAH',
    month: 'July',
    year: 2013,
    description:
      "The world's one and only poop-based RPG. How macho can you make yours?",
    href: 'https://gamejolt.com/games/soopah-doopah-poopah/15722',
  },
  {
    title: 'Zebra Hunt',
    month: 'June',
    year: 2013,
    description:
      'Out in the savannah, a lonesome hunter awakens. He must hunt the Zebra of the wild, and eat to prevent himself from perishing.',
    href: 'https://gamejolt.com/games/zebra-hunt/15235',
  },
  {
    title: 'The Legend of Zalda',
    month: 'May',
    year: 2013,
    description:
      'You are put in the shoes of the legendary hero, Lonk. Help him save the world of Hyrail from the dark forces of Gernon, or else!',
    href: 'https://nik.itch.io/the-legend-of-zalda',
  },
  {
    title: 'Requiem',
    month: 'April',
    year: 2013,
    description:
      'Take control of a musician trapped in an unfamiliar place. The soundtrack progresses as you uncover your fate.',
    href: 'https://gamejolt.com/games/requiem/14292',
  },
  {
    title: 'Feel Good Inc Chiptune Cover',
    month: 'January',
    year: 2013,
    description:
      'A cover of Gorillaz\' song in an chiptune style. From the album "Demon Dayz".',
    href: 'https://soundcloud.com/niksudan/feel-good-inc-chiptune-cover',
  },
  {
    title: 'Super Squat Simulator',
    month: 'January',
    year: 2013,
    description:
      'An exhilarating fitness simulator where you control our eager gym nut as he tries to break the record for the number of squats he can withstand.',
    href: 'https://gamejolt.com/games/super-squat-simulator/11729',
  },
  {
    title: 'Game Maker Games of 2012',
    month: 'January',
    year: 2013,
    description: 'A video showcasing every game I made with GameMaker in 2012.',
    href: 'https://www.youtube.com/watch?v=XaxRJpNTQbQ',
  },
  {
    title:
      'Evil Robot of Doom Crushes Innocent Town due to Parliamentary Disagreement',
    month: 'December',
    year: 2012,
    description:
      'Control the robot of the mad local member of parliament hellbent on destroying his neighboring town after they sent him an insulting letter regarding his parliamentary decisions.',
    href:
      'https://gamejolt.com/games/evil-robot-of-doom-crushes-innocent-town-due-to-parliamentary-disagreement/11173',
  },
  {
    title: 'Insane Joyriding in a Jet Powered Bathtub through Hyperspace',
    month: 'December',
    year: 2012,
    description:
      'Avoid asteroids and rockets that fly at you in Hyperspace, whilst trying to collect coins for more points, hearts for more health and powerups.',
    href:
      'https://gamejolt.com/games/insane-joyriding-on-a-jet-powered-bathtub-through-hyperspace/10881',
  },
  {
    title: 'Insane Balancing on One Leg in Extremely High Places',
    month: 'October',
    year: 2012,
    description:
      "Balance on top of extremely high places on one leg... insanely. Just don't fall to your doom.",
    href:
      'https://gamejolt.com/games/insane-balancing-on-one-leg-in-extremely-high-places/9925',
  },
  {
    title: 'A.D.A.P.T.S',
    month: 'August',
    year: 2012,
    description:
      'Journey into space and conquer your enemies by stealing their parts to adapt to the increasing level of difficulty.',
    href: 'https://gamejolt.com/games/a-d-a-p-t-s/9352',
  },
  {
    title: 'Nyctophobia',
    month: 'August',
    year: 2012,
    description:
      "Control a security guard at an office complex who's afraid of the dark and what may lurk within.",
    href: 'https://gamejolt.com/games/nyctophobia/9161',
  },
  {
    title: 'Game Maker Games of 2011',
    month: 'January',
    year: 2012,
    description: 'A video showcasing every game I made with GameMaker in 2011.',
    href: 'https://www.youtube.com/watch?v=SYD7cSzSwhY',
  },
  {
    title: 'The Almighty Annihilation',
    month: 'December',
    year: 2011,
    description:
      'Destroy the entire population of the Earth with meteorites and lightning strikes to overcome loneliness.',
    href: 'https://gamejolt.com/games/the-almighty-annihilation/6800',
  },
  {
    title: 'Guardian of the Skykeep',
    month: 'July',
    year: 2011,
    description:
      'Protect the legendary Skykeep from a vicious fleet of sky pirates in this tower defence game.',
    href: 'https://gamejolt.com/games/guardian-of-the-skykeep/5772',
  },
  {
    title: 'Rhythmic',
    month: 'February',
    year: 2011,
    description:
      'Colourful shoot-em-up where every action is synced to the beat of the song.',
    href: 'https://gamejolt.com/games/rhythmic/4651',
  },
  {
    title: 'Genesis',
    month: 'February',
    year: 2011,
    description:
      'Control a micro colony of people, and help them thrive or die by creating whatever you want.',
    href: 'https://gamejolt.com/games/genesis/4479',
  },
  {
    title: 'Game Maker Games of 2010',
    month: 'December',
    year: 2010,
    description: 'A video showcasing every game I made with GameMaker in 2010.',
    href: 'https://www.youtube.com/watch?v=rg-vKcdWk_w',
  },
];

export default projects;
