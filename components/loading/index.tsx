import React from "react";
import css from "./loading.module.scss";

const Loading = () => {
  return (
    <div id={css["activity"]}>
      <div className={css["indicator"]}>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
        <div className={css["segment"]}></div>
      </div>
      <span>Loading...</span>
    </div>
  );
};
export default Loading;
