import { useNavigate } from "react-router-dom";
import PlanList from "../components/plans/PlanList";
import Styles from "../styles.module.css"

const PlanPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <PlanList />
      <div className={Styles.btnContainer}>
        <button onClick={() => navigate("/")} className="btn btn--secondary">Go Back</button>
        <button onClick={() => navigate("/confirm")} className="btn btn--primary">Next Step</button>
      </div>
    </div>
  );
};

export default PlanPage;
