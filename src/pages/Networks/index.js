import { useState, useEffect } from "react";
import "./networks.css";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Networks() {
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setWhatsapp(snapshot.data().whatsapp);
          setInstagram(snapshot.data().instagram);
          setGithub(snapshot.data().github);
          setLinkedin(snapshot.data().linkedin);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      whatsapp: whatsapp,
      instagram: instagram,
      github: github,
      linkedin: linkedin,
    })
      .then(() => {
        toast.success("Links salvos com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro ao salvar os links. Tente novamente!");
      });
  }

  return (
    <div className="admin-container">
      <Header />

      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label"> Link do WhatsApp</label>
        <Input
          placeholder="Digite aqui a url do WhatsApp..."
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <label className="label"> Link do Instagram</label>
        <Input
          placeholder="Digite aqui a url do Instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="label"> Link do GitHub</label>
        <Input
          placeholder="Digite aqui a url do GitHub..."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <label className="label"> Link do LinkedIn</label>
        <Input
          placeholder="Digite aqui a url do LinkedIn..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar links <MdAddLink size={24} color="#ffffff" />
        </button>
      </form>
    </div>
  );
}
