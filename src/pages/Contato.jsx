import { motion } from "framer-motion";
import "./Contato.css";

function Contato() {
  return (
    <section className="contato">

      <motion.div
        className="contato-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contato</h2>

        <p className="contato-sub">
          Atendimento online e presencial.
        </p>

        <div className="contato-info">
          <p><strong>WhatsApp:</strong> (35)9870-5413</p>
          <p><strong>Email:</strong> marialuisagarciia@gmail.com</p>
          <p><strong>CRP:</strong> 04/83962</p>
          <p><strong>Instagram:</strong> psi.marialuisa.garciia </p>

        </div>

        <a
href="https://wa.me/553598705413?text=Olá,%20tudo%20bem?%20😊%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20iniciar%20acompanhamento%20psicológico.%20Poderia%20me%20orientar,%20por%20favor?"          target="_blank"
          rel="noreferrer"
          className="btn-contato"
        >
          Agendar Atendimento
        </a>
      </motion.div>

    </section>
  );
}

export default Contato;



