// @ts-check
/** @typedef {keyof typeof amountsPerCup} Measure */
/** @typedef {keyof typeof ingredients} Ingredient */
const amountsPerCup = {
  cup: 1,
  cups: 1,
  tablespoon: 16,
  tablespoons: 16,
  tbsp: 16,
  teaspoon: 48,
  teaspoons: 48,
  tsp: 48,
  fluidOunce: 8,
  fluidOunces: 8,
  pint: 0.5,
  pints: 0.5,
  quart: 0.25,
  quarts: 0.25,
  gallon: 1 / 16,
  gallons: 1 / 16,
  milliliter: 236.588,
  milliliters: 236.588,
  ml: 236.588,
};

const ingredients = {
  sugar: {
    aliases: ["sugar", "white sugar", "granulated sugar"],
    gramsPerCup: 198,
  },
  flour: {
    aliases: ["flour", "all-purpose flour", "plain flour"],
    gramsPerCup: 120,
  },
  brownSugar: {
    aliases: ["brown sugar", "light brown sugar", "dark brown sugar"],
    gramsPerCup: 213,
  },
  powderedSugar: {
    aliases: ["powdered sugar", "confectioners' sugar", "icing sugar"],
    gramsPerCup: 113,
  },
  butter: {
    aliases: ["butter", "unsalted butter", "salted butter"],
    gramsPerCup: 227,
  },
  oats: {
    aliases: ["oats", "rolled oats", "old-fashioned oats", "quick oats"],
    gramsPerCup: 89,
  },
  cocoa: {
    aliases: ["cocoa", "cocoa powder", "unsweetened cocoa"],
    gramsPerCup: 84,
  },
  honey: {
    aliases: ["honey"],
    gramsPerCup: 336,
  },
  oil: {
    aliases: ["oil", "vegetable oil"],
    gramsPerCup: 198,
  },
  cornSyrup: {
    aliases: ["corn syrup", "light corn syrup", "dark corn syrup"],
    gramsPerCup: 312,
  },
  milkPowder: {
    aliases: ["milk powder", "powdered milk", "dried milk", "nonfat dry milk"],
    gramsPerCup: 112,
  },
  cornstarch: {
    aliases: ["cornstarch", "corn starch"],
    gramsPerCup: 112,
  },
  milk: {
    aliases: ["milk", "whole milk", "fresh milk"],
    gramsPerCup: 227,
  },
  water: {
    aliases: ["water"],
    gramsPerCup: 227,
  },
  cream: {
    aliases: [
      "cream",
      "heavy cream",
      "light cream",
      "half and half",
      "half & half",
    ],
    gramsPerCup: 227,
  },
  breadFlour: {
    aliases: ["bread flour"],
    gramsPerCup: 120,
  },
  riceFlour: {
    aliases: ["rice flour", "white rice flour"],
    gramsPerCup: 142,
  },
  cornmeal: {
    aliases: ["cornmeal", "corn meal"],
    gramsPerCup: 138,
  },
  peanutButter: {
    aliases: ["peanut butter", "natural peanut butter"],
    gramsPerCup: 270,
  },
  groundFlaxseed: {
    aliases: ["ground flaxseed", "ground flax", "flax meal", "flaxseed meal"],
    gramsPerCup: 100,
  },
  molasses: {
    aliases: ["molasses"],
    gramsPerCup: 340,
  },
  mapleSyrup: {
    aliases: ["maple syrup"],
    gramsPerCup: 312,
  },
  sourCream: {
    aliases: ["sour cream"],
    gramsPerCup: 227,
  },
  cremeFraiche: {
    aliases: ["crème fraîche", "creme fraiche"],
    gramsPerCup: 226,
  },
  creamCheese: {
    aliases: ["cream cheese"],
    gramsPerCup: 227,
  },
  bakingSoda: {
    aliases: ["baking soda", "bicarbonate of soda"],
    gramsPerCup: 288,
  },
  instantYeast: {
    aliases: ["instant yeast", "rapid-rise yeast", "bread machine yeast"],
    gramsPerCup: 144,
  },
};

/** @type {Record<string, Ingredient>} */
const ingredientsByAlias = {};
Object.entries(ingredients).forEach(([ingredient, value]) => {
  value.aliases.forEach((alias) => {
    ingredientsByAlias[alias] = /** @type {Ingredient} */ (ingredient);
  });
});

const vulgarFractions = {
  "¼": "1/4",
  "½": "1/2",
  "¾": "3/4",
  "⅐": "1/7",
  "⅑": "1/9",
  "⅒": "1/10",
  "⅓": "1/3",
  "⅔": "2/3",
  "⅕": "1/5",
  "⅖": "2/5",
  "⅗": "3/5",
  "⅘": "4/5",
  "⅙": "1/6",
  "⅚": "5/6",
  "⅛": "1/8",
  "⅜": "3/8",
  "⅝": "5/8",
  "⅞": "7/8",
};

/**
 * @typedef {Object} PartialParseResult
 * @property {string} match
 * @property {string} remainder
 */

/**
 * @param {string} input
 * @returns {PartialParseResult}
 */
const parseAmount = (input) => {
  const start = String.raw`^\s*`;
  const vulgarFractions = String.raw`(?:[¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])`;
  const improperFraction = String.raw`(?:\d+\/\d+)`;
  const decimal = String.raw`(?:\d*\.\d+(?!\s+\d))`;
  const integer = String.raw`\d+(?!\s+\d)`;
  const properFraction = String.raw`(?:\d+\s+\d+\/\d+)`;
  const end = String.raw`(?:\s+|$)`;

  const amountParser = new RegExp(
    `${start}(${properFraction}|${vulgarFractions}|${improperFraction}|${decimal}|${integer})${end}`,
  );

  const match = input.match(amountParser);
  const matchedStr = match?.[0] ?? "";
  const value = match?.[1] ?? "";
  const remainder = input.slice(matchedStr.length);
  return { match: value, remainder };
};

/**
 * @param {string} input
 * @returns {PartialParseResult}
 */
const parseMeasure = (input) => {
  // will extend later
  const measurements = Object.keys(amountsPerCup).toSorted(
    (a, b) => b.length - a.length,
  );
  const start = String.raw`^\s*`;
  const end = String.raw`(?:\s+|$)`;
  const regex = new RegExp(`${start}(${measurements.join("|")})${end}`);
  const match = input.match(regex);
  const matchedStr = match?.[0] ?? "";
  const value = match?.[1] ?? "";
  const remainder = input.slice(matchedStr.length);
  return { match: value, remainder };
};

/**
 * @param {string} amount
 * @returns number
 */
const amountToNumber = (amount) => {
  Object.entries(vulgarFractions).forEach(([short, long]) => {
    amount = amount.replaceAll(short, long);
  });
  if (amount.includes(".") || !amount.includes("/")) {
    return Number(amount);
  }

  let integer = 0;
  if (amount.includes(" ")) {
    const [rawInteger, fractionPart] = amount.split(" ");
    integer = Number(rawInteger);
    amount = fractionPart;
  }

  const [numerator, denominator] = amount.split("/");
  return integer + Number(numerator) / Number(denominator);
};

/**
 * @param {string} value
 * @returns {value is Measure}
 */
const isMeasure = (value) => Object.hasOwn(amountsPerCup, value);

/**
 * @param {string} value
 * @returns {value is Ingredient}
 */
const isIngredient = (value) => Object.hasOwn(ingredients, value);

/**
 * @typedef {Object} ParseResult
 * @property {string | null} rawAmount
 * @property {number} amount
 * @property {Ingredient | null} ingredient
 * @property {string | null} ingredientAlias
 * @property {Measure | null} measure
 */

/**
 * @param {string} input
 * @returns {ParseResult}
 */
const parse = (input) => {
  const { match: rawAmount, remainder: remainingAmount } = parseAmount(input);
  if (!rawAmount || !Number.isFinite(amountToNumber(rawAmount))) {
    return {
      rawAmount: null,
      amount: 0,
      ingredient: null,
      measure: null,
      ingredientAlias: null,
    };
  }

  const amount = amountToNumber(rawAmount);

  const { match: measure, remainder: remainingMeasure } =
    parseMeasure(remainingAmount);

  if (!isMeasure(measure)) {
    return {
      rawAmount,
      amount,
      measure: null,
      ingredient: null,
      ingredientAlias: null,
    };
  }

  const ingredientAlias = remainingMeasure.trim();
  const ingredient = ingredientsByAlias[ingredientAlias];
  if (!isIngredient(ingredient)) {
    return {
      rawAmount,
      amount,
      measure: measure,
      ingredient: null,
      ingredientAlias: null,
    };
  }

  return { rawAmount, amount, measure, ingredient, ingredientAlias };
};

/**
 * Calculates the weight of an ingredient in grams.
 * @param {number} amount
 * @param {Measure} measure
 * @param {Ingredient} ingredient
 * @returns {number}
 */
const calculateGrams = (amount, measure, ingredient) => {
  return (
    (amount / amountsPerCup[measure]) * ingredients[ingredient].gramsPerCup
  );
};

const onInput = () => {
  const inputElement = document.getElementById("ingredient-input");
  const parseResult = parse(inputElement.value);

  document.getElementById("amount-holder").innerText =
    parseResult.rawAmount || "";
  document.getElementById("measure-holder").innerText =
    parseResult.measure || "";

  document.getElementById("ingredient-holder").innerText =
    parseResult.ingredientAlias || "";

  let gramsStr = "";
  if (parseResult.amount && parseResult.measure && parseResult.ingredient) {
    const grams = calculateGrams(
      parseResult.amount,
      parseResult.measure,
      parseResult.ingredient,
    );
    if (grams && Number.isFinite(grams)) {
      gramsStr = `is ${grams.toFixed(0)} grams`;
      if (grams < 1) {
        gramsStr = "is <1 gram";
      }
    }
  }
  document.getElementById("grams-container").innerText = gramsStr;
};

document.getElementById("ingredient-input").addEventListener("input", onInput);

// call once at the start in case the input was prefilled
onInput();
