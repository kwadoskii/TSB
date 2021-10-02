import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { SaveIcon } from "@heroicons/react/outline";

export default function SavedPage() {
  const posts = [
    {
      _id: "1",
      title: "Deploy your Next.js app to Heroku in 5 minutes",
      excerp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatum corporis eligendi voluptatem cum voluptate atque beatae ab possimus expedita, perferendis, incidunt nam deserunt? Impedit explicabo cum fuga vel adipisci.      Quos iure numquam soluta enim repudiandae explicabo fugiat quam libero cumque alias temporibus, consequatur obcaecati impedit perferendis sequi et amet placeat deserunt. Ad tempore, dignissimos quasi mollitia rerum aperiam quis?      Inventore ipsam laudantium quod, praesentium earum cum voluptatibus molestias totam rerum reiciendis voluptatum nobis ipsum non veniam deleniti corporis, culpa adipisci. Eum quae tenetur ipsa iure dolore nesciunt pariatur animi.",
      tags: [
        {
          _id: "5",
          name: "politics",
          url: "/t/politics",
          bgColor: "bg-yellow-500",
          textBlack: true,
        },
        {
          _id: "6",
          name: "football",
          url: "/t/football",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "8",
          name: "entertainment",
          url: "/t/entertainment",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
      ],
      arthur: {
        name: "Marie Starck",
        username: "kwadoskii",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--QU7IG6C2--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/80451/3034728c-5307-4467-a67e-b9c00d6d33ed.png",
      },
      slug: "lorem-ipsum",
      banner: "http://imageurl.com",
      timestamp: "12-2-22",
    },
    {
      _id: "2",
      title: "50 Best Inspiring Form Designs 🎨",
      excerp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatum corporis eligendi voluptatem cum voluptate atque beatae ab possimus expedita, perferendis, incidunt nam deserunt? Impedit explicabo cum fuga vel adipisci.      Quos iure numquam soluta enim repudiandae explicabo fugiat quam libero cumque alias temporibus, consequatur obcaecati impedit perferendis sequi et amet placeat deserunt. Ad tempore, dignissimos quasi mollitia rerum aperiam quis?      Inventore ipsam laudantium quod, praesentium earum cum voluptatibus molestias totam rerum reiciendis voluptatum nobis ipsum non veniam deleniti corporis, culpa adipisci. Eum quae tenetur ipsa iure dolore nesciunt pariatur animi.",
      tags: [
        {
          _id: "1",
          name: "news",
          url: "/t/news",
          bgColor: "bg-yellow-500",
          textBlack: true,
        },
        {
          _id: "2",
          name: "local",
          url: "/t/local",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "3",
          name: "music",
          url: "/t/music",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "4",
          name: "latest",
          url: "/t/latest",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
      ],
      arthur: {
        name: "Akunna Okoye",
        username: "AkunnaOkoye",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--blbDiZBx--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495782/9375dc8c-13d7-4da6-8fed-acae3d00a1f0.jpg",
      },
      slug: "lorem-ipsum2",
      banner: "http://imageurl.com",
      timestamp: "12-Feb-22",
    },
    {
      _id: "3",
      title: "Generate a PDF from HTML with puppeteer",
      excerp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatum corporis eligendi voluptatem cum voluptate atque beatae ab possimus expedita, perferendis, incidunt nam deserunt? Impedit explicabo cum fuga vel adipisci.      Quos iure numquam soluta enim repudiandae explicabo fugiat quam libero cumque alias temporibus, consequatur obcaecati impedit perferendis sequi et amet placeat deserunt. Ad tempore, dignissimos quasi mollitia rerum aperiam quis?      Inventore ipsam laudantium quod, praesentium earum cum voluptatibus molestias totam rerum reiciendis voluptatum nobis ipsum non veniam deleniti corporis, culpa adipisci. Eum quae tenetur ipsa iure dolore nesciunt pariatur animi.",
      tags: [
        {
          _id: "1",
          name: "news",
          url: "/t/news",
          bgColor: "bg-yellow-500",
          textBlack: true,
        },
        {
          _id: "2",
          name: "local",
          url: "/t/local",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "3",
          name: "music",
          url: "/t/music",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "4",
          name: "latest",
          url: "/t/latest",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
      ],
      arthur: {
        name: "Akunna Okoye",
        username: "AkunnaOkoye",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--F7XF4LZS--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/15827/8dbfb1b9-ef41-4b17-b59c-487fbc1769ed.jpg",
      },
      slug: "lorem-ipsum2",
      banner: "http://imageurl.com",
      timestamp: "12-Feb-22",
    },
    {
      _id: "4",
      title: "6 Nullish coalescing operators every javascript programmer must know !",
      excerp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatum corporis eligendi voluptatem cum voluptate atque beatae ab possimus expedita, perferendis, incidunt nam deserunt? Impedit explicabo cum fuga vel adipisci.      Quos iure numquam soluta enim repudiandae explicabo fugiat quam libero cumque alias temporibus, consequatur obcaecati impedit perferendis sequi et amet placeat deserunt. Ad tempore, dignissimos quasi mollitia rerum aperiam quis?      Inventore ipsam laudantium quod, praesentium earum cum voluptatibus molestias totam rerum reiciendis voluptatum nobis ipsum non veniam deleniti corporis, culpa adipisci. Eum quae tenetur ipsa iure dolore nesciunt pariatur animi.",
      tags: [
        {
          _id: "1",
          name: "news",
          url: "/t/news",
          bgColor: "bg-yellow-500",
          textBlack: true,
        },
        {
          _id: "2",
          name: "local",
          url: "/t/local",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "3",
          name: "music",
          url: "/t/music",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
        {
          _id: "4",
          name: "latest",
          url: "/t/latest",
          bgColor: "bg-purple-400",
          textBlack: false,
        },
      ],
      arthur: {
        name: "Akunna Okoye",
        username: "AkunnaOkoye",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--R0nYGdi7--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/102689/254c0829-1ff0-4410-a4b2-c59c772b702e.jpeg",
      },
      slug: "lorem-ipsum2",
      banner: "http://imageurl.com",
      timestamp: "12-Feb-22",
    },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [postss, setPostss] = useState(posts);
  const [tags, setTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setPostss(postss);
    filterTags(postss);
  }, []);

  const getPageData = () => {
    let searchText = searchValue.toLowerCase().trim().replace(/\\/g, "");
    let filtered = postss;

    if (searchText.length > 1 || selectedTag) {
      filtered = selectedTag
        ? postss.filter((p) => p.tags.filter((t) => t.name === selectedTag).length > 0)
        : postss;

      filtered = searchText
        ? filtered.filter((p) =>
            p.title.toLowerCase().search(searchText) > -1 ||
            p.tags.filter((t) => t.name.toLowerCase().search(searchText) > -1).length > 0 ||
            p.arthur.name.toLowerCase().search(searchText) > -1
              ? p
              : null
          )
        : filtered;
    }

    return { totalCount: filtered.length, data: filtered };
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  const filterTags = (posts) => {
    const tagLists = new Set();

    posts.forEach((p) => {
      p.tags.forEach((t) => {
        tagLists.add(t.name);
      });
    });

    setTags(
      [...tagLists]
        .map((tag, i) => {
          return { id: i + 1, name: tag };
        })
        .sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) return -1;
          if (fa > fb) return 1;

          return 0;
        })
    );
  };

  const { data: filteredPost, totalCount } = getPageData();

  return (
    <>
      <Title title="Saved Articles" />
      <Navbar />

      <div className="bg-gray-100 my-min-height">
        <div className="max-w-7xl relative px-1 py-1 lg:py-4 lg:px-6 mx-auto ">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-full lg:col-span-1">
              <h2 className="font-bold text-xl md:text-3xl">Saved posts ({totalCount})</h2>
            </div>

            <div className="col-span-full lg:col-span-1">
              <div className="flex">
                {/* <button className="px-3 border-2 border-gray-300 rounded-md font-semibold hover:border-gray-400 transition duration-200 ease-out hover:bg-gray-200 py-[0.4em]">
                  View archive
                </button> */}
                <Input
                  noVerticalMargin
                  placeholder="Enter some text to filter on..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-16 md:gap-2 lg:gap-4 md:mt-5">
            <div className="col-span-full md:col-span-4 lg:col-span-3 my-2 md:m-0">
              <Sidebar
                notLinked
                data={tags}
                selected={selectedTag}
                onItemSelect={handleTagSelect}
                displayName="tags"
              />
            </div>

            <div className="col-span-full md:col-span-12 lg:col-span-13">
              <div className="border border-gray-200 rounded-md bg-white px-5 py-4">
                {Array.isArray(filteredPost) && filteredPost.length > 0 ? (
                  filteredPost.map((p, i) => {
                    const createdTime = new Date(p.timestamp);

                    return (
                      <div className="flex gap-4 mb-8" key={i}>
                        <Link passHref href="/kwadoskii">
                          <a>
                            <div className="w-8 h-8 relative border rounded-full cursor-pointer">
                              <Image
                                src={p.arthur.img}
                                objectFit="cover"
                                layout="fill"
                                className="rounded-full"
                              />
                            </div>
                          </a>
                        </Link>

                        <div className="flex-grow flex flex-col gap-1">
                          <Link passHref href={`/${p.arthur.username}/${p.slug}`}>
                            <a className="hover:text-blue-800">
                              <h3 className="font-bold text-lg">{p.title}</h3>
                            </a>
                          </Link>

                          <div className="flex flex-col md:flex-row gap-2 md:items-center text-gray-500 text-sm">
                            <Link passHref href={`/${p.arthur.username}`}>
                              <a className="hover:text-blue-800 text-gray-800">
                                <p className="text-sm font-semibold">{p.arthur.name}</p>
                              </a>
                            </Link>
                            <p>
                              <span className="hidden md:inline text-gray-300">• </span>
                              {months[createdTime.getMonth()] +
                                " " +
                                createdTime.getDate() +
                                " '" +
                                createdTime.getFullYear().toString().substring(2) +
                                " "}
                              <span className="hidden md:inline text-gray-300">• </span>
                            </p>
                            <div className="flex gap-2">
                              {p.tags.map((tag, i) => (
                                <Link passHref href={`/t/${tag.name}`} key={i}>
                                  <a className="hover:text-gray-900">
                                    <p key={tag._id}>{`#${tag.name}`}</p>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col justify-center items-center my-20">
                    <p className="text-gray-700 font-bold text-lg">
                      No saved posts from search filter 🤔
                    </p>
                    <div>
                      <p className="flex gap-2 items-center mt-4">
                        Click the bookmark reaction{" "}
                        <span className="inline-block">
                          <SaveIcon className="h-6 text-gray-500" />
                        </span>{" "}
                        when viewing a post to add it to your saved post.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
