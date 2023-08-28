import React, { ReactNode, MouseEvent } from "react";
import { Button } from "@mui/material";
import theme from "../theme";

interface InterfaceComponentButtonProps {
  color?: "primary" | "secondary";
  text: string;
  icon?: ReactNode;
  styles?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ComponentButton({
  color,
  text,
  icon,
  styles,
  type,
  onClick,
}: InterfaceComponentButtonProps) {
  if (color === "primary") {
    return (
      <Button
        variant="contained"
        style={{ backgroundColor: theme.palette.primary.main, ...styles }}
        type={type}
        onClick={onClick}
      >
        {icon}
        {text}
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        style={{ backgroundColor: theme.palette.secondary.main, ...styles }}
        type={type}
        onClick={onClick}
      >
        {icon}
        {text}
      </Button>
    );
  }
}

export default ComponentButton;
