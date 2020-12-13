import { render, h } from "preact";
import { PayoutForms } from "./payoutForms";

type ConfigType = {
  btnColor?: string;
  backgoundColor?: string;
  title?: string;
  description?: string;
  selector: string;
};

const checkOrCreateElement = (selector: string) => {
  let haveElement = document.querySelector(selector);
  if (!haveElement) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(selector);
    haveElement = newDiv;
    document.body.append(newDiv);
  }

  return haveElement;
};

const Widget = (config: ConfigType) => {
  if (!config.selector) {
    alert("Widget: Selector is required param!");
    return false;
  }

  const documentStyles = document.documentElement.style;

  if (config.btnColor) {
    documentStyles.setProperty("--btnColor", config.btnColor);
  }

  if (config.backgoundColor) {
    documentStyles.setProperty("--backgoundColor", config.backgoundColor);
  }

  render(
    <PayoutForms title={config.title} description={config.description} />,
    checkOrCreateElement(config.selector)
  );
};

export default Widget;
