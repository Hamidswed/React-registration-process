import Styles from "./styles.module.css";

const Aside = () => {
  const steps = [
    {
      id: 1,
      step: "step1",
      title: "your info",
    },
    {
      id: 2,
      step: "step2",
      title: "select plan",
    },
    {
      id: 3,
      step: "step3",
      title: "confirm",
    },
  ];
  return (
    <div className={Styles.container}>
      {steps.map((item) => {
        return (
          <div key={item.id} className={Styles.steps}>
            <div className={Styles.stepId}>{item.id}</div>
            <div>
              <p>{item.step.toUpperCase()}</p>
              <h3>{item.title.toUpperCase()}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Aside;
