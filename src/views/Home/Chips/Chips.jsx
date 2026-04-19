import styles from "./chips.module.scss";

const Chips = ({ chips }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        {chips.map((chip) => {
          return <span key={chip}>{chip}</span>;
        })}
      </div>
    </div>
  );
};

export default Chips;
