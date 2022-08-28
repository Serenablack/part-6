import { useSelector } from "react-redux";
// import { anecdoteMessage } from "../reducers/notificationReducer";
const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return notification === null ? (
    <div></div>
  ) : (
    <div style={style}>{notification}</div>
  );
};

export default Notification;
