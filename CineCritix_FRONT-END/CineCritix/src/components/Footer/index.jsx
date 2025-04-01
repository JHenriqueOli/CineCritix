import React from "react";
import * as styles from "../Footer/Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>Desenvolvido por</h3>
      <div className={styles.positionUser}>
        <div className={styles.user}>
          <h3>João Henrique</h3>
          <div className={styles.icons}>
          <a href="https://github.com/JHenriqueOli" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/jhenriqueina/" className={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-in%C3%A1cio-037521199/" className={styles.icon}>
            <FaLinkedin />
          </a>
          </div>
        </div>
      </div>

      <h3 className={styles.contact}>Contate-nos!</h3>
      <div className={styles.line}>
        ©2024 CineCritix. Todos os direitos reservados
        <a href="">. Termos de Uso</a> | <a href="">Politica de Privacidade</a>
      </div>
    </footer>
  );
}
