import "./notifComponentPopoverContent.css";
import Line from "../ReusableComponents/Line";
import ComponentAvatar from "../ReusableComponents/Avatar";
import ComponentButton from "../ReusableComponents/ComponentButton";
import { clearNotifications } from "../notificationSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

function NotifComponentPopoverContent() {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state: RootState) => state.notifications.notifications
  );
  const notificationCount = useSelector(
    (state: RootState) => state.notifications.notificationCount
  );

  const handleClick = () => {
    dispatch(clearNotifications());
  };

  return (
    <div className="containerPopover">
      <div className="popoverTitle">Notifications</div>
      <Line width="100%" />
      {notifications
        ? notifications.map((data, index) => (
            <div
              key={index}
              className={`containerPopoverItem ${data.check ? "read" : ""}`}
            >
              <div className="containerPopoverContent">
                <div className="popoverAvatar">
                  <ComponentAvatar name={data.prenom} {...data.avatarData} />
                </div>
                <div className="containerPopoverContentText">
                  <div>
                    <span className="popoverTextName">
                      {data.prenom} {data.nom}
                    </span>{" "}
                    {data.text}
                  </div>
                  <div className="popoverDateText">{data.date}</div>
                </div>
              </div>
              <Line width="100%" />
            </div>
          ))
        : ""}
      <div className="popoverFooter">
        <div>{notificationCount} notifications</div>
        <div>
          <ComponentButton
            color="primary"
            text="Tout effacer"
            styles={{
              textTransform: "none",
              borderRadius: "10px",
              background:
                "linear-gradient(90deg, rgba(75,210,202,1) 0%, rgba(54,156,150,1) 70%)",
              height: "37px",
              width: "122px",
            }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default NotifComponentPopoverContent;
