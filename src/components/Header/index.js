import "./header.css";

import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebaseConection";
import { signOut } from "firebase/auth";

export function Header() {
  async function handleLogOut() {
    await signOut(auth);
  }

  return (
    <header className="admin-header">
      <nav className="nav-header">
        <button onClick={handleLogOut}>
          <BiLogOut size={28} color="#DB2629" />
        </button>

        <Link to="/admin">Links</Link>
        <Link to="/admin/social">Redes Sociais</Link>
      </nav>
    </header>
  );
}
