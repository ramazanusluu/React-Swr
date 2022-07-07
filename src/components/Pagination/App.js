import React, { useState } from "react";
import Page from "./Page";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div>
      <Page index={pageIndex} />
      <div style={{ display: "none" }}>
        <Page index={pageIndex + 1} />
      </div>
      <button className="button" onClick={() => setPageIndex(pageIndex - 1)}>
        Previous
      </button>
      <button className="button" onClick={() => setPageIndex(pageIndex + 1)}>
        Next
      </button>
    </div>
    //* SWR'nin önbelleği nedeniyle, sonraki sayfayı önceden yükleme avantajına sahibiz. Sonraki sayfayı gizli bir div içinde oluşturuyoruz, böylece SWR bir sonraki sayfanın veri alımını tetikleyecektir. Kullanıcı bir sonraki sayfaya geçtiğinde, veriler zaten oradadır:
    //* Sadece 1 satır kod ile çok daha iyi bir UX elde ediyoruz. Kanca o useSWRkadar güçlüdür ki çoğu senaryo onun tarafından kapsanır.
  );
}

export default App;
