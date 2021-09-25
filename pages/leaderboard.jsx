import CompetitonCard from "../components/CompetitonCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function LeaderboardPage() {
  const results = [
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 230,
      activities: {
        posts: 230,
        likes: 293,
        comments: 7772,
        shares: 1775,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
    {
      name: "James Ajala",
      profilePicture:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--HtC_awcE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/400444/8626e93e-1c07-44f2-8eab-1f0bbd87bfed.jpeg",
      aggregate: 23,
      activities: {
        posts: 23,
        likes: 23,
        comments: 2,
        shares: 15,
      },
    },
  ];

  return (
    <>
      <Title title="Leaderboard" />
      <Navbar />

      <main className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto pb-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 py-3">Top Users</h2>
            <p className="text-gray-800 text-lg">
              Below are the top users for the month based on posts, comments, likes and shares
            </p>
          </div>

          <div className="flex flex-col gap-5 my-10 lg:my-20 w-11/12 lg:w-9/12 mx-auto">
            {results.map((result, i) => (
              <CompetitonCard data={result} first={i === 0} position={i + 1} key={i} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
