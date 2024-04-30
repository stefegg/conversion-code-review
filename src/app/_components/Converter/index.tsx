"use client";
import { Dropdown, Input, Button } from "../index";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { convertOptions } from "@/app/_constants";

const Converter = () => {
  const [inputUnit, setInputUnit] = useState({});
  const [targetUnit, setTargetUnit] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    if ("type" in inputUnit && "type" in targetUnit) {
      inputUnit.type !== targetUnit.type ? setResult("invalid") : setResult("");
    }
  }, [targetUnit, inputUnit]);

  const formik = useFormik({
    initialValues: {
      inputNum: "",
      inputUnit: "",
      targetUnit: "",
      studentInput: "",
    },
    onSubmit: () => {
      console.log("submit");
    },
    validateOnBlur: true,
  });

  return (
    <div className="w-full flex flex-row items-start gap-4">
      <Input
        value={formik.values.inputNum}
        onChange={formik.handleChange("inputNum")}
        onBlur={formik.handleBlur("inputNum")}
        width="1/2"
        label="Input Numerical Value"
        // error="error"
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
        // error="error"
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
      />
      <Input
        value={formik.values.studentInput}
        onChange={formik.handleChange("studentInput")}
        onBlur={formik.handleBlur("studentInput")}
        width="1/2"
        label="Student Response"
      />
      <div>Result:{result}</div>
    </div>
  );
};

export default Converter;
