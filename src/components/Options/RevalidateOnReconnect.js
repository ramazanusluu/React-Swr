import React from "react";
import useSWR from "swr";
import OptionNavbar from "../Navbar/OptionsNavbar";

const endpoint = "http://localhost:3000/videos";

function RevalidateOnReconnect() {
  const { data, error } = useSWR(endpoint, {
    revalidateOnReconnect: true,
    //? revalidateOnReconnect: tarayıcı bir ağ bağlantısını yeniden kazandığında otomatik olarak yeniden doğrula
  });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <OptionNavbar />
      <h1>RevalidateOnReconnect</h1>
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

export default RevalidateOnReconnect;
