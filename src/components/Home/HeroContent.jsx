import React from "react";
import InputField from "../Ui/InputField";
import SelectField from "../Ui/SelectField";
import CheckBox from "../Ui/CheckBox";
import Radio from "../Ui/Radio";

const HeroContent = () => {
  const date = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];
  const schedule = [
    {
      value: "anytime",
      label: "Anytime",
    },
    {
      value: "morning",
      label: "Morning",
    },
    {
      value: "afternoon",
      label: "Afternoon",
    },
    {
      value: "night",
      label: "Night",
    },
  ];
  const flight = [
    {
      value: "adt",
      label: "Adult",
    },
    {
      value: "chd",
      label: "Child",
    },
    {
      value: "inf",
      label: "Infant",
    },
  ];
  return (
    <header className="md:w-10/12 w-11/12 mx-auto mt-10">
      <nav className="flex items-center justify-center">
        <button className="border-primary px-4 py-1 border-2">
          Round Trip
        </button>
        <button className="border-primary bg-primary text-white px-4 py-1 border-2">
          One Way
        </button>
        <button className="border-primary px-4 py-1 border-2">
          Multi City
        </button>
      </nav>
      <hr className="border-t-[1px] mt-6 border-primary" />
      <section>
        <div className="flex gap-4 mt-4 items-center flex-wrap">
          <InputField type="text" placeholder="Departure" />
          <InputField type="text" placeholder="Destination" />
          <InputField type="date" placeholder="Departure Date" />
          <SelectField name="Date -" options={date} />
          <SelectField name="Date +" options={date} />
          <SelectField name="Any time" options={schedule} />
          <h1 className="text-xl font-bold">+</h1>
          <SelectField name="Adults" options={flight} />
          <SelectField name="Children" options={date} />
          <h1 className="text-xl font-bold">+</h1>
        </div>
      </section>
      <hr className="border-t-[1px] mt-4 border-primary" />
      <section className="mt-4 flex items-center justify-between flex-wrap">
        <CheckBox label="Extra Options" />
        <div className="flex items-center gap-3">
          <Radio label="Environment" />
          <Radio label="Dummy" />
          <Radio label="PDT" />
        </div>
        <button className="px-7 py-2 bg-primary text-white rounded-lg mt-2 md:mt-0">
          Search
        </button>
      </section>
      <hr className="border-t-[1px] mt-4 border-primary" />
    </header>
  );
};

export default HeroContent;
