import "@testing-library/jest-dom";
import {
  roundToTenths,
  subtractAmount,
  addAmount,
  multiplyAmount,
  divideAmount,
  oneToOne,
  checkAnswer,
  temperatureConversion,
  volumeConversion,
  kelvinConversion,
  fahrenheitConversion,
  rankineConversion,
  celsiusConversion,
  literConversion,
  tableSpoonConversion,
  cubicInchesConversion,
  cupsConversion,
  cubicFeetConversion,
  gallonConversion,
} from "../src/app/_utils/index";

describe("Basic math functions", () => {
  it("Rounds to tenths", () => {
    expect(roundToTenths(23.222222)).toBe(23.2);
    expect(roundToTenths(23.2222222)).not.toBe(23.22);
    expect(roundToTenths("apple")).toBe(NaN);
  });
  it("Subtracts correctly", () => {
    expect(subtractAmount(1, 1)).toBe(0);
    expect(subtractAmount("a", "a")).toBe(NaN);
  });
  it("Adds correctly", () => {
    expect(addAmount(1, 1)).toBe(2);
    expect(addAmount("a", "a")).toBe("aa");
  });
  it("Divides correctly", () => {
    expect(divideAmount(8, 4)).toBe(2);
    expect(divideAmount("a", "a")).toBe(NaN);
  });
  it("Multiplies correctly", () => {
    expect(multiplyAmount(1, 1)).toBe(1);
    expect(multiplyAmount("a", "a")).toBe(NaN);
  });
  it("Compares one to one", () => {
    expect(oneToOne(99.99, 99.99)).toBe("correct");
  });
  it("Checks answers", () => {
    expect(checkAnswer(9.9, 9.9)).toBe("correct");
    expect(checkAnswer(9.9, 9.8)).toBe("incorrect");
  });
});

describe("Checking Invalid States for Temperatures and Volumes", () => {
  it("Volume Conversion returns invalid with incorrect input", () => {
    expect(volumeConversion("Apple", "Dog", 19, 23)).toBe("invalid");
  });
  it("Temp Conversion returns invalid with incorrect input", () => {
    expect(temperatureConversion("Apple", "Dog", 19, 23)).toBe("invalid");
  });
  it("Kelvin conversion returns invalid with incorrect input", () => {
    expect(kelvinConversion("cups", 93, 28)).toBe("invalid");
  });
  it("Fahrenheit conversion returns invalid with incorrect input", () => {
    expect(fahrenheitConversion("oysters", 193, 538)).toBe("invalid");
  });
  it("Rankine conversion returns invalid with incorrect input", () => {
    expect(rankineConversion("farenhite", 193, 538)).toBe("invalid");
  });
  it("Celsius conversion returns invalid with incorrect input", () => {
    expect(celsiusConversion("gallons", 193, 538)).toBe("invalid");
  });
  it("Liter conversion returns invalid with incorrect input", () => {
    expect(literConversion("Kelvin", 193, 538)).toBe("invalid");
  });
  it("Tablespoon conversion returns invalid with incorrect input", () => {
    expect(tableSpoonConversion("Cups", 193, 538)).toBe("invalid");
  });
  it("Cubic-Inches conversion returns invalid with incorrect input", () => {
    expect(cubicInchesConversion("dog", 193, 538)).toBe("invalid");
  });
  it("Cups conversion returns invalid with incorrect input", () => {
    expect(cupsConversion("icecream", 193, 538)).toBe("invalid");
  });
  it("Cubic-feet conversion returns invalid with incorrect input", () => {
    expect(cubicFeetConversion("Celsius", 193, 538)).toBe("invalid");
  });
  it("Gallons conversion returns invalid with incorrect input", () => {
    expect(gallonConversion("Liters", 193, 538)).toBe("invalid");
  });
});

describe("Temperature Conversions - Kelvin", () => {
  it("Converts Kelvin to Celsius", () => {
    expect(temperatureConversion("Kelvin", "Celsius", 0, -273.15)).toBe(
      "correct"
    );
    expect(temperatureConversion("Kelvin", "Celsius", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Kelvin to Fahrenheit", () => {
    expect(temperatureConversion("Kelvin", "Fahrenheit", 0, -459.67)).toBe(
      "correct"
    );
    expect(temperatureConversion("Kelvin", "Fahrenheit", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Kelvin to Rankine", () => {
    expect(temperatureConversion("Kelvin", "Rankine", 55.5556, 100)).toBe(
      "correct"
    );
    expect(temperatureConversion("Kelvin", "Rankine", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Temperature Conversions - Fahrenheit", () => {
  it("Converts Fahrenheit to Celsius", () => {
    expect(temperatureConversion("Fahrenheit", "Celsius", 32, 0)).toBe(
      "correct"
    );
    expect(temperatureConversion("Fahrenheit", "Celsius", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Fahrenheit to Kelvin", () => {
    expect(temperatureConversion("Fahrenheit", "Kelvin", 32, 273.15)).toBe(
      "correct"
    );
    expect(temperatureConversion("Fahrenheit", "Kelvin", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Fahrenheit to Rankine", () => {
    expect(temperatureConversion("Fahrenheit", "Rankine", 32, 491.67)).toBe(
      "correct"
    );
    expect(temperatureConversion("Fahrenheit", "Rankine", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Temperature Conversions - Celsius", () => {
  it("Converts Celsius to Fahrenheit", () => {
    expect(
      temperatureConversion("Celsius", "Fahrenheit", 123.455, 254.219)
    ).toBe("correct");
    expect(temperatureConversion("Celsius", "Fahrenheit", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Celsius to Kelvin", () => {
    expect(temperatureConversion("Celsius", "Kelvin", 123.455, 396.605)).toBe(
      "correct"
    );
    expect(temperatureConversion("Celsius", "Kelvin", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Celsius to Rankine", () => {
    expect(temperatureConversion("Celsius", "Rankine", 123.455, 713.889)).toBe(
      "correct"
    );
    expect(temperatureConversion("Celsius", "Rankine", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Temperature Conversions - Rankine", () => {
  it("Converts Rankine to Fahrenheit", () => {
    expect(temperatureConversion("Rankine", "Fahrenheit", 92.34, -367.33)).toBe(
      "correct"
    );
    expect(temperatureConversion("Rankine", "Fahrenheit", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Rankine to Kelvin", () => {
    expect(temperatureConversion("Rankine", "Kelvin", 92.34, 51.3)).toBe(
      "correct"
    );
    expect(temperatureConversion("Rankine", "Kelvin", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Rankine to Celsius", () => {
    expect(temperatureConversion("Rankine", "Celsius", 92.34, -221.85)).toBe(
      "correct"
    );
    expect(temperatureConversion("Rankine", "Celsius", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Volume Conversions - Liters", () => {
  it("Converts Liters to Tablespoons", () => {
    expect(volumeConversion("liters", "tablespoons", 12.3, 831.825)).toBe(
      "correct"
    );
    expect(volumeConversion("liters", "tablespoons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Liters to Cubic-Inches", () => {
    expect(volumeConversion("liters", "cubic-inches", 23.49, 1433.4477)).toBe(
      "correct"
    );
    expect(volumeConversion("liters", "cubic-inches", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Liters to Cups", () => {
    expect(volumeConversion("liters", "cups", 23.3, 98.48334)).toBe("correct");
    expect(volumeConversion("liters", "cups", 0, -237.15)).toBe("incorrect");
  });
  it("Converts Liters to Cubic-feet", () => {
    expect(volumeConversion("liters", "cubic-feet", 29.9, 1.055909)).toBe(
      "correct"
    );
    expect(volumeConversion("liters", "cubic-feet", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Liters to Gallons", () => {
    expect(volumeConversion("liters", "gallons", 9.99, 2.639079)).toBe(
      "correct"
    );
    expect(volumeConversion("liters", "gallons", 0, -237.15)).toBe("incorrect");
  });
});

describe("Volume Conversions - Tablespoons", () => {
  it("Converts Tablespoons to Liters", () => {
    expect(volumeConversion("tablespoons", "liters", 32, 0.473176)).toBe(
      "correct"
    );
    expect(volumeConversion("tablespoons", "liters", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Tablespoons to Cubic-Inches", () => {
    expect(
      volumeConversion("tablespoons", "cubic-inches", 32.998, 29.7755391)
    ).toBe("correct");
    expect(volumeConversion("tablespoons", "cubic-inches", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Tablespoons to Cups", () => {
    expect(volumeConversion("tablespoons", "cups", 29.28, 1.83)).toBe(
      "correct"
    );
    expect(volumeConversion("tablespoons", "cups", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Tablespoons to Cubic-feet", () => {
    expect(
      volumeConversion("tablespoons", "cubic-feet", 998.284, 0.5212935927)
    ).toBe("correct");
    expect(volumeConversion("tablespoons", "cubic-feet", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Tablespoons to Gallons", () => {
    expect(volumeConversion("tablespoons", "gallons", 92.45, 0.36113281)).toBe(
      "correct"
    );
    expect(volumeConversion("tablespoons", "gallons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Volume Conversions - Cubic-Inches", () => {
  it("Converts Cubic-Inches to Liters", () => {
    expect(volumeConversion("cubic-inches", "liters", 9.2223, 0.15112642)).toBe(
      "correct"
    );
    expect(volumeConversion("cubic-inches", "liters", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Inches to Tablespoons", () => {
    expect(
      volumeConversion("cubic-inches", "tablespoons", 248.4545, 275.34351515)
    ).toBe("correct");
    expect(volumeConversion("cubic-inches", "tablespoons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Inches to Cups", () => {
    expect(volumeConversion("cubic-inches", "cups", 9.242, 0.64013853)).toBe(
      "correct"
    );
    expect(volumeConversion("cubic-inches", "cups", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Inches to Cubic-feet", () => {
    expect(
      volumeConversion("cubic-inches", "cubic-feet", 9.112, 0.0052731481)
    ).toBe("correct");
    expect(volumeConversion("cubic-inches", "cubic-feet", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Inches to Gallons", () => {
    expect(
      volumeConversion("cubic-inches", "gallons", 23.583, 0.102090909)
    ).toBe("correct");
    expect(volumeConversion("cubic-inches", "gallons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Volume Conversions - Cups", () => {
  it("Converts Cups to Liters", () => {
    expect(volumeConversion("cups", "liters", 12.39, 2.9313283)).toBe(
      "correct"
    );
    expect(volumeConversion("cups", "liters", 0, -237.15)).toBe("incorrect");
  });
  it("Converts Cups to Tablespoons", () => {
    expect(volumeConversion("cups", "tablespoons", 23.49, 375.84)).toBe(
      "correct"
    );
    expect(volumeConversion("cups", "tablespoons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cups to Cubic-Inches", () => {
    expect(volumeConversion("cups", "cubic-inches", 9.234, 133.31588)).toBe(
      "correct"
    );
    expect(volumeConversion("cups", "cubic-inches", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cups to Cubic-feet", () => {
    expect(volumeConversion("cups", "cubic-feet", 7.7742, 0.0649537109)).toBe(
      "correct"
    );
    expect(volumeConversion("cups", "cubic-feet", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cups to Gallons", () => {
    expect(volumeConversion("cups", "gallons", 19.23, 1.201875)).toBe(
      "correct"
    );
    expect(volumeConversion("cups", "gallons", 0, -237.15)).toBe("incorrect");
  });
});

describe("Volume Conversions - Cubic-Feet", () => {
  it("Converts Cubic-Feet to Liters", () => {
    expect(volumeConversion("cubic-feet", "liters", 9.223, 261.16628)).toBe(
      "correct"
    );
    expect(volumeConversion("cubic-feet", "liters", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Feet to Tablespoons", () => {
    expect(
      volumeConversion("cubic-feet", "tablespoons", 9.2459, 17706.0186)
    ).toBe("correct");
    expect(volumeConversion("cubic-feet", "tablespoons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Feet to Cubic-Inches", () => {
    expect(
      volumeConversion("cubic-feet", "cubic-inches", 1994.993, 3447347.904)
    ).toBe("correct");
    expect(volumeConversion("cubic-feet", "cubic-inches", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Feet to Cups", () => {
    expect(volumeConversion("cubic-feet", "cups", 9782.472, 1170847.5578)).toBe(
      "correct"
    );
    expect(volumeConversion("cubic-feet", "cups", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Cubic-Feet to Gallons", () => {
    expect(volumeConversion("cubic-feet", "gallons", 19.239, 143.917714)).toBe(
      "correct"
    );
    expect(volumeConversion("cubic-feet", "gallons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});

describe("Volume Conversions - Gallons", () => {
  it("Converts Gallons to Liters", () => {
    expect(volumeConversion("gallons", "liters", 12.34, 46.711981)).toBe(
      "correct"
    );
    expect(volumeConversion("gallons", "liters", 0, -237.15)).toBe("incorrect");
  });
  it("Converts Gallons to Tablespoons", () => {
    expect(
      volumeConversion("gallons", "tablespoons", 1995.442, 510833.152)
    ).toBe("correct");
    expect(volumeConversion("gallons", "tablespoons", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Gallons to Cubic-Inches", () => {
    expect(
      volumeConversion("gallons", "cubic-inches", 47.3992, 10949.2152)
    ).toBe("correct");
    expect(volumeConversion("gallons", "cubic-inches", 0, -237.15)).toBe(
      "incorrect"
    );
  });
  it("Converts Gallons to Cups", () => {
    expect(volumeConversion("gallons", "cups", 255.355, 4085.68)).toBe(
      "correct"
    );
    expect(volumeConversion("gallons", "cups", 0, -237.15)).toBe("incorrect");
  });
  it("Converts Gallons to Cubic-feet", () => {
    expect(
      volumeConversion("gallons", "cubic-feet", 55.2345, 7.383778646)
    ).toBe("correct");
    expect(volumeConversion("gallons", "cubic-feet", 0, -237.15)).toBe(
      "incorrect"
    );
  });
});
