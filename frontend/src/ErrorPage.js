import React from "react";
import { useRouteError } from "react-router-dom";
import './components/about/style2.css'

export default function ErrorPage() {

  //react hook use to access route-realted errors
  const error = useRouteError();
  console.error(error);

  // Check if error is null or undefined
  if (!error) {
    return (
      <div className="error_page">

        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }

  // Check if error has statusText or message property
  const errorMessage = error.statusText || error.message || "An unexpected error has occurred.";

  return (
    <div className="error_page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p><i>{errorMessage}</i></p>
    </div>
  );
}
