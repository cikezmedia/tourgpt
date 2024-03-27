import { UserProfile } from "@clerk/nextjs";

const Profile = () => {
  return (
    <div className="relative top-12 items-center pb-4 justify-center w-full mx-auto flex flex-col bg-[#12141d]">
      <UserProfile className="bg-[#12141d]" />
    </div>
  );
};

export default Profile;
