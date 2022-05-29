import styles from './Hero.module.scss';
import sushi from './img/sushi.png';
import sushi2 from './img/sushi2.png';
import sushi3 from './img/sushi3.png';
import sushi4 from './img/sushi4.png';

function Hero() {
    return (
      

      <section className={styles.hero}>
        
        <div className={styles.waveLayer}>
            <svg viewBox="0 0 200 1000">
              <defs>
                <path id="double-wave-1" d="m 0 500
                         c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                         c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                         c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                         l 0 500 l -600 0 Z" fill="#F65252">
                </path>
              </defs>
              <use xlinkHref="#double-wave-1" x="0" y="0">
                <animate attributeName="x" from="0" to="-200" dur="26s" repeatCount="indefinite"></animate>
              </use>
            </svg>
        </div>   
        <div className={styles.waveLayer}>
            <svg viewBox="0 0 200 1000">
              <defs>
                <path id="double-wave-2" d="m -30 500
                         c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                         c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                         c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                         l 0 500 l -600 0 Z" fill="#dd3838"></path>
              </defs>
              <use xlinkHref="#double-wave-2" x="0" y="0">
                <animate attributeName="x" from="0" to="-200" dur="20s" repeatCount="indefinite"></animate>
              </use>
            </svg>
        </div> 
        <div className={styles.waveLayer}>
            <svg viewBox="0 0 200 1000">
              <defs>
                <path id="double-wave-3" d="m -90 500
                   c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                   c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                   c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                   l 0 500 l -600 0 Z" fill="#c12c2c">
                </path>
              </defs>
              <use xlinkHref="#double-wave-3" x="0" y="0">
                <animate attributeName="x" from="0" to="-200" dur="14s" repeatCount="indefinite"></animate>
              </use>
            </svg>
        </div>
        <div className={styles.waveLayer}>
            <svg viewBox="0 0 200 1000">
              <defs>
                <path id="double-wave-4" d="m -60 500
                   c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                   c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                   c 40 -10, 60 -10, 100 0 c 40 10, 60 10, 100 0
                   l 0 500 l -600 0 Z" fill="#ae2a2a">
                </path>
              </defs>
              <use xlinkHref="#double-wave-4" x="0" y="0">
                <animate attributeName="x" from="0" to="-200" dur="8s" repeatCount="indefinite"></animate>
              </use>
            </svg>
        </div>
        <div className={styles.sushiImgWrap}>
          <img src={sushi} width={180} className={styles.sushiImg} />
        </div>
        <div className={styles.sushiImgWrap}>
          <img src={sushi2} width={180} className={styles.sushiImg} />
        </div>
        <div className={styles.sushiImgWrap}>
          <img src={sushi3} width={180} className={styles.sushiImg} />  
        </div>
        <div className={styles.sushiImgWrap}>
          <img src={sushi4} width={180} className={styles.sushiImg} />
        </div>
        
        <div className={styles.info}>
          <h1 className={styles.title}>Sushi</h1>
          <p className={styles.subtitle}>Delivery japanes food</p>
          <div className={styles.buttons}>
            <button className={styles.button}>Menu</button>
            <button className={styles.button}>Promo</button>
          </div>
        </div>
      </section>
    );
}

export default Hero;
