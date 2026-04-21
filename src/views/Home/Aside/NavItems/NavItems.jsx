import styles from "./navItems.module.scss";

import cn from "classnames";

const NavItems = ({ navItems, firstSelected = false }) => {
  return (
    <div className={styles.container}>
      {navItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={cn(styles.containerItems, {
              [styles.containerItemsActive]: firstSelected && index === 0,
            })}
          >
            {typeof item.icon === "string" ? (
              <img src={item.icon} alt={item.label} />
            ) : (
              <Icon />
            )}
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
