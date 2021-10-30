import {LanguageConfig} from './interfaces';

const units = {
  bag: ['bag', 'bags'],
  box: ['box'],
  can: ['can'],
  cup: ['cup', 'c', 'c.'],
  clove: ['clove'],
  gallon: ['gallon', 'gal'],
  ounce: ['ounce', 'oz', 'oz.'],
  pint: ['pint', 'pt', 'pts', 'pt.'],
  pound: ['pound', 'lb', 'lb.', 'lbs', 'lbs.', 'Lb', 'Lbs'],
  quart: ['quart', 'qt', 'qt.', 'qts', 'qts.'],
  tablespoon: ['tablespoon', 'tbs', 'tbsp', 'tbspn'],
  teaspoon: ['teaspoon', 'tsp', 'tspn', 't', 't.'],
  gram: ['gram', 'g', 'g.'],
  kilogram: ['kilogram', 'kg', 'kg.'],
  liter: ['liter', 'l', 'l.', 'lt'],
  milligram: ['milligram', 'mg', 'mg.'],
  milliliter: ['milliliter', 'ml', 'ml.'],
  package: ['package', 'pkg', 'pkgs'],
  stick: ['stick', 'sticks'],
  piece: ['piece', 'pcs', 'pcs.'],
  pinch: ['pinch'],
  small: ['small'],
  slice: ['slice'],
  medium: ['medium'],
  large: ['large'],
} as {[key: string]: string[]};

const pluralUnits = {
  cup: 'cups',
  gallon: 'gallons',
  ounce: 'ounces',
  pint: 'pints',
  pound: 'pounds',
  quart: 'quarts',
  tablespoon: 'tablespoons',
  teaspoon: 'teaspoons',
  gram: 'grams',
  kilogram: 'kilograms',
  liter: 'liters',
  milligram: 'milligrams',
  milliliter: 'milliliters',
  clove: 'cloves',
  bag: 'bags',
  box: 'boxes',
  pinch: 'pinches',
  can: 'cans',
  slice: 'slices',
  piece: 'pieces',
} as {[key: string]: string};

const symbolUnits = {
  cup: 'c',
  gallon: 'gal',
  ounce: 'oz',
  pint: 'pt',
  pound: 'lb',
  quart: 'qt',
  tablespoon: 'tbs',
  teaspoon: 'tsp',
  gram: 'g',
  kilogram: 'kg',
  liter: 'lt',
  milligram: 'mg',
  milliliter: 'ml',
  clove: '',
  bag: '',
  box: '',
  pinch: '',
  can: '',
  slice: '',
  piece: '',
} as {[key: string]: string};

const prepositions = ['of'];

const toTaste = ['to taste'];

const numbersSmall: {[key: string]: number} = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const numbersMagnitude: {[key: string]: number} = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
};

export const LangEng: LanguageConfig = {
  units,
  pluralUnits,
  symbolUnits,
  prepositions,
  toTaste,
  numbersSmall,
  numbersMagnitude,
};