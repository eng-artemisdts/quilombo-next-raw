import React from "react";
import Select, { Props as SelectProps, StylesConfig } from "react-select";
import { Control, useController, UseControllerProps } from "react-hook-form";

type Option = { value: string; label: string };

interface CustomSelectProps extends Omit<UseControllerProps, "defaultValue"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  options: Option[];
  placeholder?: string;
  isMulti?: boolean;
  className?: string;
  defaultValue?: Option | Option[];
  selectProps?: Partial<SelectProps<Option, boolean>>;
}

const customStyles: StylesConfig<Option, boolean> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    border: "none",
    boxShadow: "none",
    borderRadius: "9999px",
    padding: "2px 8px",
    minHeight: "auto",
    "&:hover": { border: "none" },
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
    opacity: 1,
    marginLeft: 0,
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    margin: 0,
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    margin: 0,
    padding: 0,
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: "8px",
    marginTop: "4px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "rgba(255,255,255,0.2)" : "transparent",
    color: "white",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "white",
    padding: "8px",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "white",
    padding: "8px",
  }),
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  control,
  name,
  options,
  placeholder = "",
  isMulti = false,
  className = "",
  defaultValue,
  selectProps = {},
  rules,
}) => {
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <div className={`w-full ${className}`}>
      <Select<Option, typeof isMulti>
        {...field}
        ref={ref}
        options={options}
        isMulti={isMulti}
        placeholder={placeholder}
        styles={customStyles}
        classNamePrefix="custom-select"
        {...selectProps}
      />
      {error && <p className="mt-1 text-sm text-red-rgba">{error.message}</p>}
    </div>
  );
};

export default CustomSelect;
