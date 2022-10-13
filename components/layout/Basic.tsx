import Head from "next/head";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}
const Basic = ({ children, title, description }: LayoutProps) => {
  return (
    <React.Fragment>
      <div className="min-h-screen">
        <Head>
          <title>{title || "D - Blogs"}</title>
          <meta
            name="description"
            content={description || "Read more programming blogs here"}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Basic;
