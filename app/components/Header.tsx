import Navbar from './Navbar';
import { Item } from '../../types';

const Header = () => {
  const navigation: Item[] = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    { id: 3, title: 'Posts', path: '/posts' }
  ];

  return (
    <header className='header'>
      <div className='container'>
        <Navbar items={navigation} />
      </div>
    </header>
  );
};
export default Header;
