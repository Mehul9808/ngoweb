import Image from 'next/image';
const CardWithImage = ({ imageUrl, title, description }) => {
    return (
      <div className="max-w-xs rounded  shadow-lg">
        <Image className="size-64 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CardWithImage;