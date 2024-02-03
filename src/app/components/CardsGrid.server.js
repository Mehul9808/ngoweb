import CardWithImage from  '@/app/components/CardWithImage';

import ngoimg11 from "/public/Images/ngoimg11.jpg";
import ngoimg12 from "/public/Images/ngoimg12.jpg";
import ngoimg13 from "/public/Images/ngoimg13.jpg";
import ngoimg10 from "/public/Images/ngoimg10.jpg";
import ngoimg14 from "/public/Images/ngoimg14.jpg";
import ngoimg15 from "/public/Images/ngoimg15.jpg";


const CardsGridServer = () => {
    return (
      <>
        {/* First row */}
        <div className=" flex justify-center items-center">
          <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg11}
            title="Card 1"
            description="Information for Card 1"
          />
          </div>
          <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg13}
            
            title="Card 2"
          
            description="Information for Card 2"
          />
          </div>
          
          <CardWithImage
            imageUrl={ngoimg12}
            title="Card 3"
            description="Information for Card 3"
          />
        </div>
  
        {/* Second row */}
        
        <div className="flex justify-center items-center mt-6">
        <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg14}
            title="Card 4"
            description="Information for Card 4"
          />
          </div>
          <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg10}
            title="Card 5"
            description="Information for Card 5"
          />
          </div>
          <CardWithImage
            imageUrl={ngoimg15}
            title="Card 6"
            description="Information for Card 6"
          />
        </div>
      </>
    );
  };
  
  export default CardsGridServer;