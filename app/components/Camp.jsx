import { PEOPLE_URL } from "@/app/constants";
import Image from "next/image";



const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div className={`h-full w-full min-w-[1100px] `}>
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-10 lg:py-5">
     <div className="flexCenter gap-2">
       <div className="rounded-sm bg-green-400 p-4">
         <Image
           src="/folded-map.svg"
           alt="map"
           width={28}
           height={28}
         />
<Image src={backgroundImage} alt="" height={600} width={600} className="bg-cover  sm:bg-cover   bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl"/>

       </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-black font-bold text-xl ">{title}</h4>
          <p className="regular-14 text-green text-base font-semibold">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex  ">
          {PEOPLE_URL.map((url) => (
            <Image 
              className=" h-10 w-10 rounded-xl"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=" relative flex flex-col py-10 items-center justify-center">
      <div className="hide-scrollbar flex h-[340px] w-[600px]  gap-2  overflow-x-auto lg:h-[400px] xl:h-[640px]
      
      
      ">
        <CampSite 
          backgroundImage="/img-1.png" 
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="/img-2.png"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

     
    </section>
  )
}

export default Camp
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      