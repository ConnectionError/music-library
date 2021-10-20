import React from "react";
import { useDataLayerValue } from "../DataLayer";
import Songs from "./Songs/Songs";
import "./Library.css";

const Library = () => {
  const [{ newPlayLists, favPlayLists, genrePayLists }] = useDataLayerValue();
  // console.log(newPlayLists, favPlayLists, genrePayLists);
  return (
    <div className="library">
      Welcome
      <Songs favPlayLists={favPlayLists} />
      <Songs newPlayLists={newPlayLists} />
      <Songs genrePayLists={genrePayLists} />
    </div>
  );
};

export default Library;
