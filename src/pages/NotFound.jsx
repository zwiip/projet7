import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="notfound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <link>Retourner sur la page d'accueil</link>
    </div>
  );
}

export default NotFound