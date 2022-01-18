import React from "react";
import Link from "next/link";

import ProfileComment from "./ProfileComment";

export default function RecentComments({ profileUrl, commentsOnly = false, comments }) {
  return (
    <div className="shadow-md border border-gray-300 rounded-md bg-white overflow-hidden">
      <div className="border-b p-4 border-gray-300">
        {!commentsOnly ? (
          <h3 className="font-bold">Recent Comment{comments?.length > 1 && "s"}</h3>
        ) : (
          <div className="flex justify-between">
            <h3 className="font-bold">
              All {comments.length} comment{comments?.length > 1 && "s"}
            </h3>
            <Link passHref href={`/${profileUrl}`}>
              <a className="text-blue-700">View all activity</a>
            </Link>
          </div>
        )}
      </div>

      {comments?.slice(0, 7).map((comment) => (
        <ProfileComment key={comment._id} profileUrl={profileUrl} comment={comment} />
      ))}

      {!commentsOnly &&
        comments?.length > 7 && ( // change to 7
          <Link passHref href={`${profileUrl}/comments`}>
            <a className="inline-block p-4 text-blue-500 hover:underline">
              <p>
                View all {comments?.length} comment{comments?.length > 1 && "s"}
              </p>
            </a>
          </Link>
        )}
    </div>
  );
}
