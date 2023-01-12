import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{ width: 200, display: "block", margin: "20px auto 0 auto" }}
      src={img}
      alt="error"
    />
  );
};

export default ErrorMessage;
