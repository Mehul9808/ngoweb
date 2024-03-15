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
        <div className=" md:flex justify-center items-center">
          <div className="md:mr-3 ">
          <CardWithImage
            imageUrl={ngoimg11}
            title="Empowering Women Through Education"
           


            description=" Explore our initiatives for women's education, breaking barriers and fostering empowerment."
          />
          </div>
          <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg13}
            
            title="Combatting Hunger: Our Food Security Initiatives"
            
            description=" Learn about our efforts in sustainable food security, including community gardens and nutritional education"
          />
          </div>
          
          <CardWithImage
            imageUrl={ngoimg12}
            title="Supporting Mental Health: Breaking the Stigma"
            description=" Join us in raising awareness and promoting access to mental health resources."
          />
        </div>
  
        {/* Second row */}
        
        <div className="md:flex justify-center items-center mt-6">
        <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg14}
            title="Environmental Conservation: Protecting Our Planet"
            description=" Discover our actions in preserving natural resources, from tree planting to advocating for sustainable practices."
          />
          </div>
          <div className="md:mr-3">
          <CardWithImage
            imageUrl={ngoimg10}
            title="Building Resilient Communities: Disaster Relief Efforts"
            description=" Explore our disaster relief initiatives, providing immediate assistance and long-term recovery support."
          />
          </div>
          <CardWithImage
            imageUrl={ngoimg15}
            title="Investing in Youth: Education and Skill Development"
            description=" Discover how we empower youth through education and vocational training programs."
          />
        </div>
      </>
    );
  };
  
  export default CardsGridServer;