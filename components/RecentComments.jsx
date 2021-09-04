import React from "react";
import Link from "next/link";

import ProfileComment from "./ProfileComment";

export default function RecentComments({ profileUrl, commentsOnly = false }) {
  const comments = [1, 2, 3, 4, 5, 6, 9];

  return (
    <div className="shadow-md border border-gray-300 rounded-md bg-white">
      <div className="border-b border-t p-4 border-gray-300">
        {!commentsOnly ? (
          <h3 className="font-bold">Recent Comments</h3>
        ) : (
          <div className="flex justify-between">
            <h3 className="font-bold">All {comments.length} comments</h3>
            <Link passHref href={`/${profileUrl}`}>
              <a className="text-blue-700">View all activity</a>
            </Link>
          </div>
        )}
      </div>

      {comments.map((c) => (
        <ProfileComment key={c} profileUrl={profileUrl} />
      ))}

      {!commentsOnly && (
        <Link passHref href={`${profileUrl}/comments`}>
          <a className="inline-block p-4 text-blue-500 hover:underline">
            <p>View all 11 comments</p>
          </a>
        </Link>
      )}
    </div>
  );
}
