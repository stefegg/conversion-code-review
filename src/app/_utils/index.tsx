export const roundToTenths = (x: number) => {
  return Math.round(x * 10) / 10;
};

export const kelvinToCelc = (kInput: number, studentAnswer: number) => {
  const convertK = kInput - 273.15;
  const roundConvert = roundToTenths(convertK);
  if (roundConvert !== studentAnswer) {
    return "incorrect";
  } else return "correct";
};

export const kelvinToFaren = (kInput: number, studentAnswer: number) => {
  const convertK = (kInput - 273.15) * 1.8 + 32;
  const roundConvert = roundToTenths(convertK);
  if (roundConvert !== studentAnswer) {
    return "incorrect";
  } else return "correct";
};

export const kelvinToRankine = (kInput: number, studentAnswer: number) => {
  const convertK = kInput * 1.8;
  const roundConvert = roundToTenths(convertK);
  if (roundConvert !== studentAnswer) {
    return "incorrect";
  } else return "correct";
};
