export const Footer = () => {
  return (
    <footer className="bg-blue-800 flex flex-col lg:flex-row gap-8 px-8 pt-8 pb-2">
      <div className="flex flex-col gap-4">
        <h4 className="text-button ">Profissionais</h4>
        <ul className="flex flex-col gap-2 text-white">
          <li>Fisioterapeuta</li>
          <li>Quiropraxia</li>
          <li>Cromoterapia</li>
          <li>Reiki</li>
          <li>Acunpultura</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-button ">Suporte</h4>
        <ul className="flex flex-col gap-2 text-white">
          <li>FAQ</li>
          <li>Contatos</li>
          <li>Tutoriais</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-button ">Sobre o Conecta Bem</h4>
        <ul className="flex flex-col gap-2 text-white">
          <li>Quem Somos</li>
          <li>Valores</li>
        </ul>
      </div>
      <div className="flex justify-between items-center lg:items-start lg:gap-8 text-button">
        <span>Termos de uso</span>
        <span>Politica de privacidade</span>
      </div>
    </footer>
  );
};
