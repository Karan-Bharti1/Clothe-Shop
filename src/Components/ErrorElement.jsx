import { useRouteError } from "react-router-dom";
import {NavLink} from "react-router-dom"

const ErrorElement = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-title">Oops! Something went wrong</h1>

        <p className="error-message">
          {err?.statusText || err?.message || "Unexpected error occurred"}
        </p>

        <p className="error-code">
          Status: {err?.status || "Unknown"}
        </p>

       <NavLink className="err-btn" to="/">Back To Home Page</NavLink>
      </div>
    </div>
  );
};

export default ErrorElement;