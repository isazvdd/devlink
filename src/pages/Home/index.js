import "./home.css";

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
      </main>
    </div>
  );
}
