import { useState, ReactNode } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface InterfaceComponentButtonDrop {
  icon: ReactNode;
  text: string;
  isActive: boolean;
  onClick?: () => void;
  expandIcon: ReactNode;
}

function DropdownButton({
  icon,
  text,
  isActive,
  onClick,
  expandIcon,
}: InterfaceComponentButtonDrop) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "100%" }}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        onClick={handleButtonClick}
        sx={{ boxShadow: 0, width: "100%" }}
      >
        <Button
          style={{
            color: "white",
            textTransform: "none",
            width: "100%",
            backgroundColor: isActive ? "#05263b" : "transparent",
            padding: "6px 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
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
            <div>{expandIcon}</div>
          </div>
        </Button>
      </ButtonGroup>
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(5 38 59 0.1)",
            borderRadius: "10px",
          }}
        >
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#4BD2CA",
            }}
            variant="text"
            onClick={onClick}
          >
            En cours
          </Button>
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#6A93AC",
            }}
            variant="text"
            onClick={onClick}
          >
            Archivés
          </Button>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
