import React, { ReactNode } from "react";

import "./CourseGoalItem.css";

type Props = {
  id: string;
  onDelete: (id: string) => void;
  children: ReactNode;
};
const CourseGoalItem = ({ id, onDelete, children }: Props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
