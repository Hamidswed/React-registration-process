import { Route, Routes } from "react-router-dom";
import Styles from "./styles.module.css";
import Aside from "./components/Aside";
import PlanPage from "./pages/PlanPage";
import ConfirmPage from "./pages/ConfirmPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className={Styles.container}>
      <div className={Styles.aside}>
        <Aside />
      </div>
      <div className={Styles.pages}>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
