import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Trabalho from "./components/Trabalho";
import Areas from "./components/Areas";
import VideoIntro from "./components/VideoIntro";
import Psicoterapia from "./components/Psicoterapia";
import Formacao from "./components/Formacao";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import GrowthLine from "./components/GrowthLine";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="page">
      <GrowthLine />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Trabalho />
        <Areas />
        <VideoIntro />
        <Psicoterapia />
        <Formacao />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
