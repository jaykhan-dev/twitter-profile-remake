import JKLogo from "../assets/jk-logo.png";

const ProfilePictureEdit = () => {
  return (
    <div className="flex items-start justify-between px-4 py-3">
      <img
        className="-mt-[4.5rem] h-32 w-32 cursor-pointer rounded-full"
        src={JKLogo}
        alt="Jay Khan Logo"
      />
      <button className="rounded-full border border-gray-300 px-4 py-1.5 font-bold transition duration-150 ease-in-out hover:bg-gray-500">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePictureEdit;
