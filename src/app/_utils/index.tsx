//General Utils

export const roundToTenths = (x: number) => {
  return Math.round(x * 10) / 10;
};

export const checkAnswer = (roundConvert: number, studentAnswer: number) => {
  if (roundConvert !== studentAnswer) {
    return "incorrect";
  } else return "correct";
};

export const temperatureConversion = (
  inputType: string,
  targetType: string,
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

// Kelvin

export const kelvinConversion = (
  type: string,
  kInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return kelvinToCels(kInput, studentAnswer);
    case "Fahrenheit":
      return kelvinToFaren(kInput, studentAnswer);
    case "Rankine":
      return kelvinToRankine(kInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const kelvinToCels = (kInput: number, studentAnswer: number) => {
  const convertK = kInput - 273.15;
  const roundConvert = roundToTenths(convertK);
  return checkAnswer(roundConvert, studentAnswer);
};

export const kelvinToFaren = (kInput: number, studentAnswer: number) => {
  const convertK = (kInput - 273.15) * 1.8 + 32;
  const roundConvert = roundToTenths(convertK);
  return checkAnswer(roundConvert, studentAnswer);
};

export const kelvinToRankine = (kInput: number, studentAnswer: number) => {
  const convertK = kInput * 1.8;
  const roundConvert = roundToTenths(convertK);
  return checkAnswer(roundConvert, studentAnswer);
};

//Fahrenheit

export const fahrenheitConversion = (
  type: string,
  fInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return farenToCels(fInput, studentAnswer);
    case "Kelvin":
      return farenToKelvin(fInput, studentAnswer);
    case "Rankine":
      return farenToRankin(fInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const farenToKelvin = (fInput: number, studentAnswer: number) => {
  const convertF = (fInput - 32) * (5 / 9) + 273.15;
  const roundConvert = roundToTenths(convertF);
  return checkAnswer(roundConvert, studentAnswer);
};

export const farenToRankin = (fInput: number, studentAnswer: number) => {
  const convertF = fInput + 459.67;
  const roundConvert = roundToTenths(convertF);
  return checkAnswer(roundConvert, studentAnswer);
};

export const farenToCels = (fInput: number, studentAnswer: number) => {
  const convertF = (fInput - 32) * (5 / 9);
  const roundConvert = roundToTenths(convertF);
  return checkAnswer(roundConvert, studentAnswer);
};

//Rankine

export const rankineConversion = (
  type: string,
  rInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return rankineToCels(rInput, studentAnswer);
    case "Kelvin":
      return rankineToKelvin(rInput, studentAnswer);
    case "Fahrenheit":
      return rankineToFaren(rInput, studentAnswer);
    default:
      return "invalid";
  }
};

export const rankineToKelvin = (rInput: number, studentAnswer: number) => {
  const convertR = rInput * (5 / 9);
  const roundConvert = roundToTenths(convertR);
  return checkAnswer(roundConvert, studentAnswer);
};

export const rankineToFaren = (rInput: number, studentAnswer: number) => {
  const convertR = rInput - 459.67;
  const roundConvert = roundToTenths(convertR);
  return checkAnswer(roundConvert, studentAnswer);
};

export const rankineToCels = (rInput: number, studentAnswer: number) => {
  const convertR = (rInput - 491.67) * (5 / 9);
  const roundConvert = roundToTenths(convertR);
  return checkAnswer(roundConvert, studentAnswer);
};

// Celsius

export const celsiusConversion = (
  type: string,
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

// Liters

// Tablespoons

// Cubic-inches

// Cups

// Cubic-feet

// Gallons
