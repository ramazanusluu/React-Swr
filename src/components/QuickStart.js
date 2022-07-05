import React from "react";
import useSWR from "swr";

const endpoint = "http://localhost:3000/videos";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function QuickStart() {
  const { data, isValidating, error } = useSWR(endpoint, fetcher);

  console.log({ isValidating, data });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data &&
        data.map((video) => (
          <h3 key={video.id}>
            {video.id}-{video.title}
          </h3>
        ))}
    </div>
  );
}

export default QuickStart;
