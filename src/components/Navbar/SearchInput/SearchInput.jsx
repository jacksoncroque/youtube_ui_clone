import styles from './searchInput.module.scss';

import { GrKeyboard } from 'react-icons/gr';
import { CiSearch } from 'react-icons/ci';
import { FiMic } from 'react-icons/fi';

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <CiSearch />
        <input
          type="text"
          placeholder="Pesquisar"
        />
        <GrKeyboard />
      </div>
      <button>
        <CiSearch />
      </button>
      <div className={styles.containerSub}>
        <FiMic />
      </div>
    </div>
  );
};

export default SearchInput;
