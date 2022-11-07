import "./error.css";

import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";

export default function Error() {
  return (
    <div className="error">
      <Logo />
      <h1>Página não encontrada!</h1>
      <p>Esta página que você está procurando não existe.</p>

      <Link to="/" className="link">
        Voltar para o início
      </Link>
    </div>
  );
}
