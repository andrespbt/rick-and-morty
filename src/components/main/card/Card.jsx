import { CardText } from './CardText';

export const Card = ({ info }) => {
  const {
    name,
    status,
    species,
    image,
    location: { name: locationName },
    origin: { name: originName },
  } = info;

  return (
    <li className="xs:flex-row xs:justify-center m-2 xs:m-8 last-of-type:mb-0 w-[100%] min-w-[260px] flex flex-col overflow-hidden xs:flex xs:max-h-[250px] xl:max-w-[600px] xl:mt-0 xl:m-0">
      <section>
        <img
          className="h-[300px] xs:w-[200px] xs:h-full xs:rounded-tr-none xs:rounded-bl-md w-full rounded-t-md object-cover flex-[2 1]"
          src={image}
          alt={`${name} image`}
        />
      </section>
      <section className="bg-darkGray xs:py-2 h-[50%] xs:h-full xs:gap-4 xs:w-[600px] xs:rounded-tr-md xs:rounded-bl-none  rounded-b-md px-2 flex flex-col gap-6 text-white p-4 xs:flex-[2 1] xs:py-0 xs:max-w-[380px]">
        {/* Name, status and specie ph */}
        <div className="pt-4 ">
          <h2 className="font-extrabold  text-3xl xs:text-2xl">{name}</h2>
          <div className="flex mt-1 items-center gap-2">
            <div className={`${status === 'Dead' ? 'bg-[#D43C2F]' : 'bg-[#55CB44]'} w-2 h-2 rounded-full`}></div>
            <span>
              {status} - {species}
            </span>
          </div>
        </div>

        {/* Last known location ph */}
        <div>
          <span className="block text-[#818181] text-lg">Last known location:</span>
          <span className="text-lg">{locationName}</span>
        </div>

        {/* First seen ph */}
        <div>
          <span className="block text-[#818181] text-lg">First seen in:</span>
          <span className="text-lg">{originName}</span>
        </div>
      </section>
    </li>
  );
};
