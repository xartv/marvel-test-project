import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import ErrorMessage from "../errorMessage/ErrorMessage";

const NoMatch = () => {
  return (
    <div>
      <Helmet>
        <title>Ooops...look at this error!</title>
        <meta name="description" content="Error page" />
      </Helmet>
      <ErrorMessage />
      <p
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
      ></p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
          textDecoration: "underline",
        }}
        to="/marvel-test-project"
      >
        Click here to back to main page
      </Link>
    </div>
  );
};

export default NoMatch;
