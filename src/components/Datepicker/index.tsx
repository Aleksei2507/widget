import { h } from "preact";
import DatePicker from "react-datepicker";
import { Input } from "../Input";
import "react-datepicker/dist/react-datepicker.css";

type DatepickerType = {
  selectedDate: Date | null;
  placeholder?: string;
  onChange: (
    date: Date | [Date, Date] | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => void;
  startDate?: Date | null;
  endDate?: Date | null;
};

export const Datepicker = ({
  selectedDate,
  placeholder,
  onChange,
  startDate,
  endDate,
}: DatepickerType) => (
  <DatePicker
    startDate={startDate}
    endDate={endDate}
    minDate={startDate}
    selected={selectedDate}
    dateFormat="dd.MM.yyyy"
    onChange={onChange}
    placeholderText={placeholder}
    customInput={<Input />}
    portalId="datepicker-portal"
  />
);
