import { useNavigate } from "react-router-dom";
import PlanList from "../components/plans/PlanList";

const PlanPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <PlanList />
      <div>
        <button onClick={() => navigate("/")}>Go Back</button>
        <button onClick={() => navigate("/confirm")}>Next Step</button>
      </div>
    </div>
  );
};

export default PlanPage;
