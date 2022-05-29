import styles from './Footer.module.scss';
// import logoSvg from './img/logo.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.logo}>
          <img src="" width={125} height={125} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
