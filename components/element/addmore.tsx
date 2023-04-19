import React from "react";
import css from "styles/admin.module.scss";
import { ButtonProps } from "@/typings/ui";
import AddIcon from "@/icons/AddIcon";

const AddMoreButton = (props: ButtonProps) => {
  return (
    <div className={css.addMore}>
      <button type="button" {...props}>
        <AddIcon fill="#fff" height={18} width={18} /> {props.title}
      </button>
    </div>
  );
};
export default AddMoreButton;
