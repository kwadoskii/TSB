import dayjs from "dayjs";
import Image from "next/image";

export default function ArthurInfoCard({ profile }) {
  return (
    <div>
      <div className="p-4 w-full bg-yellow-900 rounded-t-md border-0"></div>
      <div className="flex flex-col border-gray-300 rounded-b shadow-md">
        <div className="p-4 bg-gray-50 flex flex-col space-y-3 rounded-b-md">
          <div className="flex space-x-2 -mt-2 -mb-4">
            {profile.profileImage && (
              <div className="relative w-12 h-12 -top-6 left-0">
                <Image
                  src={profile.profileImage}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
            )}
            <p className="font-bold text-lg ">{`${profile.firstname} ${profile.lastname}`}</p>
          </div>

          <button className="bg-blue-600 text-white font-semibold w-full py-2 rounded cursor-pointer hover:bg-blue-800">
            Follow
          </button>

          {/* {profile.occupation?.position && (
            <div className="pb-2">
              <p className="text-gray-500">{profile.occupation?.position}</p>
            </div>
          )} */}

          {profile.location && (
            <div>
              <h5 className="text-xs text-gray-500 font-bold">LOCATION</h5>
              <p className="text-gray-700">{profile.location}</p>
            </div>
          )}

          {profile.education && (
            <div>
              <h5 className="text-xs text-gray-500 font-bold">EDUCATION</h5>
              <p className="text-gray-700">{profile.education}</p>
            </div>
          )}

          {profile.occupation?.position && (
            <div>
              <h5 className="text-xs text-gray-500 font-bold">WORK</h5>
              <p className="text-gray-700">
                {`${profile.occupation.position} `}
                <span className="text-gray-600/90">{`${
                  profile.occupation?.company && " at " + profile.occupation?.company
                }`}</span>
              </p>
            </div>
          )}

          <div>
            <h5 className="text-xs text-gray-500 font-bold">JOINED</h5>
            <p className="text-gray-700">{dayjs(profile.joined).format("MMM DD, YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
