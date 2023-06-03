import { useDispatch } from "react-redux";
import { PlanType } from "../../types/planType";
import Plan from "./plan.module.css";
import { userActions } from "../../redux/slice/user";

type PropType = {
  plan: PlanType;
};
const PlanItem = ({ plan }: PropType) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const planInfo = {
      title: plan.title,
      price: plan.price,
      timeFrame: plan.timeFrame,
    };
    dispatch(userActions.getPlanInfo(planInfo));
  };

  return (
    <div className={Plan.itemContainer} onClick={onClickHandler}>
      <div className={Plan.image}>
        <img src={plan.img} alt={plan.title} />
      </div>
      <h2>{plan.title}</h2>
      <p>
        {plan.price}/{plan.timeFrame ? "yr" : "mo"}
      </p>
    </div>
  );
};

export default PlanItem;
