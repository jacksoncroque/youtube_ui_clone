import styles from "./subscriptions.module.scss";

const Subscriptions = ({ subscriptions }) => {
  return (
    <div>
      <div className={styles.containerSubsChannels}>
        {subscriptions.map((subscribe) => {
          return (
            <div
              key={subscribe.id}
              className={styles.containerSubsChannelsItem}
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
