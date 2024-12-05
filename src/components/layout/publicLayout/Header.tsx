import AuthButtons from './components/AuthButtons';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <Logo />
        <SearchBar />
        <AuthButtons />
      </div>
    </header>
  );
};

export default Header;
