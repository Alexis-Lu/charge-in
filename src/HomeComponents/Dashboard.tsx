import ComponentActions from "./ComponentActions";
import "./dashboard.css";
import ObjectivesComponent from "./ObjectivesComponent";
import StatisticsComponent from "./StatisticsComponent";

function Dashboard() {
  return (
    <div className="containerDashboard">
      <div className="dashboardTop">
        <svg
          width="26"
          height="34"
          viewBox="0 0 26 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1674 1.32031L1.75 20.375H10.75L8.53445 32.5552C8.53024 32.5791 8.53131 32.6037 8.53761 32.6271C8.5439 32.6505 8.55526 32.6723 8.57088 32.6909C8.5865 32.7094 8.60601 32.7244 8.62802 32.7346C8.65003 32.7448 8.67401 32.7501 8.69828 32.75C8.7241 32.75 8.74956 32.7439 8.77263 32.7323C8.7957 32.7207 8.81575 32.7039 8.83117 32.6832L24.25 13.625H15.25L17.4761 1.44336C17.4791 1.41909 17.4769 1.39446 17.4696 1.37111C17.4624 1.34776 17.4502 1.32623 17.434 1.30793C17.4178 1.28964 17.3978 1.27502 17.3755 1.26503C17.3532 1.25504 17.329 1.24992 17.3045 1.25C17.2778 1.25011 17.2514 1.25653 17.2276 1.26875C17.2037 1.28097 17.1831 1.29863 17.1674 1.32031Z"
            stroke="#369C96"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="dashboardTitle">Tableau de bord</span>
      </div>
      <div className="containerObjectivesMain">
        <ObjectivesComponent />
      </div>
      <div>
        <StatisticsComponent />
      </div>

      <div>
        <ComponentActions />
      </div>
    </div>
  );
}

export default Dashboard;
