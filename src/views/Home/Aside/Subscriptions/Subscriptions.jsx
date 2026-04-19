import styles from "./subscriptions.module.scss";

const Subscriptions = ({ subscriptions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerChannels}>
        {subscriptions.map((subscribe) => {
          return (
            <div
              key={subscribe.id}
              className={styles.containerChannelsItem}
            >
              <img src={subscribe.url} alt="Canal" />
              <span>{subscribe.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subscriptions;
