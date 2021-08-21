import Link from 'next/link';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';

import styles from './header.module.scss';

export default function Header() {
  return (
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Link href="/">
            <a>
              <img src="/Logo.svg" alt="logo" />
            </a>
          </Link>
        </div>
      </header>
  );
}
