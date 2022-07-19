import { memo } from "react";
import MyParagraph from "./MyParagraph";

type Props = {
  show: boolean;
};
const DemoOutput = ({ show }: Props) => {
  console.log("demo running");
  return <MyParagraph>{show ? "this is new!" : ""}</MyParagraph>;
};

export default memo(DemoOutput);
