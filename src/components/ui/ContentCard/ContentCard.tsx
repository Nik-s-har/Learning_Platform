import styles from './ContentCard.module.css';

interface ContentCardProps {
  imgSrc: string;
  title: string;
  description: string;
  onClick: () => void;
}

function ContentCard({
  imgSrc,
  title,
  description,
  onClick,
}: ContentCardProps) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgSrc} alt="" loading="lazy" />
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className={styles.button} onClick={onClick}>
          Начать
        </button>
      </div>
    </div>
  );
}

export default ContentCard;
