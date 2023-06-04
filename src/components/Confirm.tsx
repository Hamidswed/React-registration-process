import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Styles from "./styles.module.css"

const Confirm = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h3>
        Dear {user.personalInfo.firstName.toUpperCase()} please check and
        confrim!
      </h3>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time frame</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.planInfo.title}</td>
            <td>{user.planInfo.timeFrame?"Yearly":"Monthly"}</td>
            <td>${user.planInfo.price}</td>
          </tr>
        </tbody>
        <tfoot>
          <th colSpan={2}>Total price</th>
          <th>${user.planInfo.price}</th>
        </tfoot>
      </table>
    </div>
  );
};

export default Confirm;
