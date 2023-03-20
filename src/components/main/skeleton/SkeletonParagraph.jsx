import { SkeletonText } from './SkeletonText';

export const SkeletonParagraph = () => {
  return (
    <div className="pt-4 xs:p-0">
      <SkeletonText classes="w-40" />
      <SkeletonText classes="w-20" />
    </div>
  );
};
