import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="notfound">
      <h1>Erreur 404</h1>
      <p>La page que vous demandez n'existe pas.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}