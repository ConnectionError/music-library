import React from "react";

const Songs = ({ favPlayLists, newPlayLists, genrePayLists }) => {
  console.log({ favPlayLists, newPlayLists, genrePayLists });
  //   FavList code
  if (favPlayLists) {
    return (
      <>
        <h1>Featured Playlists:</h1>
        <div className="overflow-hidden">
          <div className="flex">
            {favPlayLists.playlists &&
              favPlayLists.playlists.items.map((song) => (
                <div key={song.id} className="">
                  <img
                    src={song.images[0].url}
                    width="50"
                    alt={song.description}
                  />
                  <p>{song.description}</p>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }

  // New Release code
  else if (newPlayLists) {
    return <div>code 2</div>;
  }

  // New genre code
  else if (genrePayLists) {
    return <div>code 3</div>;
  }
  return <div>Songs component</div>;
};

export default Songs;
