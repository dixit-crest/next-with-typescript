import { useRouter } from "next/router";
import React from "react";

const ProjectDetail = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>The id is {query.id}</h1>
    </div>
  );
};

export default ProjectDetail;
