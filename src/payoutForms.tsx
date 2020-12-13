import { h } from "preact";
import { useState } from "preact/hooks";
import { Button } from "./components/Button";
import { Datepicker } from "./components/Datepicker";
import "./style.css";

type PayoutForms = {
  title?: string;
  description?: string;
};

const templateLink = "https://www.aviasales.ru/search/MOW$depatureHKT#return1";

const getDate = (date: Date) => {
  return date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
};
const getMonth = (date: Date) => {
  return date.getMonth() + 1 < 10
    ? `0${date.getMonth() + 1}`
    : date.getMonth() + 1;
};

const generateLink = (depatureDate: Date | null, returnDate: Date | null) => {
  const depatureDateString = depatureDate
    ? `${getDate(depatureDate)}${getMonth(depatureDate)}`
    : "";
  const returnDateString = returnDate
    ? `${getDate(returnDate)}${getMonth(returnDate)}`
    : "";

  return templateLink
    .replace("$depature", depatureDateString)
    .replace("#return", `${returnDateString}`);
};

export const PayoutForms = ({ title, description }: PayoutForms) => {
  const [depatureDate, setDepatureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const link = generateLink(depatureDate, returnDate);
  return (
    <div className="container">
      <div className="title">
        {title ? title : "Where does it come from? Why do we use it?"}
      </div>
      <div className="description">
        {description
          ? description
          : `It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.`}
      </div>
      <div className="form">
        <Datepicker
          selectedDate={depatureDate}
          onChange={(date: any) => setDepatureDate(date)}
          placeholder="Depart date"
          endDate={returnDate}
        />
        <Datepicker
          selectedDate={returnDate}
          onChange={(date: any) => setReturnDate(date)}
          placeholder="Return date"
          startDate={depatureDate}
        />
        <Button link={link} />
      </div>
    </div>
  );
};
