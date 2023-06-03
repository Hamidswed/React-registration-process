import { useNavigate } from "react-router-dom";
import Confirm from "../components/Confirm";
import { useState } from "react";

const ConfirmPage = () => {
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {confirm ? (
        <div>Thanks</div>
      ) : (
        <div>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <Confirm />
          <div>
            <button onClick={() => navigate("/plan")}>Go Back</button>
            <button onClick={() => setConfirm(true)}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPage;
