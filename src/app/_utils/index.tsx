//General Utils

export const roundToTenths = (x: number) => {
  return Math.round(x * 10) / 10;
};

export const checkAnswer = (roundConvert: number, studentAnswer: number) => {
  if (roundConvert !== studentAnswer) {
    return "incorrect";
  } else return "correct";
};

export type VolumeTypes =
  | "liters"
  | "tablespoons"
  | "cubic-inches"
  | "cups"
  | "cubic-feet"
  | "gallons";

export type TempTypes = "Kelvin" | "Fahrenheit" | "Rankine" | "Celsius";

export const temperatureConversion = (
  inputType: TempTypes,
  targetType: TempTypes,
  tempInput: number,
  studentAnswer: number
) => {
  switch (inputType) {
    case "Kelvin":
      return kelvinConversion(targetType, tempInput, studentAnswer);
    case "Fahrenheit":
      return fahrenheitConversion(targetType, tempInput, studentAnswer);
    case "Rankine":
      return rankineConversion(targetType, tempInput, studentAnswer);
    case "Celsius":
      return celsiusConversion(targetType, tempInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const volumeConversion = (
  inputType: VolumeTypes,
  targetType: VolumeTypes,
  tempInput: number,
  studentAnswer: number
) => {
  switch (inputType) {
    case "liters":
      return literConversion(targetType, tempInput, studentAnswer);
    case "tablespoons":
      return tableSpoonConversion(targetType, tempInput, studentAnswer);
    case "cubic-inches":
      return cubicInchesConversion(targetType, tempInput, studentAnswer);
    case "cups":
      return cupsConversion(targetType, tempInput, studentAnswer);
    case "cubic-feet":
      return cubicFeetConversion(targetType, tempInput, studentAnswer);
    case "gallons":
      return gallonConversion(targetType, tempInput, studentAnswer);
    default:
      return "invalid";
  }
};

// Kelvin

export const kelvinConversion = (
  type: TempTypes,
  kInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return kelvinToCels(kInput, studentAnswer);
    case "Fahrenheit":
      return kelvinToFahren(kInput, studentAnswer);
    case "Rankine":
      return kelvinToRankine(kInput, studentAnswer);
    case "Kelvin":
      return kelvinToKelvin(kInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const kelvinToCels = (kInput: number, studentAnswer: number) => {
  const convertK = kInput - 273.15;
  const roundConvert = roundToTenths(convertK);
  return checkAnswer(roundConvert, studentAnswer);
};

export const kelvinToFahren = (kInput: number, studentAnswer: number) => {
  const convertK = (kInput - 273.15) * 1.8 + 32;
  const roundConvert = roundToTenths(convertK);
  return checkAnswer(roundConvert, studentAnswer);
};

export const kelvinToRankine = (kInput: number, studentAnswer: number) => {
  const convertK = kInput * 1.8;
  const roundConvert = roundToTenths(convertK);
  return checkAnswer(roundConvert, studentAnswer);
};

export const kelvinToKelvin = (kInput: number, studentAnswer: number) => {
  return checkAnswer(kInput, studentAnswer);
};

//Fahrenheit

export const fahrenheitConversion = (
  type: TempTypes,
  fInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return fahrenToCels(fInput, studentAnswer);
    case "Kelvin":
      return fahrenToKelvin(fInput, studentAnswer);
    case "Rankine":
      return fahrenToRankin(fInput, studentAnswer);
    case "Fahrenheit":
      return fahrenToFahren(fInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const fahrenToKelvin = (fInput: number, studentAnswer: number) => {
  const convertF = (fInput - 32) * (5 / 9) + 273.15;
  const roundConvert = roundToTenths(convertF);
  return checkAnswer(roundConvert, studentAnswer);
};

export const fahrenToRankin = (fInput: number, studentAnswer: number) => {
  const convertF = fInput + 459.67;
  const roundConvert = roundToTenths(convertF);
  return checkAnswer(roundConvert, studentAnswer);
};

export const fahrenToCels = (fInput: number, studentAnswer: number) => {
  const convertF = (fInput - 32) * (5 / 9);
  const roundConvert = roundToTenths(convertF);
  return checkAnswer(roundConvert, studentAnswer);
};

export const fahrenToFahren = (fInput: number, studentAnswer: number) => {
  return checkAnswer(fInput, studentAnswer);
};

//Rankine

export const rankineConversion = (
  type: TempTypes,
  rInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return rankineToCels(rInput, studentAnswer);
    case "Kelvin":
      return rankineToKelvin(rInput, studentAnswer);
    case "Fahrenheit":
      return rankineToFahren(rInput, studentAnswer);
    case "Rankine":
      return rankineToRankine(rInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const rankineToKelvin = (rInput: number, studentAnswer: number) => {
  const convertR = rInput * (5 / 9);
  const roundConvert = roundToTenths(convertR);
  return checkAnswer(roundConvert, studentAnswer);
};

export const rankineToFahren = (rInput: number, studentAnswer: number) => {
  const convertR = rInput - 459.67;
  const roundConvert = roundToTenths(convertR);
  return checkAnswer(roundConvert, studentAnswer);
};

export const rankineToCels = (rInput: number, studentAnswer: number) => {
  const convertR = (rInput - 491.67) * (5 / 9);
  const roundConvert = roundToTenths(convertR);
  return checkAnswer(roundConvert, studentAnswer);
};

export const rankineToRankine = (rInput: number, studentAnswer: number) => {
  return checkAnswer(rInput, studentAnswer);
};

// Celsius

export const celsiusConversion = (
  type: TempTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Rankine":
      return celsiusToRankine(cInput, studentAnswer);
    case "Kelvin":
      return celsiusToKelvin(cInput, studentAnswer);
    case "Fahrenheit":
      return celsiusToFaren(cInput, studentAnswer);
    case "Celsius":
      return celsiusToCelsius(cInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const celsiusToKelvin = (cInput: number, studentAnswer: number) => {
  const convertC = cInput + 273.15;
  const roundConvert = roundToTenths(convertC);
  return checkAnswer(roundConvert, studentAnswer);
};

export const celsiusToFaren = (cInput: number, studentAnswer: number) => {
  const convertC = cInput * 1.8 + 32;
  const roundConvert = roundToTenths(convertC);
  return checkAnswer(roundConvert, studentAnswer);
};

export const celsiusToRankine = (cInput: number, studentAnswer: number) => {
  const convertC = cInput * 1.8 + 491.67;
  const roundConvert = roundToTenths(convertC);
  return checkAnswer(roundConvert, studentAnswer);
};

export const celsiusToCelsius = (cInput: number, studentAnswer: number) => {
  return checkAnswer(cInput, studentAnswer);
};

// Liters

export const literConversion = (
  type: VolumeTypes,
  lInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return litersToLiters(lInput, studentAnswer);
    case "tablespoons":
      return litersToTable(lInput, studentAnswer);
    case "cubic-inches":
      return litersToCinches(lInput, studentAnswer);
    case "cups":
      return litersToCups(lInput, studentAnswer);
    case "cubic-feet":
      return litersToCfeet(lInput, studentAnswer);
    case "gallons":
      return litersToGallons(lInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const litersToTable = (lInput: number, studentAnswer: number) => {
  const convertL = lInput * 67.628;
  const roundConvert = roundToTenths(convertL);
  return checkAnswer(roundConvert, studentAnswer);
};

export const litersToCinches = (lInput: number, studentAnswer: number) => {
  const convertL = lInput * 61.024;
  const roundConvert = roundToTenths(convertL);
  return checkAnswer(roundConvert, studentAnswer);
};

export const litersToCups = (lInput: number, studentAnswer: number) => {
  const convertL = lInput * 4.227;
  const roundConvert = roundToTenths(convertL);
  return checkAnswer(roundConvert, studentAnswer);
};

export const litersToCfeet = (lInput: number, studentAnswer: number) => {
  const convertL = lInput / 28.317;
  const roundConvert = roundToTenths(convertL);
  return checkAnswer(roundConvert, studentAnswer);
};

export const litersToGallons = (lInput: number, studentAnswer: number) => {
  const convertL = lInput / 3.785;
  const roundConvert = roundToTenths(convertL);
  return checkAnswer(roundConvert, studentAnswer);
};

export const litersToLiters = (lInput: number, studentAnswer: number) => {
  return checkAnswer(lInput, studentAnswer);
};

// Tablespoons

export const tableSpoonConversion = (
  type: VolumeTypes,
  tInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return tspoonsToLiters(tInput, studentAnswer);
    case "tablespoons":
      return tspoonsToTspoons(tInput, studentAnswer);
    case "cubic-inches":
      return tspoonsToCinches(tInput, studentAnswer);
    case "cups":
      return tspoonsToCups(tInput, studentAnswer);
    case "cubic-feet":
      return tspoonsToCfeet(tInput, studentAnswer);
    case "gallons":
      return tspoonsToGallons(tInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const tspoonsToLiters = (tInput: number, studentAnswer: number) => {
  const convertT = tInput / 67.628;
  const roundConvert = roundToTenths(convertT);
  return checkAnswer(roundConvert, studentAnswer);
};

export const tspoonsToTspoons = (tInput: number, studentAnswer: number) => {
  return checkAnswer(tInput, studentAnswer);
};

export const tspoonsToCinches = (tInput: number, studentAnswer: number) => {
  const convertT = tInput / 1.108;
  const roundConvert = roundToTenths(convertT);
  return checkAnswer(roundConvert, studentAnswer);
};

export const tspoonsToCups = (tInput: number, studentAnswer: number) => {
  const convertT = tInput / 16;
  const roundConvert = roundToTenths(convertT);
  return checkAnswer(roundConvert, studentAnswer);
};

export const tspoonsToCfeet = (tInput: number, studentAnswer: number) => {
  const convertT = tInput / 1915;
  const roundConvert = roundToTenths(convertT);
  return checkAnswer(roundConvert, studentAnswer);
};

export const tspoonsToGallons = (tInput: number, studentAnswer: number) => {
  const convertT = tInput / 256;
  const roundConvert = roundToTenths(convertT);
  return checkAnswer(roundConvert, studentAnswer);
};

// Cubic-inches

export const cubicInchesConversion = (
  type: VolumeTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return cInchesToLiters(cInput, studentAnswer);
    case "tablespoons":
      return cInchesToTable(cInput, studentAnswer);
    case "cubic-inches":
      return cInchesToCInches(cInput, studentAnswer);
    case "cups":
      return cInchesToCups(cInput, studentAnswer);
    case "cubic-feet":
      return cInchesTocFeet(cInput, studentAnswer);
    case "gallons":
      return cInchesToGallons(cInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const cInchesToLiters = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 61.024;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cInchesToTable = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 1.108;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cInchesToCInches = (cInput: number, studentAnswer: number) => {
  return checkAnswer(cInput, studentAnswer);
};

export const cInchesToCups = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 14.438;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cInchesTocFeet = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 1728;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cInchesToGallons = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 231;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

// Cups

export const cupsConversion = (
  type: VolumeTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return cupsToLiters(cInput, studentAnswer);
    case "tablespoons":
      return cupsToTablespoons(cInput, studentAnswer);
    case "cubic-inches":
      return cupsTocInches(cInput, studentAnswer);
    case "cups":
      return cupsToCups(cInput, studentAnswer);
    case "cubic-feet":
      return cupsTocFeet(cInput, studentAnswer);
    case "gallons":
      return cupsToGallons(cInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const cupsToLiters = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 4.227;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cupsToTablespoons = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 16;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cupsTocInches = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 14.438;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cupsToCups = (cInput: number, studentAnswer: number) => {
  return checkAnswer(cInput, studentAnswer);
};

export const cupsTocFeet = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 119.7;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cupsToGallons = (cInput: number, studentAnswer: number) => {
  const convert = cInput / 16;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

// Cubic-feet

export const cubicFeetConversion = (
  type: VolumeTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return cFeetToLiters(cInput, studentAnswer);
    case "tablespoons":
      return cFeetToTablespoon(cInput, studentAnswer);
    case "cubic-inches":
      return cFeetTocInches(cInput, studentAnswer);
    case "cups":
      return cFeetToCups(cInput, studentAnswer);
    case "cubic-feet":
      return cFeetTocFeet(cInput, studentAnswer);
    case "gallons":
      return cFeetToGallons(cInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const cFeetToLiters = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 28.317;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cFeetToTablespoon = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 1915;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cFeetTocInches = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 1728;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cFeetToCups = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 119.7;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const cFeetTocFeet = (cInput: number, studentAnswer: number) => {
  return checkAnswer(cInput, studentAnswer);
};

export const cFeetToGallons = (cInput: number, studentAnswer: number) => {
  const convert = cInput * 7.481;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

// Gallons

export const gallonConversion = (
  type: VolumeTypes,
  gInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return gallonsToLiters(gInput, studentAnswer);
    case "tablespoons":
      return gallonsToTablespoons(gInput, studentAnswer);
    case "cubic-inches":
      return gallonsTocInches(gInput, studentAnswer);
    case "cups":
      return gallonsToCups(gInput, studentAnswer);
    case "cubic-feet":
      return gallonsTocFeet(gInput, studentAnswer);
    case "gallons":
      return gallonsToGallons(gInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const gallonsToLiters = (gInput: number, studentAnswer: number) => {
  const convert = gInput * 3.785;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const gallonsToTablespoons = (gInput: number, studentAnswer: number) => {
  const convert = gInput * 256;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const gallonsTocInches = (gInput: number, studentAnswer: number) => {
  const convert = gInput * 231;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const gallonsToCups = (gInput: number, studentAnswer: number) => {
  const convert = gInput * 16;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const gallonsTocFeet = (gInput: number, studentAnswer: number) => {
  const convert = gInput / 7.48;
  const roundConvert = roundToTenths(convert);
  return checkAnswer(roundConvert, studentAnswer);
};

export const gallonsToGallons = (cInput: number, studentAnswer: number) => {
  return checkAnswer(cInput, studentAnswer);
};
