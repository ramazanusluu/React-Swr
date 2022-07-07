import React from "react";
import useSWR from "swr";

const endpoint = "https://jsonplaceholder.typicode.com/users";

function Button() {
  const { mutate, data } = useSWR(endpoint, {
    refreshInterval: 5000,
  });

  const handleClick = () => {
    mutate({ Data: "Yeni veri" }, false);
    setTimeout(() => {
      mutate(data);
    }, 5000);
  };
  return (
    <div>
      <button className="button" onClick={handleClick}>
        Değiştir
      </button>
    </div>
  );
}

export default Button;
