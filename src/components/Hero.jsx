
import image02 from "../assets/image02.jpg";
import image03 from "../assets/image03.png";

const Hero = () => {
  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-10 lg:px-20 lg:mt-10">
      
     
      <h1 className="text-4xl md:text-5xl  text-center mb-4 pt-7">
       <span className="border-b-2 border-black"> COLLECTION</span>
      </h1>
     

     
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-14">
        
      
        <div className="w-full h-full lg:w-1/2 flex justify-center pt-6">
          <img
            className="w-full max-w-md h-full md:max-w-lg object-cover "
            src={image02}
            alt="collection"
          />
        </div>

      
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <img
            className="w-full max-w-sm h-auto mb-6"
            src={image03}
            alt="dhun.logo"
          />

          <div className="max-w-2xl px-2 sm:px-4 text-gray-800 leading-7 md:leading-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              An ode to the rhythm of craft and melody of Kutch
            </h2>
            <p className="mb-4">
              Sunira’s pre-festive collection <span className="font-semibold">Dhun</span> is a tribute to Kutch
              - to the artisans who keep alive the centuries-old craft of Ajrakh, 
              and to the traditional instruments whose melodies once echoed across its valleys. 
              The Jodiya Pava, Santar, and Morchang - rare and fading - carry the music of the land, 
              just as Ajrakh, with its layers of pattern and dye, carries its heritage. 
              Both are timeless legacies, both deserving preservation.
            </p>
            <p className="mb-4">
              For us, Ajrakh has always been more than a textile - it is a rhythm we return to each season, 
              reimagining blocks and colourways while honouring its roots in Gaji silk and natural dyes.
            </p>
            <p className="mb-4">
              The silhouettes in Dhun stay true to Sunira’s most-loved styles - phirans, pleated kurtas, 
              kaftan dresses, and shirt-kurtas with our signature ijars. For a festive mood, Ajrakh is 
              elevated with intricate dabka and marori zari embroidery, adding richness and detail to each piece.
            </p>
            <p className="mb-4">
              Every piece in Dhun is a song of heritage, every silhouette a rhythm of renewal - 
              creating a symphony that binds past and present, craft and melody, silence and sound.
            </p>
            <p className="font-semibold">
              This is Dhun: the rhythm of Kutch, remembered and retold.
            </p>
          </div>

        
          <button className="hover:bg-[#839c62] hover:text-white mt-6 border-2 border-black rounded-md px-6 py-2 text-sm sm:text-base md:text-lg  transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
