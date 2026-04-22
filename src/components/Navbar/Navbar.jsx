import styles from './navbar.module.scss';

import { FiPlus } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';

import SearchInput from './SearchInput/SearchInput';
import NavButtons from './NavButtons/NavButtons';

const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.containerNav}>
        <div className={styles.containerNavLogo}>
          <a href="/">
            <img
              src="/images/icons/hamburguer.svg"
              alt="menu"
            />
          </a>
          <a href="/">
            <img
              src="/images/icons/youtube_main_logo.svg"
              alt="YouTube"
            />
            <span>BR</span>
          </a>
        </div>

        <div className={styles.containerNavSearch}>
          <SearchInput />
        </div>
        <div className={styles.containerNavButtons}>
          <NavButtons />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
