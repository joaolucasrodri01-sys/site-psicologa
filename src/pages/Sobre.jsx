import { motion } from "framer-motion";
import "./Sobre.css";

function Sobre() {
  return (
    <section className="sobre">

      <div className="sobre-container">

        <motion.div
          className="sobre-imagem"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="src/assets/psicologa.jpeg" />
        </motion.div>

    
        <motion.div
          className="sobre-conteudo"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Sobre Mim</h2>

          <p>
            Sou psicóloga clínica com atuação fundamentada na Terapia
            Cognitivo-Comportamental, oferecendo atendimento estruturado,
            ético e baseado em evidências científicas.
          </p>

          <p>
            Atualmente sou <strong>pós-graduanda em Psicologia Baseada em
            Evidências (PBE) e Psicologia Clínica</strong>, aprofundando minha
            prática com foco técnico, científico e humanizado.
          </p>

          <p>
            Possuo formação complementar em <strong>Avaliação Psicológica</strong> e
            <strong> Psicologia Organizacional</strong>, ampliando minha
            compreensão sobre comportamento humano em diferentes contextos.
          </p>

          {/* BLOCO DE FORMAÇÃO */}
          <div className="formacao-box">
            <h3>Formação e Especializações</h3>
            <ul>
              <li>Pós-graduação em Psicologia Baseada em Evidências (PBE)</li>
              <li>Pós-graduação em Psicologia Clínica</li>
              <li>Formação em Avaliação Psicológica</li>
              <li>Formação em Psicologia Organizacional</li>
            </ul>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Sobre;



