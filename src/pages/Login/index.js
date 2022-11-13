import "./login.css";
import { Logo } from "../../components/Logo";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../services/firebaseConection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Bem vindo de volta :)");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Erro ao tentar fazer login!");
      });
  }

  return (
    <div className="login-container">
      <Logo />

      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite aqui o seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="***********"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}
