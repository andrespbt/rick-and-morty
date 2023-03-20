export const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-veryDarkGray h-[70vh] flex justify-center items-center">
      <p className="text-[#fff] w-40 ">{message} try again later please.</p>
    </div>
  );
};
