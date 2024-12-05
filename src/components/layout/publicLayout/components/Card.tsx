interface CardProps {
  title: string;
  imageSrc: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
