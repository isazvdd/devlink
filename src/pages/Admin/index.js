import "./admin.css";

import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export default function Admin() {
  return (
    <div className="admin-container">
      <Header />

      <Logo />

      <form className="form">
        <label className="label">Nome do link</label>
        <Input placeholder="Nome do link" />

        <label className="label">URL do link</label>
        <Input type="url" placeholder="Digite a URL do link" />

        <section className="container-colors">
          <div>
            <label className="label right">Fundo do link</label>
            <input type="color" />
          </div>

          <div>
            <label className="label right">Cor do link</label>
            <input type="color" />
          </div>
        </section>

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF " />
        </button>
      </form>

      <h2 className="title">Meus links</h2>

      <article
        className="list animate-pop"
        style={{ backgroundColor: "#000", color: "#FFF" }}
      >
        <p>Grupo exlusivo no Telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color="#FFF" />
          </button>
        </div>
      </article>
    </div>
  );
}