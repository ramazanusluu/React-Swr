import React from "react";
import useSWR from "swr";

function Page({ index }) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=${index}&_limit=5`
  );
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>
            {item.id}-{item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Page;
