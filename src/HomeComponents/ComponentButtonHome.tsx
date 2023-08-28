import { ReactNode } from "react";
import { Button } from "@mui/material";

interface ComponentButtonHome {
  icon: ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

function ComponentButtonHome({
  icon,
  text,
  isActive,
  onClick,
}: ComponentButtonHome) {
  return (
    <Button
      style={{
        color: "white",
        textTransform: "none",
        width: "100%",
        backgroundColor: isActive ? "#05263b" : "",
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ marginRight: "10px", height: "100%" }}>{icon}</div>
        <div>{text}</div>
      </div>
    </Button>
  );
}

export default ComponentButtonHome;
