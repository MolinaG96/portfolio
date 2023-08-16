import React from "react";
import Sign from "../commons/sign";

export const Container = ({ visible, children }) => {
  return <div className={visible ? "father" : "father-exit"}>{children}</div>;
};
