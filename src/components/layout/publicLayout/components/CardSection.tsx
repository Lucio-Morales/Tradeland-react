import { FaShoppingCart, FaRegStar, FaTag, FaRocket } from 'react-icons/fa';

const CardSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: 'Tarjeta 1',
      description:
        'Más información útil aquí bla bla sadasfd df sdfs dfjsjadfjasdjajajsdj ajsd aaa aadasd dfgdfgdfg dfg dfg dgdfg dfg dfg',
      icon: <FaShoppingCart />,
    },
    {
      id: 2,
      title: 'Tarjeta 2',
      description:
        'Más información útil aquí bla bla sadasfd df sdfs dfjsjadfjasdjajajsdj ajsd aaa aadasd dfgdfgdfg dfg dfg dgdfg dfg dfg',
      icon: <FaRegStar />,
    },
    {
      id: 3,
      title: 'Tarjeta 3',
      description:
        'Más información útil aquí bla bla sadasfd df sdfs dfjsjadfjasdjajajsdj ajsd aaa aadasd dfgdfgdfg dfg dfg dgdfg dfg dfg',
      icon: <FaTag />,
    },
    {
      id: 4,
      title: 'Tarjeta 4',
      description:
        'Más información útil aquí bla bla sadasfd df sdfs dfjsjadfjasdjajajsdj ajsd aaa aadasd dfgdfgdfg dfg dfg dgdfg dfg dfg',
      icon: <FaRocket />,
    },
  ];

  return (
    <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex space-x-4 justify-center ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-slate-50 p-6 rounded-lg shadow-lg w-64 flex flex-col items-center justify-between hover:shadow-xl transition-shadow"
          >
            <div className="text-indigo-500 text-4xl mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              {card.description}
            </p>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors">
              Ver más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
