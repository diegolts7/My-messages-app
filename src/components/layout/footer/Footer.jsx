import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { DivFooter, DivIcons, DivInfo } from "./styles-footer";

const Footer = () => {
  return (
    <DivFooter>
      <DivInfo>
        <strong>Developer by</strong>
        <p>Diego Leite de Sousa</p>
        <DivIcons>
          <a href="https://www.instagram.com/diego_lts/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://x.com/DiegoXlts" target="_blank">
            <FaXTwitter />
          </a>

          <a href="https://github.com/diegolts7" target="_blank">
            <FaGithub />
          </a>
        </DivIcons>
      </DivInfo>
      <DivInfo>
        <strong>Enterprise</strong>
        <p>Um serviço oferecido e disponibilizados sem fins lucrativos por:</p>
        <p>My messages Lmtd.&trade; &copy;</p>
      </DivInfo>
      <DivInfo>
        <strong>Contact</strong>
        <DivIcons>
          <a href="mailto:my.messages.brazil@gmail.com" target="_blank">
            <MdOutlineEmail />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5588999353185&text=Sobre%20o%20my%20messages..."
            target="_blank"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/diego-sousa-972555221/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </DivIcons>
      </DivInfo>
    </DivFooter>
  );
};

export default Footer;
