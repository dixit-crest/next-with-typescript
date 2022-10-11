import Image from "next/image";
import React from "react";
import ProfileStrip from "../../components/common/ProfileStrip";
import { BlogProps } from "../../types";
import { api } from "../../util";

interface BlogComponentProps {
  blog: BlogProps;
}

const ReadBlogPage = ({ blog }: BlogComponentProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-3/2 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            {blog.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
            {blog.content}
          </p>
          <ProfileStrip name={blog.author} authorUsername={blog.authorUsername} />
          <div className="flex mt-8">
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-2/1 relative">
          <Image
            src={blog.image}
            width={400}
            height={400}
            className="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    console.log(context.params.slug);

    const { data } = await api.get("blogs");
    const blogs: BlogProps[] = data;
    const blog = blogs.find((blog) => blog.slug === context.params.slug);

    if (!context.params.slug)
      return {
        notFound: true,
      };

    return {
      props: {
        blog: blog,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default ReadBlogPage;
