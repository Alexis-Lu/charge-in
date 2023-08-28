import ComponentButton from "../ReusableComponents/ComponentButton";
import ComponentTable from "../ReusableComponents/ComponentTable";
import "./componentHouse.css";

function ComponentHouse() {
  return (
    <div className="containerHouse">
      <div className="containerHouseTop">
        <div className="containerHouseTopLeft">
          <div className="containerHouseTopLeftItems">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 14.9062V31.5C5.625 31.7984 5.74353 32.0845 5.95451 32.2955C6.16548 32.5065 6.45163 32.625 6.75 32.625H13.5V23.0625C13.5 22.6149 13.6778 22.1857 13.9943 21.8693C14.3107 21.5528 14.7399 21.375 15.1875 21.375H20.8125C21.2601 21.375 21.6893 21.5528 22.0057 21.8693C22.3222 22.1857 22.5 22.6149 22.5 23.0625V32.625H29.25C29.5484 32.625 29.8345 32.5065 30.0455 32.2955C30.2565 32.0845 30.375 31.7984 30.375 31.5V14.9062"
                stroke="#369C96"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.75 18.0002L18.7657 3.65649C18.4141 3.28524 17.5922 3.28102 17.2343 3.65649L2.25 18.0002M28.125 12.5862V4.50024H24.75V9.3518"
                stroke="#369C96"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="houseTitle containerHouseTopLeftItems">Maisons</div>
        </div>
        <div className="containerHouseTopRight">
          <div className="containerHouseTopRightItems">
            <ComponentButton
              text="Ajouter un utilisateur"
              styles={{
                backgroundColor: "#369C96",
                textTransform: "none",
                width: "195px",
              }}
            />
          </div>
          <div className="containerHouseTopRightItems">
            <ComponentButton
              text="Supprimer un utilisateur"
              styles={{
                backgroundColor: "#A94442",
                textTransform: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="containerTable">
        <ComponentTable />
      </div>
    </div>
  );
}

export default ComponentHouse;
