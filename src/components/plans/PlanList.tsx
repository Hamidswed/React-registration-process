import { PlanType } from "../../types/planType";
import PlanItem from "./PlanItem";
import plan1 from "../../assets/images/platinum.svg";
import plan2 from "../../assets/images/gold.svg";
import plan3 from "../../assets/images/silver.svg";
import Plan from "./plan.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { userActions } from "../../redux/slice/user";

const PlanList = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const plans: PlanType[] = [
    {
      title: "Platinum",
      price: user.planInfo.timeFrame ? 190 : 19,
      timeFrame: user.planInfo.timeFrame,
      img: plan1,
    },
    {
      title: "Gold",
      price: user.planInfo.timeFrame ? 140 : 14,
      timeFrame: user.planInfo.timeFrame,
      img: plan2,
    },
    {
      title: "Silver",
      price: user.planInfo.timeFrame ? 80 : 8,
      timeFrame: user.planInfo.timeFrame,
      img: plan3,
    },
  ];

  return (
    <div>
      <div className={Plan.container}>
        {plans.map((item, index) => {
          return <PlanItem key={index + 1} plan={item} />;
        })}
      </div>
      {user.planInfo.title !== "" ? (
        <p className={Plan.message}>
          <strong>{user.planInfo.title}</strong> is selected!
        </p>
      ) : null}

      <form className={Plan.form}>
        <label>
          <input
            type="radio"
            id="monthly"
            name="time_frame"
            value="Monthly"
            checked={!user.planInfo.timeFrame}
            onChange={() => dispatch(userActions.getTimeFram(false))}
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            id="yearly"
            name="time_frame"
            value="Yearly"
            checked={user.planInfo.timeFrame}
            onChange={() => dispatch(userActions.getTimeFram(true))}
          />
          Yearly
        </label>
      </form>
    </div>
  );
};

export default PlanList;
