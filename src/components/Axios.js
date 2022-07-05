import React from "react";
import useSWR from "swr";
import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/users";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function Axios() {
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
            {video.id}-{video.name}
          </h3>
        ))}
    </div>
  );
}

export default Axios;
