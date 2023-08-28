import React, { useState } from "react";
import { Popover } from "@mui/material";
import NotifComponentPopoverContent from "./NotifComponentPopoverContent";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { openPopover, closePopover } from "../popoverSlice";

interface InterfaceNotifComponent {
  popoverId: number;
}

function NotifComponent({ popoverId }: InterfaceNotifComponent) {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const isPopoverOpen = useSelector(
    (state: RootState) => state.popover[popoverId]
  );
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
    dispatch(openPopover(popoverId));
  };

  const handleClose = () => {
    dispatch(closePopover(popoverId));
  };

  const id = isPopoverOpen ? `popover-${popoverId}` : undefined;
  return (
    <div>
      <svg
        width="32"
        height="27"
        viewBox="0 0 32 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <path
          d="M20.6288 18.9989C20.551 18.9052 20.4746 18.8114 20.3995 18.7209C19.3683 17.4736 18.7444 16.7208 18.7444 13.1897C18.7444 11.3616 18.307 9.86156 17.445 8.73656C16.8094 7.90547 15.9502 7.275 14.8177 6.80906C14.8031 6.80096 14.7901 6.79032 14.7792 6.77766C14.3719 5.41359 13.2572 4.5 12 4.5C10.7428 4.5 9.62861 5.41359 9.22127 6.77625C9.2104 6.78845 9.19756 6.79875 9.1833 6.80672C6.54049 7.89469 5.25611 9.98203 5.25611 13.1883C5.25611 16.7208 4.63314 17.4736 3.60096 18.7195C3.52596 18.81 3.44955 18.9019 3.37174 18.9975C3.17074 19.2399 3.04339 19.5348 3.00476 19.8473C2.96613 20.1598 3.01784 20.4769 3.15377 20.7609C3.44299 21.3703 4.05939 21.7486 4.76299 21.7486H19.2422C19.9425 21.7486 20.5547 21.3708 20.8449 20.7642C20.9814 20.4801 21.0336 20.1628 20.9953 19.8499C20.957 19.537 20.8298 19.2417 20.6288 18.9989ZM12 25.5C12.6774 25.4995 13.342 25.3156 13.9233 24.9679C14.5046 24.6202 14.981 24.1217 15.3019 23.5252C15.317 23.4966 15.3245 23.4646 15.3236 23.4322C15.3227 23.3999 15.3134 23.3684 15.2967 23.3407C15.28 23.313 15.2564 23.2901 15.2283 23.2742C15.2001 23.2583 15.1683 23.25 15.136 23.25H8.86502C8.83264 23.2499 8.80078 23.2582 8.77255 23.274C8.74432 23.2899 8.72067 23.3128 8.70392 23.3405C8.68716 23.3682 8.67787 23.3997 8.67694 23.4321C8.67601 23.4645 8.68347 23.4965 8.69861 23.5252C9.01949 24.1216 9.49579 24.6201 10.077 24.9678C10.6583 25.3155 11.3227 25.4994 12 25.5Z"
          fill="#AFB2B6"
        />
        <rect x="14" width="18" height="18" rx="9" fill="#369C96" />
        <path
          d="M20.33 12V10.9H22.03V6.66H20.33V5.85C20.5767 5.83 20.8467 5.78333 21.14 5.71C21.44 5.63667 21.7433 5.54 22.05 5.42C22.3567 5.3 22.6433 5.17333 22.91 5.04H23.4V10.9H25.07V12H20.33Z"
          fill="white"
        />
      </svg>
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
          <NotifComponentPopoverContent />
        </div>
      </Popover>
    </div>
  );
}

export default NotifComponent;
