const ProfileNav = () => {
  return (
    <div className="flex items-center space-x-4 p-1.5">
      <button className="inline-flex items-center justify-center rounded-full p-2 transition duration-150 ease-in-out hover:bg-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stoke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </button>
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold tracking-tight">Jay Khan</h2>
        <span className="text-xs text-gray-500">120 Tweets</span>
      </div>
    </div>
  );
};

export default ProfileNav;
