import React from "react";
import useSWR from "swr";
import OptionsNavbar from "../Navbar/OptionsNavbar";

const endpoint = "http://localhost:3000/videos";

function RevalidateOnFocus() {
  const { data, isValidating, error } = useSWR(endpoint, {
    revalidateOnFocus: false,
  });

  console.log({ isValidating, data });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <OptionsNavbar />
      <h1>RevalidateOnFocus</h1>
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

export default RevalidateOnFocus;
