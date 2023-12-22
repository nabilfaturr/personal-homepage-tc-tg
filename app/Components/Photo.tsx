import Image from "next/image";
import profilePicture from "@/public/photo.png";

const Photo = () => {
  return (
    <>
      <div>
        <Image
          src={profilePicture}
          alt="profile-picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </>
  );
};

export default Photo;
