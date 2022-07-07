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
//? Bu işlemi anlayabilmek log atıyoruz.

function RefreshInterval() {
  const { data, error } = useSWR(endpoint, fetcher, {
    refreshInterval: 2, //refreshInterval: 0 => varsayılan olarak devre dışı
    //? refreshInterval verilen sürede git veriyi yakala!
  });
  //* 2 sn'de bir yap bu işlemi!
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <OptionsNavbar />
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
