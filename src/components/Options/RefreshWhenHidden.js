import React from "react";
import useSWR from "swr";
import axios from "axios";
import OptionsNavbar from "../Navbar/OptionsNavbar";

const endpoint = "http://localhost:3000/videos";

const fetcher = (url) =>
  axios.get(url).then((res) => {
    console.log("Working");
    return res.data;
  });

function RefreshWhenHidden() {
  const { data, error } = useSWR(endpoint, fetcher, {
    refreshInterval: 2,
    refreshWhenHidden: true,
    //? pencere görünmez olduğunda yoklama
    //! refreshInterval etkinleştirildiğinde kullanılır.
  });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <OptionsNavbar />
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

export default RefreshWhenHidden;
