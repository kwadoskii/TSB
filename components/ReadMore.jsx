import Image from "next/image";
import Link from "next/link";

export default function ReadMore() {
  const data = [
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png",
      title: "Hello world one two three for",
      aurthur: "Kwadoskii",
      date: "Aug 30",
      url: "/i-love-javascript",
    },
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png",
      title: "Hello world",
      aurthur: "Kwadoskii",
      date: "Aug 30",
      url: "/i-love-javascript",
    },
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png",
      title: "Hello world",
      aurthur: "Kwadoskii",
      date: "Aug 30",
      url: "/i-love-javascript",
    },
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--qZUyVAzn--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473848/c9176bd4-7e29-4848-84ca-534bb8533111.png",
      title: "Hello world",
      aurthur: "Kwadoskii",
      date: "Aug 30",
      url: "/i-love-javascript",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 py-3 mb-0 my-2 rounded-md border border-gray-300 md:pt-8 md:px-12 md:pb-5">
      <h2 className="text-2xl font-bold my-3 mb-7">Read next</h2>

      <div className="flex gap-6 flex-col mt-2">
        {data.map((nextRead, i) => (
          <Link key={i} passHref href={nextRead.url}>
            <a className="hover:text-blue-700 hover:last:text-blue-700">
              <div className="flex gap-4 items-center ">
                <div className="relative h-10 w-10">
                  <Image
                    alt="arthur"
                    src={nextRead.img}
                    objectFit="cover"
                    className="rounded-full"
                    layout="fill"
                  />
                </div>
                <div className="flex-col">
                  <h2 className="font-bold text-lg">{nextRead.title}</h2>
                  <p className="opacity-75">
                    {nextRead.aurthur} - {nextRead.date}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
