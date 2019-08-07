interface IProject {
  img?: string;
  title: string;
  month: string;
  year: number;
  description: string;
  href: string;
  tags: ITag[];
}

type ITag =
  | 'Music'
  | 'Game'
  | 'Open Source'
  | 'App'
  | 'Video'
  | 'Film'
  | 'Mobile'
  | 'Bot';

const projects: IProject[] = [
  {
    img: require('../assets/diatris.png'),
    title: 'Diatris Soundtrack',
    month: 'July',
    year: 2019,
    description:
      "Soundtrack to Rob van Saaze's crazy addicting diagonal tetris game.",
    href: 'https://soundcloud.com/niksudan/sets/diatris',
    tags: ['Music', 'Game'],
  },
  {
    img: require('../assets/artusen.jpg'),
    title: 'Artusen Soundtrack',
    month: 'April',
    year: 2019,
    description:
      "Original composition for Rohan Sudan's short film. A more minimal version of this mix made it into the final cut of the film.",
    href: 'https://soundcloud.com/niksudan/artusen',
    tags: ['Music', 'Film'],
  },
  {
    img: require('../assets/captain-gastronaut.gif'),
    title: 'Captain Gastronaut',
    month: 'October',
    year: 2018,
    description:
      'Save your planet from extinction with your amazing fart powers! A ridiculous collaboration made in under 48 hours for the Jupiter Hadley Game Jam in London.',
    href: 'https://gamejolt.com/games/captain-gastronaut/373463',
    tags: ['Game', 'Open Source'],
  },
  {
    img: require('../assets/battery-watcher.png'),
    title: 'Battery Watcher',
    month: 'September',
    year: 2018,
    description:
      'Existential menubar application that notifies you when your battery runs low.',
    href: 'https://github.com/niksudan/battery-watcher',
    tags: ['App', 'Open Source'],
  },
  {
    img: require('../assets/absence.jpg'),
    title: 'Absence',
    month: 'April',
    year: 2018,
    description:
      'A collection of cinematic covers of Nine Inch Nails songs, originally written by Trent Reznor. A month in the making.',
    href: 'https://soundcloud.com/niksudan/sets/absence',
    tags: ['Music'],
  },
  {
    img: require('../assets/shovellers.gif'),
    title: 'Shovellers',
    month: 'March',
    year: 2018,
    description:
      'Get as much gold before time runs out. Dig up ore, collect treasure, and steal from other players to increase your total.',
    href: 'https://twitter.com/i/moments/934805923423498240',
    tags: ['Game'],
  },
  {
    img: require('../assets/seafood-survival.gif'),
    title: 'Seafood Survival',
    month: 'January',
    year: 2018,
    description:
      'A little fishing game created over a weekend for the 25th GM48 game jam.',
    href: 'https://gamejolt.com/games/seafood-survival/311591',
    tags: ['Game', 'Open Source'],
  },
  {
    img: require('../assets/bgelf.jpg'),
    title: 'BGelF Toy Trouble',
    month: 'December',
    year: 2017,
    description:
      'Christmas-themed mobile game developed for the investment firm BGF. Designed, developed, and distributed in just 2 weeks.',
    href: 'https://forge.uk/our-portfolio/bgelf',
    tags: ['Game', 'Mobile'],
  },
  {
    img: require('../assets/boozy-blundering.png'),
    title: 'Boozy Blundering',
    month: 'October',
    year: 2017,
    description:
      "You've only got one shot of alcohol in your system - will this be enough to convince four bar patrons that you're off your rockers, or will they see through your lack of intake and oust you?",
    href: 'https://gamejolt.com/games/boozy-blundering/290440',
    tags: ['Game', 'Open Source'],
  },
  {
    img: require('../assets/risk-ahoy.jpg'),
    title: 'Risk Ahoy!',
    month: 'September',
    year: 2017,
    description:
      'Mobile arcade game built in Unity made to raise awareness of risks at sea. Highly commended at the Safety at Sea Awards 2018.',
    href: 'https://forge.uk/our-portfolio/risk-ahoy',
    tags: ['Game', 'Mobile'],
  },
  {
    img: require('../assets/butt.png'),
    title: 'butt',
    month: 'April',
    year: 2017,
    description: 'Discord bot that farts at you.',
    href: 'https://github.com/niksudan/butt',
    tags: ['Bot', 'Open Source'],
  },
  {
    img: require('../assets/vgm2.jpg'),
    title: 'Video Game Music - Volume 2',
    month: 'September',
    year: 2016,
    description:
      'A collection of music I have composed for various video games from 2014 to 2016.',
    href: 'https://niksudan.bandcamp.com/album/video-game-music-volume-2',
    tags: ['Music', 'Game'],
  },
  {
    title: 'ONYERHEDSON!',
    month: 'July',
    year: 2016,
    description:
      'Short little therapeutic game where you must header balls in the air to get points. How many can you keep up?',
    href: 'http://gamejolt.com/games/onyerhedson/21873',
    tags: ['Game'],
  },
  {
    img: require('../assets/grimstorm-colosseum.gif'),
    title: 'Grimstorm: Colosseum',
    month: 'May',
    year: 2016,
    description:
      'Battle against the undying in the fearsome arena of the mighty Lion in the cursed and corrupt land of Lords in this local multiplayer game for up to 4 players. A successor to Grimstorm.',
    href: 'http://gamejolt.com/games/grimstorm-colosseum/147486',
    tags: ['Game'],
  },
  {
    img: require('../assets/grimstorm.gif'),
    title: 'Grimstorm',
    month: 'April',
    year: 2015,
    description:
      'Intense, action-adventure set in a dark and grim world filled with knights and beasts. Made in user 2 weeks for a game jam, and featured in PC Gamer and Kotaku.',
    href: 'https://nik.gamejolt.io/grimstorm',
    tags: ['Game'],
  },
  {
    img: require('../assets/prettylight.png'),
    title: 'prettylight',
    month: 'February',
    year: 2015,
    description:
      'Powerful lighting engine for use with GameMaker: Studio. Open source & highly rated on the GameMaker Marketplace by other developers.',
    href: 'https://github.com/niksudan/prettylight',
    tags: ['Open Source'],
  },
  {
    title: 'Game Maker Games of 2014',
    month: 'January',
    year: 2015,
    description: 'A video showcasing every game I made with GameMaker in 2014.',
    href: 'https://www.youtube.com/watch?v=81ns0mj1SaQ',
    tags: ['Video', 'Game'],
  },
  {
    img: require('../assets/sk.png'),
    title: 'sk',
    month: 'November',
    year: 2014,
    description: 'Game Maker skeleton animation library.',
    href: 'https://github.com/niksudan/sk',
    tags: ['Open Source'],
  },
  {
    title: 'POOP EM UP',
    month: 'November',
    year: 2014,
    description:
      'A shoot-em-up, but with a crappy twist. Sometimes you just wanna poop on everyone, you know?',
    href: 'https://gamejolt.com/games/poop-em-up/38749',
    tags: ['Game'],
  },
  {
    title: 'petcat',
    month: 'September',
    year: 2014,
    description: 'Pet a cat, but not too hard',
    href: 'https://gamejolt.com/games/petcat/34473',
    tags: ['Game'],
  },
  {
    title: 'Boxhead',
    month: 'September',
    year: 2014,
    description:
      "The sub levels of Tercon Major are a lovely place to be. A game made in the style of Tom van den Boogaart's projects.",
    href: 'https://gamejolt.com/games/boxhead/34056',
    tags: ['Game'],
  },
  {
    title: 'Octo-Beast of the Stormy Sea',
    month: 'April',
    year: 2014,
    description:
      'Try to survive the attack of the fearsome Octo-Beast of the Stormy Sea. Will you escape the seas alive?',
    href: 'https://gamejolt.com/games/octo-beast-of-the-stormy-sea/26060',
    tags: ['Game'],
  },
  {
    title: 'Skolgbor',
    month: 'April',
    year: 2014,
    description:
      "It's time for Skolgbor to come out of hiding and embrace the world. Guide him to the exit whilst avoiding low flying Gaznogs.",
    href: 'https://gamejolt.com/games/skolgbor/25829',
    tags: ['Game'],
  },
  {
    title: 'Moonrunner',
    month: 'March',
    year: 2014,
    description:
      'Outrun the dark side of the moon in this game I made in just 3 hours.',
    href: 'https://gamejolt.com/games/moonrunner/24502',
    tags: ['Game'],
  },
  {
    title: 'Protocol',
    month: 'March',
    year: 2014,
    description:
      'Take control of a biker and take down the lawbots that are pursuing her in a dystopian world. Came 2nd out of 259 entries in the 2014 Cyberpunk Jam.',
    href: 'https://gamejolt.com/games/protocol/23683',
    tags: ['Game'],
  },
  {
    title: 'Flerpy Berd',
    month: 'February',
    year: 2014,
    description: 'Obligatory Flappy Bird clone.',
    href: 'https://gamejolt.com/games/flerpy-berd/22802',
    tags: ['Game'],
  },
  {
    img: require('../assets/vgm1.jpg'),
    title: 'Video Game Music - Volume 1',
    month: 'January',
    year: 2014,
    description:
      'A collection of music I have composed for various video games from 2012 to 2013.',
    href: 'https://niksudan.bandcamp.com/album/video-game-music-volume-1',
    tags: ['Music', 'Game'],
  },
  {
    title: 'Game Maker Games of 2013',
    month: 'January',
    year: 2014,
    description: 'A video showcasing every game I made with GameMaker in 2013.',
    href: 'https://www.youtube.com/watch?v=6pjgnOWsrPg',
    tags: ['Video', 'Game'],
  },
  {
    title: 'Crazy Christmas Courier Chucks Charity into Chimneys',
    month: 'December',
    year: 2013,
    description:
      'Christmas themed endless runner where you must throw gifts down the very rooftops you bolt across',
    href:
      'https://gamejolt.com/games/crazy-christmas-courier-chucks-charity-into-chimneys/20448',
    tags: ['Game'],
  },
  {
    title: 'Super Sneaky Sample Stealer',
    description:
      'Nab as many free samples as you can by stealing clothes in an overpriced shopping centre. Placed 4th overall in the Ludum Dare 28 game jam.',
    month: 'December',
    year: 2013,
    href: 'https://gamejolt.com/games/super-sneaky-sample-stealer/20139',
    tags: ['Game'],
  },
  {
    img: require('../assets/tiny-dangerous-dungeons.jpg'),
    title: 'Tiny Dangerous Dungeons Soundtrack',
    description:
      "Soundtrack to Jussi Simpanen's immensely popular Game Boy styled metroidvania.",
    month: 'November',
    year: 2013,
    href:
      'https://niksudan.bandcamp.com/album/tiny-dangerous-dungeons-original-game-soundtrack',
    tags: ['Music', 'Game'],
  },
  {
    img: require('../assets/taking-over-raves.jpg'),
    title: 'Taking Over Raves with Triangle Waves',
    month: 'October',
    year: 2013,
    description:
      'A collection of 5 chiptune tracks in a modern, electronic style.',
    href: 'https://soundcloud.com/niksudan/sets/taking-over-raves-with',
    tags: ['Music'],
  },
  {
    title: 'Knife to Meet You',
    month: 'October',
    year: 2013,
    description: 'A truly terrifying experience',
    href: 'https://gamejolt.com/games/knife-to-meet-you/18667',
    tags: ['Game'],
  },
  {
    title: "Ahriman's Treasure",
    month: 'September',
    year: 2013,
    description:
      'After having found a magical, flying carpet, you must flee the Temple of Ahriman as it collapses. Avoid obstacles and gather the rare treasure of Ahriman on the way.',
    href: 'https://gamejolt.com/games/ahriman-s-treasure/17966',
    tags: ['Game'],
  },
  {
    img: require('../assets/super-amazing-quest.jpg'),
    title: 'Super Amazing Quest Soundtrack',
    description: "Soundtrack to Rob van Saaze's adventure game.",
    month: 'September',
    year: 2013,
    href:
      'https://niksudan.bandcamp.com/album/super-amazing-quest-original-game-soundtrack',
    tags: ['Music', 'Game'],
  },
  {
    title: 'Lokopolis',
    month: 'August',
    year: 2013,
    description:
      'Procedurally generated adventure where you must collect as many treasures are you can before you perish! Watch out for devious traps, and a Cyclops that guards the place.',
    href: 'https://gamejolt.com/games/lokopolis/17066',
    tags: ['Game'],
  },
  {
    title: 'Zerox Residuum',
    month: 'July',
    year: 2013,
    description:
      'A robotic race known as the Zerox have taken over the Earth, turning it into a wasteland. Take back what was yours by destroying the robotic menace!',
    href: 'https://gamejolt.com/games/zerox-residuum/15975',
    tags: ['Game'],
  },
  {
    title: 'SOOPAH DOOPAH POOPAH',
    month: 'July',
    year: 2013,
    description:
      "The world's one and only poop-based RPG. How macho can you make yours?",
    href: 'https://gamejolt.com/games/soopah-doopah-poopah/15722',
    tags: ['Game'],
  },
  {
    title: 'Zebra Hunt',
    month: 'June',
    year: 2013,
    description:
      'Out in the savannah, a lonesome hunter awakens. He must hunt the Zebra of the wild, and eat to prevent himself from perishing.',
    href: 'https://gamejolt.com/games/zebra-hunt/15235',
    tags: ['Game'],
  },
  {
    title: 'The Legend of Zalda',
    month: 'May',
    year: 2013,
    description:
      'You are put in the shoes of the legendary hero, Lonk. Help him save the world of Hyrail from the dark forces of Gernon, or else!',
    href: 'https://nik.itch.io/the-legend-of-zalda',
    tags: ['Game'],
  },
  {
    title: 'Requiem',
    month: 'April',
    year: 2013,
    description:
      'Take control of a musician trapped in an unfamiliar place. The soundtrack progresses as you uncover your fate.',
    href: 'https://gamejolt.com/games/requiem/14292',
    tags: ['Game'],
  },
  {
    title: 'Feel Good Inc - Chiptune Cover',
    month: 'January',
    year: 2013,
    description:
      'A cover of Gorillaz\' song in an chiptune style. From the album "Demon Dayz".',
    href: 'https://soundcloud.com/niksudan/feel-good-inc-chiptune-cover',
    tags: ['Music'],
  },
  {
    title: 'Super Squat Simulator',
    month: 'January',
    year: 2013,
    description:
      'An exhilarating fitness simulator where you control our eager gym nut as he tries to break the record for the number of squats he can withstand.',
    href: 'https://gamejolt.com/games/super-squat-simulator/11729',
    tags: ['Game'],
  },
  {
    title: 'Game Maker Games of 2012',
    month: 'January',
    year: 2013,
    description: 'A video showcasing every game I made with GameMaker in 2012.',
    href: 'https://www.youtube.com/watch?v=XaxRJpNTQbQ',
    tags: ['Game'],
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
    tags: ['Game'],
  },
  {
    title: 'Insane Joyriding in a Jet Powered Bathtub through Hyperspace',
    month: 'December',
    year: 2012,
    description:
      'Avoid asteroids and rockets that fly at you in Hyperspace, whilst trying to collect coins for more points, hearts for more health and powerups.',
    href:
      'https://gamejolt.com/games/insane-joyriding-on-a-jet-powered-bathtub-through-hyperspace/10881',
    tags: ['Game'],
  },
  {
    title: 'Insane Balancing on One Leg in Extremely High Places',
    month: 'October',
    year: 2012,
    description:
      "Balance on top of extremely high places on one leg... insanely. Just don't fall to your doom.",
    href:
      'https://gamejolt.com/games/insane-balancing-on-one-leg-in-extremely-high-places/9925',
    tags: ['Game'],
  },
  {
    title: 'A.D.A.P.T.S',
    month: 'August',
    year: 2012,
    description:
      'Journey into space and conquer your enemies by stealing their parts to adapt to the increasing level of difficulty.',
    href: 'https://gamejolt.com/games/a-d-a-p-t-s/9352',
    tags: ['Game'],
  },
  {
    title: 'Nyctophobia',
    month: 'August',
    year: 2012,
    description:
      "Control a security guard at an office complex who's afraid of the dark and what may lurk within.",
    href: 'https://gamejolt.com/games/nyctophobia/9161',
    tags: ['Game'],
  },
  {
    title: 'Game Maker Games of 2011',
    month: 'January',
    year: 2012,
    description: 'A video showcasing every game I made with GameMaker in 2011.',
    href: 'https://www.youtube.com/watch?v=SYD7cSzSwhY',
    tags: ['Video', 'Game'],
  },
  {
    title: 'The Almighty Annihilation',
    month: 'December',
    year: 2011,
    description:
      'Destroy the entire population of the Earth with meteorites and lightning strikes to overcome loneliness.',
    href: 'https://gamejolt.com/games/the-almighty-annihilation/6800',
    tags: ['Game'],
  },
  {
    title: 'Guardian of the Skykeep',
    month: 'July',
    year: 2011,
    description:
      'Protect the legendary Skykeep from a vicious fleet of sky pirates in this tower defence game.',
    href: 'https://gamejolt.com/games/guardian-of-the-skykeep/5772',
    tags: ['Game'],
  },
  {
    title: 'Rhythmic',
    month: 'February',
    year: 2011,
    description:
      'Colourful shoot-em-up where every action is synced to the beat of the song.',
    href: 'https://gamejolt.com/games/rhythmic/4651',
    tags: ['Game'],
  },
  {
    title: 'Genesis',
    month: 'February',
    year: 2011,
    description:
      'Control a micro colony of people, and help them thrive or die by creating whatever you want.',
    href: 'https://gamejolt.com/games/genesis/4479',
    tags: ['Game'],
  },
  {
    title: 'Game Maker Games of 2010',
    month: 'December',
    year: 2010,
    description: 'A video showcasing every game I made with GameMaker in 2010.',
    href: 'https://www.youtube.com/watch?v=rg-vKcdWk_w',
    tags: ['Video', 'Game'],
  },
];

export default projects;
