import React, { Fragment } from "react";
import { useState } from "react";
import { CategoriesData, RatesData, TimesData, YearData } from "../data";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: times,
      onChange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];

  return (
    <div className="my-6 bg-dry border border-gray-800 rounded p-6  text-dryGray grid grid-cols-2 gap-2 lg:gap-12 md:grid-cols-4 ">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button
              className={
                "relative w-full py-4 pl-6 pr-10 text-sm text-left bg-main text-white rounded-lg shadow-sm border border-gray-800"
              }
            >
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute right-0 flex items-center pointer-events-none pr-2 inset-y-0">
                <FaAngleDown />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-md bg-white border border-gray-800 text-dryGray  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {item.items.map((item,index) => (
                  <Listbox.Option
                    key={index}
                    value={item}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="text-lg" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
