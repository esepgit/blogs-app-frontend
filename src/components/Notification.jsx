const Notification = ({ message }) => {
  const notificationStyle = {
    backgroundColor: '#33B5FF',
    color: '#FFF',
    padding: 2,
    margin: 5
  }
  if (message === null) {
    return null;
  }

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
