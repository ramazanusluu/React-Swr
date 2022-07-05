import React from "react";
import useSWR from "swr";

const endpoint = "http://localhost:3000/videos";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
//! Global olarak src/index.js içerinde fetcher fonksiyonu tanımlandı.

function QuickStart() {
  const { data, isValidating, error } = useSWR(endpoint);

  console.log({ isValidating, data });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>Quick Start</h1>
      <hr />
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
