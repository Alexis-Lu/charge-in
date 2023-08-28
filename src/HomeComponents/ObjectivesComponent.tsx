import "./objectivesComponent.css";
import ComponentButton from "../ReusableComponents/ComponentButton";
import theme from "../theme";
import ProgressCircle from "./ProgressCircle";

function ObjectivesComponent() {
  return (
    <div className="containerObjectives">
      <div className="containerObjectivesItem">
        <div className="containerTop">
          <div className="topTitle">
            Objectifs de{" "}
            <span style={{ color: theme.palette.primary.main }}>Charge-in</span>
          </div>
          <div>
            <ComponentButton
              color="primary"
              text="1er trimestre"
              styles={{
                textTransform: "none",
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, rgba(75,210,202,1) 0%, rgba(54,156,150,1) 70%)",
                height: "34px",
                width: "143px",
              }}
            />
          </div>
          <div>
            <ComponentButton
              color="primary"
              text="2ème trimestre"
              styles={{
                textTransform: "none",
                borderRadius: "10px",
                background: "#0c354f",
                height: "34px",
                width: "143px",
                color: "#6A93AC",
              }}
            />
          </div>
          <div>
            <ComponentButton
              color="primary"
              text="3ème trimestre"
              styles={{
                textTransform: "none",
                borderRadius: "10px",
                background: "#0c354f",
                height: "34px",
                width: "143px",
                color: "#6A93AC",
              }}
            />
          </div>
          <div>
            <ComponentButton
              color="primary"
              text="année 2023"
              styles={{
                textTransform: "none",
                borderRadius: "10px",
                background: "#0c354f",
                height: "34px",
                width: "143px",
                color: "#6A93AC",
              }}
            />
          </div>
        </div>
        <div className="containerBottom">
          <div>
            <div className="objectivesTitle">50 partenaires</div>
            <div className="objectivesStatus">En cours</div>
          </div>
          <div>
            <ProgressCircle value={76} />
          </div>
          <div>
            <div className="objectivesTitle">100 installateurs</div>
            <div className="objectivesStatus">En cours</div>
          </div>
          <div>
            <ProgressCircle value={45} />
          </div>
          <div>
            <div className="objectivesTitle">200 installations</div>
            <div className="objectivesStatus">Complété</div>
          </div>
          <div>
            <ProgressCircle value={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ObjectivesComponent;
