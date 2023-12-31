import "./profileComponentPopoverContent.css";
import ComponentAvatar from "../ReusableComponents/Avatar";
import Line from "../ReusableComponents/Line";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ComponentButton from "../ReusableComponents/ComponentButton";

function ProfileComponentPopoverContent() {
  return (
    <div className="containerProfilePopover">
      <div className="popoverTitle">Profil</div>
      <div className="containerInfos">
        <div className="containerPopoverItem">
          <ComponentAvatar name="P" />
        </div>
        <div>
          <div className="popoverName">Prénom Nom</div>
          <div className="popoverMail">prénom.nom@gmail.com</div>
        </div>
      </div>
      <Line width="100%" />
      <div>
        <div className="containerInfos">
          <div className="containerPopoverItem">
            {" "}
            <PersonOutlineOutlinedIcon />
          </div>
          <div> Informations personelles</div>
        </div>
        <div className="containerInfos">
          <div className="containerPopoverItem">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51953 6.53008C8.51953 7.03789 8.51953 7.53008 8.67969 7.99102C6.99609 9.96758 2.55078 15.1902 2.13672 15.5887C2.05442 15.6625 1.98859 15.7528 1.9435 15.8538C1.89841 15.9547 1.87507 16.064 1.875 16.1746C1.875 16.5066 2.07812 16.827 2.25 17.0066C2.50781 17.2762 3.60937 18.2957 3.8125 18.1004C4.41406 17.5145 4.53516 17.3582 4.78125 17.116C5.15234 16.7527 4.74219 16.0105 4.87109 15.7098C5 15.409 5.13672 15.3504 5.35937 15.3035C5.58203 15.2566 5.97656 15.4168 6.28516 15.4207C6.60937 15.4246 6.78516 15.2879 7.02734 15.0613C7.22266 14.8816 7.36328 14.7137 7.36719 14.452C7.375 14.1004 6.86719 13.6355 7.24609 13.2645C7.625 12.8934 8.17187 13.5066 8.57422 13.4598C8.97656 13.4129 9.46484 12.8543 9.51563 12.616C9.56641 12.3777 9.05859 11.7645 9.13672 11.4168C9.16406 11.2996 9.40234 11.0262 9.58203 10.9871C9.76172 10.948 10.5586 11.2566 10.7383 11.2176C10.957 11.1707 11.2109 10.9402 11.418 10.8113C12.0234 11.073 12.5742 11.1785 13.2812 11.1785C15.957 11.1785 18.125 9.09258 18.125 6.52227C18.125 3.95195 15.957 1.875 13.2812 1.875C10.6055 1.875 8.51953 3.95977 8.51953 6.53008ZM15.625 5.625C15.625 5.87223 15.5517 6.1139 15.4143 6.31946C15.277 6.52502 15.0818 6.68524 14.8534 6.77985C14.6249 6.87446 14.3736 6.89921 14.1311 6.85098C13.8887 6.80275 13.6659 6.6837 13.4911 6.50888C13.3163 6.33407 13.1972 6.11134 13.149 5.86886C13.1008 5.62639 13.1255 5.37505 13.2202 5.14665C13.3148 4.91824 13.475 4.72301 13.6805 4.58566C13.8861 4.44831 14.1278 4.375 14.375 4.375C14.7065 4.375 15.0245 4.5067 15.2589 4.74112C15.4933 4.97554 15.625 5.29348 15.625 5.625Z"
                stroke="black"
                stroke-width="1.25"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div> Changer mon mot de passe</div>
        </div>
      </div>
      <Line width="100%" />
      <div className="containerButton">
        <ComponentButton
          color="primary"
          text="Déconnexion"
          styles={{
            textTransform: "none",
            borderRadius: "10px",
            background:
              "linear-gradient(90deg, rgba(75,210,202,1) 0%, rgba(54,156,150,1) 70%)",
            height: "37px",
            width: "157px",
          }}
          icon={<LogoutOutlinedIcon style={{ color: "white" }} />}
        />
      </div>
    </div>
  );
}

export default ProfileComponentPopoverContent;
