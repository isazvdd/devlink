import "./home.css";
import { Social } from "../../components/Social";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Isadora Azevedo</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="http://localhost:3000/isadora">
            <p className="link-text">Canal no Youtube</p>
          </a>
        </section>

        <section className="link-area">
          <a href="http://localhost:3000/isadora">
            <p className="link-text">Grupo privado no Telegram</p>
          </a>
        </section>

        <section className="link-area">
          <a href="http://localhost:3000/isadora">
            <p className="link-text">Instagram</p>
          </a>
        </section>

        <footer>
          <Social url="https://wa.me/5584999919960">
            <FaWhatsapp size={35} color="#FFF" />
          </Social>

          <Social url="https://instagram.com/luanazvdd">
            <FaInstagram size={35} color="#FFF" />
          </Social>

          <Social url="https://github.com/isazvdd">
            <FaGithub size={35} color="#FFF" />
          </Social>

          <Social url="https://www.linkedin.com/in/isazvdd/">
            <FaLinkedinIn size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
