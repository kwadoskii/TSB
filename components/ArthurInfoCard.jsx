import Image from "next/image";

export default function ArthurInfoCard({ profile = {} }) {
  return (
    <div>
      <div className="p-4 w-full bg-yellow-900 rounded-t-md border-0"></div>
      <div className="flex flex-col border-gray-300 rounded-b shadow-md">
        <div className="p-4 bg-gray-50 flex flex-col space-y-3 rounded-b-md">
          <div className="flex space-x-2 -mt-2 -mb-4">
            <div className="relative w-12 h-12 -top-6 left-0">
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <p className="font-bold text-lg ">Haider Shaheen</p>
          </div>

          <button className="bg-blue-600 text-white font-semibold w-full py-2 rounded cursor-pointer hover:bg-blue-800">
            Follow
          </button>

          <div className="pb-2">
            <p className="text-gray-500">Frontend Engineer</p>
          </div>

          <div>
            <h5 className="text-xs text-gray-500 font-bold">LOCATION</h5>
            <p className="text-gray-700">Pakistan</p>
          </div>

          <div>
            <h5 className="text-xs text-gray-500 font-bold">EDUCATION</h5>
            <p className="text-gray-700">BSC Computer Science</p>
          </div>

          <div>
            <h5 className="text-xs text-gray-500 font-bold">WORK</h5>
            <p className="text-gray-700">Software Engineer</p>
          </div>

          <div>
            <h5 className="text-xs text-gray-500 font-bold">JOINED</h5>
            <p className="text-gray-700">Aug 28, 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}
