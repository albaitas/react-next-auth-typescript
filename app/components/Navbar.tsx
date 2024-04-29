'use client';
import Link from 'next/link';
import styles from '/app/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { ItemProps } from '../../types';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ items }: ItemProps) => {
  const pathname = usePathname();
  const session = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar_title'>LOGO</div>
      <div className='toggle_button' onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
      <div className={menuOpen ? 'navbar_links active' : 'navbar_links'}>
        <ul>
          {items.map(({ id, title, path }: any) => (
            <li key={id}>
              <Link href={path}>
                <div className={pathname === path ? styles.active : ''}>{title}</div>
              </Link>
            </li>
          ))}
          {session?.data && (
            <li>
              <Link href='/profile'>
                <div className={pathname === '/profile' ? styles.active : ''}>Profile</div>
              </Link>
            </li>
          )}
          {session?.data ? (
            <li>
              <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
              </Link>
            </li>
          ) : (
            <li>
              <Link href='/signin'>
                <div className={pathname === '/signin' ? styles.active : ''}>Sign In</div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
