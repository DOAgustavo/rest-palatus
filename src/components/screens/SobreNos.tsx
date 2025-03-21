export default function SobreNos() {
  return (
    <div
      className="text-black"
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(180deg, #ededed 90%, #b46329 10%)",
        paddingTop: "60px", // Adiciona espaço para compensar o NavBar
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4">Sobre Nós</h2>
        <p className="mb-3">
          Bem-vindo ao nosso restaurante! Somos apaixonados por oferecer pratos
          deliciosos e um ambiente acolhedor para nossos clientes.
        </p>
        <p>
          Nossa missão é proporcionar uma experiência gastronômica única, com
          ingredientes frescos e receitas feitas com amor.
        </p>
      </div>
    </div>
  );
}