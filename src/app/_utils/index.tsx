//General Utils

export const roundToTenths = (x: number) => {
  return Math.round(x * 10) / 10;
};

export const subtractAmount = (input: number, amount: number) => {
  return input - amount;
};

export const addAmount = (input: number, amount: number) => {
  return input + amount;
};

export const multiplyAmount = (input: number, amount: number) => {
  return input * amount;
};

export const divideAmount = (input: number, amount: number) => {
  return input / amount;
};

export const oneToOne = (input: number, studentAnswer: number) => {
  const roundStudentAnswer = (studentAnswer * 10) / 10;
  return checkAnswer(
    parseFloat(input.toFixed(1)),
    parseFloat(roundStudentAnswer.toFixed(1))
  );
};

const findAnswer = (
  input: number,
  studentAnswer: number,
  amount: number,
  operation: (a: number, b: number) => number
) => {
  const convert = operation(input, amount);
  const roundConvert = roundToTenths(convert);
  const roundStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundStudentAnswer);
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

// Temperatures

// Kelvin

export const kelvinConversion = (
  type: TempTypes,
  kInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "Celsius":
      return findAnswer(kInput, studentAnswer, 273.15, subtractAmount);
    case "Fahrenheit":
      return kelvinToFahren(kInput, studentAnswer);
    case "Rankine":
      return findAnswer(kInput, studentAnswer, 1.8, multiplyAmount);
    case "Kelvin":
      return oneToOne(kInput, studentAnswer);
    default:
      return "invalid";
  }
};

const kelvinToFahren = (kInput: number, studentAnswer: number) => {
  const convertK = (kInput - 273.15) * 1.8 + 32;
  const roundConvert = roundToTenths(convertK);
  const roundStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundStudentAnswer);
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
      return findAnswer(fInput, studentAnswer, 459.67, addAmount);
    case "Fahrenheit":
      return oneToOne(fInput, studentAnswer);
    default:
      return "invalid";
  }
};

const fahrenToKelvin = (fInput: number, studentAnswer: number) => {
  const convertF = (fInput - 32) * (5 / 9) + 273.15;
  const roundConvert = roundToTenths(convertF);
  const roundStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundStudentAnswer);
};

const fahrenToCels = (fInput: number, studentAnswer: number) => {
  const convertF = (fInput - 32) * (5 / 9);
  const roundConvert = roundToTenths(convertF);
  const roundStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundStudentAnswer);
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
      return findAnswer(rInput, studentAnswer, 459.67, subtractAmount);
    case "Rankine":
      return oneToOne(rInput, studentAnswer);
    default:
      return "invalid";
  }
};

const rankineToKelvin = (rInput: number, studentAnswer: number) => {
  const convertR = rInput * (5 / 9);
  const roundConvert = roundToTenths(convertR);
  const roundedStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundedStudentAnswer);
};

const rankineToCels = (rInput: number, studentAnswer: number) => {
  const convertR = (rInput - 491.67) * (5 / 9);
  const roundConvert = roundToTenths(convertR);
  const roundedStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundedStudentAnswer);
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
      return findAnswer(cInput, studentAnswer, 273.15, addAmount);
    case "Fahrenheit":
      return celsiusToFaren(cInput, studentAnswer);
    case "Celsius":
      return oneToOne(cInput, studentAnswer);
    default:
      return "invalid";
  }
};

const celsiusToFaren = (cInput: number, studentAnswer: number) => {
  const convertC = cInput * 1.8 + 32;
  const roundConvert = roundToTenths(convertC);
  const roundedStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundedStudentAnswer);
};

const celsiusToRankine = (cInput: number, studentAnswer: number) => {
  const convertC = cInput * 1.8 + 491.67;
  const roundConvert = roundToTenths(convertC);
  const roundedStudentAnswer = roundToTenths(studentAnswer);
  return checkAnswer(roundConvert, roundedStudentAnswer);
};

//Volumes

// Liters

export const literConversion = (
  type: VolumeTypes,
  lInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return oneToOne(lInput, studentAnswer);
    case "tablespoons":
      return findAnswer(lInput, studentAnswer, 67.628, multiplyAmount);
    case "cubic-inches":
      return findAnswer(lInput, studentAnswer, 61.0237440947, multiplyAmount);
    case "cups":
      return findAnswer(lInput, studentAnswer, 4.227, multiplyAmount);
    case "cubic-feet":
      return findAnswer(lInput, studentAnswer, 28.317, divideAmount);
    case "gallons":
      return findAnswer(lInput, studentAnswer, 3.785, divideAmount);
    default:
      return "invalid";
  }
};

// Tablespoons

export const tableSpoonConversion = (
  type: VolumeTypes,
  tInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return findAnswer(tInput, studentAnswer, 67.628, divideAmount);
    case "tablespoons":
      return oneToOne(tInput, studentAnswer);
    case "cubic-inches":
      return findAnswer(tInput, studentAnswer, 1.108225, divideAmount);
    case "cups":
      return findAnswer(tInput, studentAnswer, 16, divideAmount);
    case "cubic-feet":
      return findAnswer(tInput, studentAnswer, 1915.012987, divideAmount);
    case "gallons":
      return findAnswer(tInput, studentAnswer, 256, divideAmount);
    default:
      return "invalid";
  }
};

// Cubic-inches

export const cubicInchesConversion = (
  type: VolumeTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return findAnswer(cInput, studentAnswer, 61.023744, divideAmount);
    case "tablespoons":
      return findAnswer(cInput, studentAnswer, 1.108225, multiplyAmount);
    case "cubic-inches":
      return oneToOne(cInput, studentAnswer);
    case "cups":
      return findAnswer(cInput, studentAnswer, 14.4375, divideAmount);
    case "cubic-feet":
      return findAnswer(cInput, studentAnswer, 1728, divideAmount);
    case "gallons":
      return findAnswer(cInput, studentAnswer, 231, divideAmount);
    default:
      return "invalid";
  }
};

// Cups

export const cupsConversion = (
  type: VolumeTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return findAnswer(cInput, studentAnswer, 4.227, divideAmount);
    case "tablespoons":
      return findAnswer(cInput, studentAnswer, 16, multiplyAmount);
    case "cubic-inches":
      return findAnswer(cInput, studentAnswer, 14.4375, multiplyAmount);
    case "cups":
      return oneToOne(cInput, studentAnswer);
    case "cubic-feet":
      return findAnswer(cInput, studentAnswer, 119.688312, divideAmount);
    case "gallons":
      return findAnswer(cInput, studentAnswer, 16, divideAmount);
    default:
      return "invalid";
  }
};

// Cubic-feet

export const cubicFeetConversion = (
  type: VolumeTypes,
  cInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return findAnswer(cInput, studentAnswer, 28.316847, multiplyAmount);
    case "tablespoons":
      return findAnswer(cInput, studentAnswer, 1915.012987, multiplyAmount);
    case "cubic-inches":
      return findAnswer(cInput, studentAnswer, 1728, multiplyAmount);
    case "cups":
      return findAnswer(cInput, studentAnswer, 119.688312, multiplyAmount);
    case "cubic-feet":
      return oneToOne(cInput, studentAnswer);
    case "gallons":
      return findAnswer(cInput, studentAnswer, 7.480519, multiplyAmount);
    default:
      return "invalid";
  }
};

// Gallons

export const gallonConversion = (
  type: VolumeTypes,
  gInput: number,
  studentAnswer: number
) => {
  switch (type) {
    case "liters":
      return findAnswer(gInput, studentAnswer, 3.785411784, multiplyAmount);
    case "tablespoons":
      return findAnswer(gInput, studentAnswer, 256, multiplyAmount);
    case "cubic-inches":
      return findAnswer(gInput, studentAnswer, 231, multiplyAmount);
    case "cups":
      return findAnswer(gInput, studentAnswer, 16, multiplyAmount);
    case "cubic-feet":
      return findAnswer(gInput, studentAnswer, 7.48051948, divideAmount);
    case "gallons":
      return oneToOne(gInput, studentAnswer);
    default:
      return "invalid";
  }
};
