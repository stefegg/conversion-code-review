"use client";
import { Dropdown, Input, Button } from "../index";
import { useFormik } from "formik";
import { useState } from "react";
import { convertOptions } from "@/app/_constants";
import { validationSchema } from "./validation";
import {
  temperatureConversion,
  volumeConversion,
  VolumeTypes,
  TempTypes,
} from "@/app/_utils";

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
      const answer = temperatureConversion(
        formik.values.inputUnit as TempTypes,
        formik.values.targetUnit as TempTypes,
        formik.values.inputNum,
        formik.values.studentInput
      );
      setResult(answer);
    } else if (inputUnit.type === "Volume" && targetUnit.type === "Volume") {
      const answer = volumeConversion(
        formik.values.inputUnit as VolumeTypes,
        formik.values.targetUnit as VolumeTypes,
        formik.values.inputNum,
        formik.values.studentInput
      );
      setResult(answer);
    }
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

  return (
    <div className="w-full flex flex-row items-start gap-8 h-20 px-10 justify-center">
      <Input
        value={formik.values.inputNum}
        onChange={formik.handleChange("inputNum")}
        onBlur={formik.handleBlur("inputNum")}
        label="Input Numerical Value"
        type="number"
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
        label="Student Response"
        type="number"
        error={formik.touched.studentInput && formik.errors.studentInput}
      />
      <div className="flex h-full items-center">
        <Button
          buttonText="Compare"
          onClick={formik.handleSubmit}
          type="submit"
        />
      </div>
      <div className="flex items-center h-full text-text">
        Result:
        <div
          className={`ml-1 w-16
          ${result === "correct" ? `text-green-500` : `text-accentLight`}
        `}
        >
          {result}
        </div>
      </div>
    </div>
  );
};

export default Converter;
