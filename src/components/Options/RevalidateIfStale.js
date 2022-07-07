import React from "react";
import useSWR from "swr";
import OptionsNavbar from "../Navbar/OptionsNavbar";

const endpoint = "http://localhost:3000/videos";

function RevalidateIfStale() {
  //?   Eğer kaynak değişmez ise, bir daha yeniden doğrulama yaparsak bu asla değişmeyecek, onun için her türlü otomatik yeniden doğrulamayı devre dışı bırakabiliriz.
  const { data, error } = useSWR(endpoint, {
    revalidateIfStale: false,
    //? revalidateIfStale: eski veriler olsa bile otomatik olarak yeniden doğrula
    revalidateOnFocus: false,
    //? revalidateOnFocus: pencere odaklandığında otomatik olarak yeniden doğrula
    revalidateOnReconnect: false,
    //? tarayıcı bir ağ bağlantısını yeniden kazandığında otomatik olarak yeniden doğrula
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
      <h1>RevalidateIfStale</h1>
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

export default RevalidateIfStale;
