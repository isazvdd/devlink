export default function App() {
  return (
    <div>
      <h1>Meu Primeiro Projeto</h1>
      <br />

      <Aluno nome="Isadora Azevedo" />
    </div>
  );
}

function Aluno({ nome }) {
  return (
    <div>
      <h2>Bem-vinda {nome}</h2>
    </div>
  );
}
