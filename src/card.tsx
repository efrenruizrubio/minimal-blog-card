import styles from './card.module.css'

export default function Card() {
  return (
    <article className={styles.card}>
      <img
        src='./assets/cactus_img.jpg'
        alt='A cactus in a flowerpot'
        width={336}
        height={152}
        className={styles.image}
      />
      <span className={styles.tag}>
        <strong>Design</strong>
      </span>
      <h2 className={styles.title}>Embracing Minimalism</h2>
      <p className={styles.content}>
        From minimalist sculptures to minimalist paintings, this blog will
        inspire you to appreciate the beautyh that lies in simplicity
      </p>
      <span className={styles.credits}>Annie Spratt</span>
    </article>
  )
}
