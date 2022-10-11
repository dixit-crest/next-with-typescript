import React from "react";
import { BlogProps } from "../../types";
import Image from "next/image";
import Link from "next/link";

interface BlogComponentProps {
  blog: BlogProps;
}

const Blog = ({ blog }: BlogComponentProps) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <div className="w-full block h-full">
          <Image
            alt="blog photo"
            src={blog.image}
            height={200}
            width={400}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">
              {blog.category}
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {blog.title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {blog.content.slice(0, 60)}
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="block relative">
                <Image
                  alt="profil"
                  src={`https://avatars.dicebear.com/api/micah/${blog.authorUsername}.svg`}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                  height={40}
                  width={40}
                />
              </a>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">{blog.author}</p>
                <p className="text-gray-400 dark:text-gray-300">
                  {new Date(blog.date).toLocaleDateString("en", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  - {blog.read} read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
