import { h } from "preact";
import "./style.css";

type ButtonType = {
  link: string;
};

export const Button = ({ link }: ButtonType) => {
  const onClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button onClick={onClick} className="button">
      SEARCH
    </button>
  );
};
