// fetch all quran surah with surah ayahs from live api and show in the page

import React, { useEffect, useState } from "react";

const Quran = () => {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://api.alquran.cloud/v1/quran/quran-uthmani"
      );
      const data = await result.json();
      setSurah(data.data.surahs);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Quran</h1>
          <ul>
            {surah.map((surah) => (
              <li key={surah.number}>
                <h2>{surah.number}</h2>
                <h3>{surah.name}</h3>
                <p>{surah.englishName}</p>
                <p>{surah.englishNameTranslation}</p>
                <p>{surah.revelationType}</p>
                <p>{surah.numberOfAyahs}</p>
                <p className="surah-ayahs">
                  {surah.ayahs.map((ayah) => (
                    <p>{ayah.text}</p>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Quran;
