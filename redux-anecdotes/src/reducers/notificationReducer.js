const notificationReducer = (state = null, action) => {
  if (action.type === "NOTIFICATION") {
    return action.notification;
  }
  return state;
};

export const anecdoteMessage = (notification) => {
  console.log(notification);
  return {
    type: "NOTIFICATION",
    notification,
  };
};
export const interval = (time) => {
  return setInterval(() => {
    return {
      type: "NOTIFICATION",
      notification: null,
    };
  }, time);
};
export default notificationReducer;
