import "./Psicoterapia.css";

export default function Psicoterapia() {
  return (
    <section id="psicoterapia" className="psicoterapia">
      <div className="container psicoterapia__inner">
        <p className="psicoterapia__scribble">um lembrete</p>
        <h2 className="psicoterapia__quote">
          Você não precisa estar em crise<br />para começar a terapia.
        </h2>

        <div className="psicoterapia__body">
          <p>
            A psicoterapia também pode ser um espaço de autoconhecimento,
            desenvolvimento emocional e construção de novas habilidades.
            Você não precisa ter todas as respostas para começar — ela pode
            ser justamente o espaço para compreender melhor o que sente,
            reconhecer padrões e desenvolver novas formas de lidar com
            aquilo que o desafia.
          </p>
          <p>
            Cada pessoa tem seu próprio ritmo, e meu trabalho respeita sua
            história, suas experiências e suas necessidades. Meu objetivo
            não é dizer o que você deve fazer, mas ajudá-lo a desenvolver
            recursos para lidar de maneira mais consciente e funcional com
            seus pensamentos, emoções, comportamentos e escolhas.
          </p>
        </div>
      </div>
    </section>
  );
}
