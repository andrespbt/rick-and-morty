import { SkeletonParagraph } from './SkeletonParagraph';

export const SkeletonCard = () => {
  return (
    <li className="xs:flex-row xs:justify-center m-2 xs:m-8 last-of-type:mb-0 w-[100%] min-w-[260px] flex flex-col overflow-hidden xs:flex xs:max-h-[250px] xl:max-w-[600px] xl:mt-0 xl:m-0">
      <section className="bg-[#818181] animate-pulse h-[300px] xs:w-[200px] xs:h-[250px] xs:rounded-tr-none xs:rounded-bl-md w-full rounded-t-md object-cover flex-[2 1]"></section>
      <section className="bg-darkGray h-[50%] animate-pulse xs:py-2 xs:h-full xs:gap-4 xs:w-[600px] xs:rounded-tr-md xs:rounded-bl-none rounded-b-md px-2 flex flex-col gap-6 text-white p-4 xs:flex-[2 1] xs:py-0 xs:max-w-[380px] xs:h-[250px]">
        <SkeletonParagraph />
        <SkeletonParagraph />
        <SkeletonParagraph />
      </section>
    </li>
  );
};
