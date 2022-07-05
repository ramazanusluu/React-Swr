import React, { useState } from "react";
import useSWR from "swr";

const endpoint = "http://localhost:3000/videos";

function ConditionalFetching() {
  const [shouldFetch, setShouldFetch] = useState(true);
  const { data, error } = useSWR(() => (shouldFetch ? endpoint : null));

  if (error) {
    return <div>failed to load</div>;
  }
  //   if (!data) {
  //     return <div>loading...</div>;
  //   }
  return (
    <div>
      <h1>Conditional Fetching</h1>
      <br />
      <hr />
      <br />
      <button className="button" onClick={() => setShouldFetch(true)}>
        Keep
      </button>
      <button className="button" onClick={() => setShouldFetch(false)}>
        Leave
      </button>
      <br />
      <br />
      {data &&
        data.map((video) => (
          <h3 key={video.id}>
            {video.id}-{video.title}
          </h3>
        ))}
    </div>
  );
}

export default ConditionalFetching;
