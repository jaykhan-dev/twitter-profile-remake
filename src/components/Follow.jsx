const Follow = () => {
  return (
    <div className="mt-3 flex items-center space-x-4 px-4">
      <div className="cursor-pointer hover:underline space-x-2">
        <span className="font-bold">168</span>
        <span className="text-gray-700">Following</span>
      </div>
      <div className="cursor-pointer hover:underline space-x-2">
        <span className="font-bold">638</span>
        <span className="text-gray-700">Followers</span>
      </div>
    </div>
  );
};

export default Follow;
