const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div style={{backgroundColor: '#33B5FF', color: '#FFF'}}>{message}</div>;
};

export default Notification;
