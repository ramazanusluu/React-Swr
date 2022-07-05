import React from "react";
import useSWR from "swr";
import axios from "axios";

const endpoint = "http://localhost:3000/videos";
const fetcher = (url) =>
  axios.get(url).then((res) => {
    console.log("Working");
    return res.data;
  });

function RefreshInterval() {
  const { data, error } = useSWR(endpoint, fetcher, {
    refreshInterval: 2,
  });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>RefsrehInterval Kullanımı</h1>
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

export default RefreshInterval;
