import styles from "./navItems.module.scss";

const NavItems = ({ navItems }) => {
  return (
    <div className={styles.container}>
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className={styles.item}>
            {typeof item.icon === "string" ? (
              <img src={item.icon} alt={item.label} />
            ) : (
              <Icon size={25} />
            )}
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;