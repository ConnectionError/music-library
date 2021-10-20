import React from "react";
import "./Songs.css";

const Songs = ({ favPlayLists, newPlayLists, genrePayLists }) => {
  console.log({ favPlayLists, newPlayLists, genrePayLists });
  //   FavList code
  if (favPlayLists) {
    return (
      <>
        <h1>Featured Playlists:</h1>
        <div className="overflow-auto">
          <div className="songs gap-3">
            {favPlayLists.playlists &&
              favPlayLists.playlists.items.map((song) => (
                <div key={song.id} className="cursor-pointer song">
                  <img
                    src={song.images[0].url}
                    width="50"
                    alt={song.description}
                  />
                  <p className="overflow-hidden">{song.description}</p>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }

  // New Release code
  else if (newPlayLists) {
    return (
      <>
        <h1>New Released Playlists:</h1>
        <div className="overflow-auto">
          <div className="songs gap-3">
            {newPlayLists.albums &&
              newPlayLists.albums.items.map((song) => (
                <div key={song.id} className="cursor-pointer song">
                  <img src={song.images[0].url} width="50" alt={song.id} />
                  <p className="overflow-hidden">{song.artists[0].name}</p>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }

  // New genre code
  else if (genrePayLists) {
    return (
      <>
        <h1>Genre Playlists:</h1>
        <div className="overflow-auto">
          <div className="songs gap-3">
            {genrePayLists.genres &&
              genrePayLists.genres.map((song, index) => (
                <div key={index} className="cursor-pointer song-genre">
                  {/* <img src={song.images[0].url} width="50" alt={song.id} /> */}
                  <p className="overflow-hidden">{song}</p>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
  return <div>Songs component</div>;
};

export default Songs;
