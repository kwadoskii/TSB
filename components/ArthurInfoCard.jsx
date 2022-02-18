import dayjs from "dayjs";
import Image from "next/image";
import authService from "../apis/authService";

export default function ArthurInfoCard({ profile, following, onFollow, onUnfollow }) {
  return (
    <div>
      <div className="p-4 w-full bg-yellow-900 border-0 rounded-t-md"></div>
      <div className="flex flex-col border-gray-300 rounded-b shadow-md">
        <div className="flex flex-col p-4 bg-gray-50 rounded-b-md space-y-3">
          <div className="flex -mb-4 -mt-2 space-x-2">
            {profile.profileImage && (
              <div className="relative -top-6 left-0 w-12 h-12">
                <Image
                  src={profile.profileImage}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
            )}
            <p className="text-lg font-bold">{`${profile.firstname} ${profile.lastname}`}</p>
          </div>

          {authService.getCurrentUser()?._id && profile._id !== authService.getCurrentUser()?._id && (
            <button
              className={`py-2 w-full font-semibold hover:bg-blue-800 rounded cursor-pointer ${
                following ? "text-blue-700 hover:bg-blue-100/60 ring-1" : "bg-blue-600 text-white"
              }`}
              onClick={following ? () => onUnfollow() : () => onFollow()}
            >
              {following ? "Following" : "Follow"}
            </button>
          )}

          {profile.location && (
            <div>
              <h5 className="text-gray-500 text-xs font-bold">LOCATION</h5>
              <p className="text-gray-700">{profile.location}</p>
            </div>
          )}

          {profile.education && (
            <div>
              <h5 className="text-gray-500 text-xs font-bold">EDUCATION</h5>
              <p className="text-gray-700">{profile.education}</p>
            </div>
          )}

          {profile.occupation?.position && (
            <div>
              <h5 className="text-gray-500 text-xs font-bold">WORK</h5>
              <p className="text-gray-700">
                {`${profile.occupation.position} `}
                <span className="text-gray-600/90">{`${
                  (profile.occupation?.company && " at " + profile.occupation?.company) || ""
                }`}</span>
              </p>
            </div>
          )}

          <div>
            <h5 className="text-gray-500 text-xs font-bold">JOINED</h5>
            <p className="text-gray-700">{dayjs(profile.joined).format("MMM DD, YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
