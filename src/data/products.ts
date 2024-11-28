import home5 from '~/assets/images/home-5.png';
import home6 from '~/assets/images/home-6.png';
import home7 from '~/assets/images/home-7.png';

import flora1 from '~/assets/images/flora-1.png';
import flora2 from '~/assets/images/flora-2.png';
import flora3 from '~/assets/images/flora-3.png';

import flourish1 from '~/assets/images/flourish-1.png';
import flourish2 from '~/assets/images/flourish-2.png';
import flourish3 from '~/assets/images/flourish-3.png';

import petalsAndDreams1 from '~/assets/images/petals-and-dreams-1.png';
import petalsAndDreams2 from '~/assets/images/petals-and-dreams-2.png';
import petalsAndDreams3 from '~/assets/images/petals-and-dreams-3.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  secondaryPrice: number;

  primaryImage: string;
  images: string[];

  heading: string;
  description: string;

  height: string;
  width: string;
}

const products: Product[] = [
  {
    id: 'calendar-flourish',
    name: 'Flourish',
    price: 450,
    secondaryPrice: 550,

    primaryImage: home7,
    images: [flourish1, flourish2, flourish3],

    heading: 'Plants Turn Mini Forest',
    description:
      'Watch your year go green—literally! Each month brings a new plant to the mix, slowly turning your calendar into a thriving mini forest. By December, you might feel the need for a tiny watering can!',

    height: '5.5 inches',
    width: '4 inches',
  },
  {
    id: 'calendar-flora',
    name: 'Flora',
    price: 450,
    secondaryPrice: 550,

    primaryImage: home6,
    images: [flora1, flora2, flora3],

    heading: 'Flowers Turn Bouquet',
    description:
      'Let your year bloom, one petal at a time! Each month delivers a fresh floral surprise, and by year’s end, you’ll have a bouquet so pretty it might make your wall blush.',

    height: '5.5 inches',
    width: '4 inches',
  },
  {
    id: 'calendar-petals-and-dreams',
    name: 'Petals & Dreams',
    price: 350,
    secondaryPrice: 450,

    primaryImage: home5,
    images: [petalsAndDreams1, petalsAndDreams2, petalsAndDreams3],

    heading: 'Minimalist Floral Patterns',
    description:
      'Who says calendars can’t be classy? With simple, stylish floral patterns, this one whispers elegance while keeping your life on track—no frills, just fabulous florals.',

    height: '5.5 inches',
    width: '4 inches',
  },
];

export default products;
