import { motion } from "framer-motion";
import "./Home.css";
import psicologaImg from "../assets/psicologa.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* TEXTO */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">
            Psicóloga | Especialista em Terapia Cognitivo-Comportamental
          </span>

          <h1>
            Clareza emocional.<br />
            Equilíbrio mental.<br />
            Transformação consistente.
          </h1>

          <p>
            Atendimento clínico baseado em evidências científicas,
            com foco em saúde emocional e desenvolvimento pessoal.
          </p>

          <a
            href="https://wa.me/553598705413?text=Olá,%20tudo%20bem?%20😊%20Gostaria%20de%20conversar%20sobre%20a%20possibilidade%20de%20iniciar%20acompanhamento%20psicológico.%20Poderia%20me%20orientar,%20por%20favor?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            Agendar Consulta
          </a>
        </motion.div>

    
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={psicologaImg}
            alt="Psicóloga em atendimento clínico"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Home;






