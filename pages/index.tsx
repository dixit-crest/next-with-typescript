import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Blog from "../components/common/Blog";
import Basic from "../components/layout/Basic";
import { BlogProps } from "../types";
import { api } from "../util";

export interface HomePageProps {
  blogs: BlogProps[];
}

const Home = ({ blogs }: HomePageProps) => {
  if(!blogs) return <h2>Loading..</h2>
  return (
    <Basic>
      <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Lastest articles
            </p>
            <p className="text-2xl font-light text-gray-400">
              All article are verified by 2 experts and valdiate by the CTO
            </p>
          </div>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog.slug} />
          ))}
        </div>
      </div>
    </Basic>
  );
};

export async function getStaticProps() {
  console.log("GET STATIC PROPS CALLED");

  try {
    const response = await api.get("/blogs");
    return {
      props: {
        blogs: response.data,
      },
      revalidate: 5,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Home;
