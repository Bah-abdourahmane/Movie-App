import React from "react";

export const Message = ({ label, placeholder }) => {
  return (
    <div className="text-sm w-full">
      <label className="font-semibold text-border">{label}</label>
      <textarea
        className="w-full h-40 mt-2 p-6 border bg-main resize-none border-border rounded"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const Select = ({ label, options, onChange }) => {
  return (
    <div>
      <label className="text-border font-semibold block">{label}</label>
      <select
        className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded"
        onChange={onChange}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};
export const Input = ({ label, placeholder, type, bg }) => {
  return (
    <div className="w-full">
      <label className="text-border font-semibold block">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className={`w-full mt-2 p-4 text-sm text-white rounded border border-border ${
          bg ? "bg-main" : "bg-dry"
        }`}
      />
    </div>
  );
};
