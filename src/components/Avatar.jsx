import React from "react";
import createClasses from "../utils/create-classes";

export default function Avatar({ src, className = "h-10 w-10" }) {
  const defaultClass = "rounded-full";
  const classes = createClasses(defaultClass, className);
  return <img src={src} alt="user" className={classes}></img>;
}
