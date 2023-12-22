import Image from "next/image";
import profilePicture from "@/public/photo.png";

const Photo = () => {
  return (
    <>
      <div className="rounded-full border overflow-hidden flex">
        <Image
          src={profilePicture}
          alt="profile-picture"
          width={150}
          height={150}
        />
      </div>
    </>
  );
};

export default Photo;
