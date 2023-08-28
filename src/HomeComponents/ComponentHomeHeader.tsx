import { ReactNode } from "react";
import "./componentHomeHeader.css";
import theme from "../theme";
import NotifComponent from "./NotifComponent";
import ProfileComponent from "./ProfileComponent";

interface InterfaceComponentHomeHeader {
  prenom: string;
  nom: string;
  notif: boolean;
  avatar: ReactNode;
}

function ComponentHomeHeader({
  prenom,
  nom,
  notif,
}: InterfaceComponentHomeHeader) {
  return (
    <div className="componentHeader">
      <div className="componentHeaderItems">
        Bonjour,
        <span
          className="componentHeaderText"
          style={{ color: theme.palette.primary.main }}
        >
          {prenom} {nom}
        </span>
      </div>
      <div className="componentHeaderItems">
        {notif}
        <NotifComponent popoverId={1} />
      </div>
      <div className="componentHeaderItems">
        <ProfileComponent popoverId={2} />
      </div>
    </div>
  );
}

export default ComponentHomeHeader;
