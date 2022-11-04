import ProfileNav from "./ProfileNav";
import HeaderImage from "./HeaderImage";
import ProfilePictureEdit from "./ProfilePictureEdit";
import NameHandle from "./NameHandle";
import Bio from "./Bio";
import LocationCTAJoin from "./LocationCTAJoin";
import Follow from "./Follow";
import Tabs from "./Tabs";

const TwitterProfile = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-[600px] border-x border-gray-700 text-sm">
        <ProfileNav />
        <HeaderImage />
        <ProfilePictureEdit />
        <NameHandle />
        <Bio />
        <LocationCTAJoin />
        <Follow />
        <Tabs />
      </div>
    </>
  );
};

export default TwitterProfile;
