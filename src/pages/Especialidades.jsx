import { motion } from "framer-motion"
import { 
  Brain, 
  HeartHandshake, 
  Sparkles, 
  Frown, 
  Users, 
  Flame, 
  Compass, 
  ShieldCheck 
} from "lucide-react"
import "./Especialidades.css"

function Especialidades() {
  return (
    <div className="especialidades-page">
      <motion.h1
        className="titulo"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Áreas de Atuação
      </motion.h1>

      <div className="cards-grid">

        <Card
          icon={<Brain size={30} />}
          title="Ansiedade"
          description="Tratamento estruturado para ansiedade generalizada, crises de pânico e pensamentos acelerados com técnicas baseadas na Terapia Cognitivo-Comportamental."
          extra="Reestruturação Cognitiva • Técnicas de Exposição"
        />

        <Card
          icon={<Frown size={30} />}
          title="Depressão"
          description="Intervenção focada na ativação comportamental e reconstrução de padrões de pensamento negativos."
          extra="Ativação Comportamental • Planejamento de Rotina"
        />

        <Card
          icon={<Sparkles size={30} />}
          title="Autoestima"
          description="Fortalecimento da identidade e autoconfiança através da modificação de crenças limitantes."
          extra="Autoconhecimento • Mudança de Crenças"
        />

        <Card
          icon={<Flame size={30} />}
          title="Burnout"
          description="Acompanhamento para exaustão emocional e sobrecarga profissional, promovendo equilíbrio e saúde mental."
          extra="Gestão de Estresse • Organização de Rotina"
        />

        <Card
          icon={<Users size={30} />}
          title="Relacionamentos"
          description="Desenvolvimento de habilidades emocionais e comunicação assertiva em relações afetivas e familiares."
          extra="Comunicação • Inteligência Emocional"
        />

        <Card
          icon={<ShieldCheck size={30} />}
          title="Fobias"
          description="Tratamento com técnicas de exposição gradual e reestruturação cognitiva para medos específicos."
          extra="Exposição Gradual • Dessensibilização"
        />

        <Card
          icon={<Compass size={30} />}
          title="Orientação Profissional"
          description="Processo terapêutico para tomada de decisão e clareza sobre carreira e propósito."
          extra="Planejamento • Autoconhecimento"
        />

        <Card
          icon={<HeartHandshake size={30} />}
          title="Habilidades Sociais"
          description="Desenvolvimento de confiança e segurança em interações sociais e ambientes profissionais."
          extra="Treino de Assertividade • Comunicação"
        />

      </div>
    </div>
  )
}

function Card({ icon, title, description, extra }) {
  return (
    <motion.div
      className="card-premium"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{extra}</span>
    </motion.div>
  )
}

export default Especialidades






