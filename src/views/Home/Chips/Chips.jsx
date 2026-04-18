import styles from "./chips.module.scss";
const Chips = ({ chips }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        {chips.map((chip) => {
          return <span>{chip}</span>;
        })}
      </div>
    </div>
  );
};

export default Chips;
