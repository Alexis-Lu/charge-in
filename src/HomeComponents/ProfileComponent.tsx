import React, { useState } from "react";
import { Popover } from "@mui/material";
import ProfileComponentPopoverContent from "./ProfileComponentPopoverContent"; // Importez le contenu du popover pour le profil
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { openPopover, closePopover } from "../popoverSlice";
import ComponentAvatar from "../ReusableComponents/Avatar";

interface InterfaceProfileComponent {
  popoverId: number;
}

function ProfileComponent({ popoverId }: InterfaceProfileComponent) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isPopoverOpen = useSelector(
    (state: RootState) => state.popover[popoverId]
  );
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    dispatch(openPopover(popoverId));
  };

  const handleClose = () => {
    dispatch(closePopover(popoverId));
  };

  const id = isPopoverOpen ? `popover-${popoverId}` : undefined;

  return (
    <div>
      <ComponentAvatar name="P" onClick={handleClick} />
      <Popover
        id={id}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <ProfileComponentPopoverContent />
        </div>
      </Popover>
    </div>
  );
}

export default ProfileComponent;
