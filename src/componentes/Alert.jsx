const Alert = ({ color, children }) => {
  return (
    <div className={`alert alert-${color} my-3`}
    >{children}</div>
  );


};

export default Alert;