import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const MyParagraph = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default MyParagraph;
