import { useNavigate } from "react-router-dom";
import Confirm from "../components/Confirm";
import { useState } from "react";
import Submitted from "../components/Submitted";
import Styles from "../styles.module.css";

const ConfirmPage = () => {
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {confirm ? (
        <Submitted />
      ) : (
        <div>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <Confirm />
          <div className={Styles.btnContainer}>
            <button
              onClick={() => navigate("/plan")}
              className="btn btn--secondary"
            >
              Go Back
            </button>
            <button
              onClick={() => setConfirm(true)}
              className="btn btn--primary"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPage;
