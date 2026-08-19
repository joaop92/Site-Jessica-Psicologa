// Dados de contato reais — edite aqui se algo mudar.
const siteConfig = {
  nome: "Jéssica",
  sobrenome: "Batista",
  nomeCompleto: "Jéssica Batista",
  crp: "CRP 02/28794",
  whatsapp: "5581982907087",
  whatsappDisplay: "(81) 98290-7087",
  instagram: "@jessicabatista.psi", // TODO: confirmar usuário real do Instagram
  email: "contato@jessicabatista.com.br", // TODO: confirmar e-mail real
  cidade: "Recife, PE",
};

export const whatsappLink = (mensagem) => {
  const texto = encodeURIComponent(mensagem || "Olá, Jéssica! Vim pelo site e gostaria de agendar um atendimento.");
  return `https://wa.me/${siteConfig.whatsapp}?text=${texto}`;
};

export default siteConfig;
