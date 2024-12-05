const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 flex-shrink-0">
      <img src="/logo.png" alt="Tradeland logo" className="h-8" />
      <span className="text-lg font-semibold text-blue-950">TRADELAND</span>
    </div>
  );
};

export default Logo;
