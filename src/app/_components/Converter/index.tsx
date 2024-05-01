"use client";
import { Dropdown, Input, Button } from "../index";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { convertOptions } from "@/app/_constants";
import { validationSchema } from "./validation";
import { roundToTenths, temperatureConversion } from "@/app/_utils";

type ConvertOption = {
  name: string;
  type: string;
};

const Converter = () => {
  const [inputUnit, setInputUnit] = useState<ConvertOption>({
    name: "",
    type: "",
  });
  const [targetUnit, setTargetUnit] = useState<ConvertOption>({
    name: "",
    type: "",
  });
  const [result, setResult] = useState<string>("");

  const invalidConversion = () => {
    setResult("invalid");
    formik.setFieldError("targetUnit", "Invalid target unit");
  };

  const handleSubmit = () => {
    if (inputUnit.type !== targetUnit.type) {
      return invalidConversion();
    } else if (inputUnit.type === "Temp" && targetUnit.type === "Temp") {
      const inputTenths = roundToTenths(formik.values.inputNum);
      const studentTenths = roundToTenths(formik.values.studentInput);
      const answer = temperatureConversion(
        formik.values.inputUnit,
        formik.values.targetUnit,
        inputTenths,
        studentTenths
      );
      setResult(answer);
    }

    // }
  };

  const formik = useFormik({
    initialValues: {
      inputNum: 0,
      inputUnit: "",
      targetUnit: "",
      studentInput: 0,
    },
    onSubmit: handleSubmit,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    if (formik.errors.inputNum === "Please enter a number") {
      setResult("invalid");
    }
    if (formik.errors.studentInput === "Please enter a number") {
      setResult("invalid");
    }
  }, [formik.errors]);

  return (
    <div className="w-full flex flex-row items-start gap-4">
      <Input
        placeholder={"Enter"}
        value={formik.values.inputNum}
        onChange={formik.handleChange("inputNum")}
        onBlur={formik.handleBlur("inputNum")}
        width="1/2"
        label="Input Numerical Value"
        error={formik.touched.inputNum && formik.errors.inputNum}
      />
      <Dropdown
        title={"Input Unit of Measure"}
        options={convertOptions.map((x) => ({
          title: x.name,
          setter: () => {
            setInputUnit(x);
            formik.setFieldValue("inputUnit", x.name);
          },
        }))}
        value={formik.values.inputUnit}
        error={formik.touched.inputUnit && formik.errors.inputUnit}
      />
      <Dropdown
        title={"Target Unit of Measure"}
        options={convertOptions.map((x) => ({
          title: x.name,
          setter: () => {
            setTargetUnit(x);
            formik.setFieldValue("targetUnit", x.name);
          },
        }))}
        value={formik.values.targetUnit}
        error={formik.touched.targetUnit && formik.errors.targetUnit}
      />
      <Input
        value={formik.values.studentInput}
        onChange={formik.handleChange("studentInput")}
        onBlur={formik.handleBlur("studentInput")}
        width="1/2"
        label="Student Response"
        error={formik.touched.studentInput && formik.errors.studentInput}
      />
      <div className="flex flex-col gap-2">
        <Button
          buttonText="Compare"
          styleType="secondary"
          onClick={formik.handleSubmit}
          type="submit"
        />
        <Button
          buttonText="Reset"
          styleType="primary"
          onClick={formik.handleSubmit}
          type="reset"
        />
      </div>
      <div>Result:{result}</div>
    </div>
  );
};

export default Converter;
