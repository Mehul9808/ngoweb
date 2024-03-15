const Card = ({ title, description, underline }) => {
    return (
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{title}</h2>
        
    
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default Card;