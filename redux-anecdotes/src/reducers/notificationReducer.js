const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "NOTIFICATION":
      return action.notification;
    case "REMOVE":
      return action.notification;
    default:
      return state;
  }
};

export const anecdoteMessage = (notification) => {
  return {
    type: "NOTIFICATION",
    notification,
  };
};
export const interval = (notification) => {
  return {
    type: "REMOVE",
    notification,
  };
};

export default notificationReducer;
