const Tabs = () => {
  return (
    <ul className="mt-3 flex justify-evenly">
      <li className="relative flex w-full cursor-pointer items-center justify-center p-4 transition duration-150 ease-in-out hover:bg-gray-800">
        <span className="font-bold">Tweets</span>
        <div className="absolute bottom-0 w-14 border-b-[3px] border-sky-500"></div>
      </li>
      <li className="flex w-full cursor-pointer items-center justify-center p-4 transition duration-150 ease-in-out hover:bg-gray-800">
        <span className="font-bold text-gray-600">Tweets & replies</span>
      </li>
      <li className="flex w-full cursor-pointer items-center justify-center p-4 transition duration-150 ease-in-out hover:bg-gray-800">
        <span className="font-bold text-gray-600">Media</span>
      </li>
      <li className="flex w-full cursor-pointer items-center justify-center p-4 transition duration-150 ease-in-out hover:bg-gray-800">
        <span className="font-bold text-gray-600">Likes</span>
      </li>
    </ul>
  );
};

export default Tabs;
