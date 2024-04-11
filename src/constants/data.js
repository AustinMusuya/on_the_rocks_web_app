import images from './images';

const wines = [
  {
    title: 'Manzi Wa Nairobi',
    price: 'KSH 650',
    tags: 'Gin | Berries | Fresh Lime | Mint | Lime Soda',
  },
  {
    title: 'Kill Me Quick',
    price: 'KSH 750',
    tags: 'Tequilla | Orange  | Fresh Lime | Sweet Sour',
  },
  {
    title: 'Whisk Me Sour',
    price: 'KSH 700',
    tags: 'Whiskey | Fresh Lime | Apple',
  },
  {
    title: 'Pain Killer',
    price: 'KSH 600',
    tags: 'Rum | Passion | Orange | Lime',
  },
  {
    title: 'Take Me Home',
    price: 'KSH 750',
    tags: 'Vodka | Gin | Passion | Pineapple | Grenadine | Soda | Grenadine',
  },
];

const cocktails = [
  {
    title: 'Kenyan Sunrise',
    price: 'KSH 600',
    tags: 'Vodka | Orange Juice | Fresh Lime | Grenadine',
  },
  {
    title: "Mojito",
    price: 'KSH 600',
    tags: 'Rum | Sweet Sour Mix | Mint | Soda Water | Apple Juice',
  },
  {
    title: 'Rum Punch',
    price: 'KSH 650',
    tags: 'Dark Rum | Pineapple | Orange | Simple Syrup | Lime | Mint',
  },
  {
    title: 'Long Island',
    price: 'KSH 700',
    tags: 'Vodka | Gin | Dark Rum | Tequilla| Sweet Sour Mix | Cola',
  },
  {
    title: 'Adios MF',
    price: 'KSH 700',
    tags: 'Gin | Light Rum | Tequilla | Vodka | Blue Curacao | Sweet Sour Mix | sprite',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'The Trend Kenya',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Mixologist',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
