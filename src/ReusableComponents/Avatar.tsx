import React from "react";
import { Avatar } from "@mui/material";
import theme from "../theme";

interface InterfaceComponentAvatar {
  name: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

function ComponentAvatar({ name, onClick }: InterfaceComponentAvatar) {
  return (
    <div onClick={onClick}>
      <Avatar sx={{ backgroundColor: theme.palette.secondary.main }}>
        {name}
      </Avatar>
    </div>
  );
}

export default ComponentAvatar;
