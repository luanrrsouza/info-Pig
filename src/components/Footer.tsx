import Image from "next/image";
import PigLogo from "../assets/images/pigLogo.png";

function Footer() {
  return (
    <footer className="bg-white text-[#8D5B56] py-[1rem] px-[1rem]">
      <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-[1rem]">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={PigLogo}
            alt="Info Pig Logo"
            className="mb-[0.5rem]"
            width={80}
            height={80}
          />
        </div>

        <div className="text-center md:text-center">
          <p className="text-[0.875rem] leading-snug">
            Compromisso com a qualidade e o bem-estar animal.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-[0.75rem] leading-snug">
            © {new Date().getFullYear()} Info Pig. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
