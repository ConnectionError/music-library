import "./App.css";
import Login from "./components/Login/Login";
import Body from "./components/Body/Body";
import { useEffect } from "react";
import { getTokenFromUrl } from "./Spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const token = hash.access_token;
    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token,
      });

      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getNewReleases().then((playLists) => {
        dispatch({
          type: "SET_NEW_RELEASED_LIST",
          playLists,
        });
      });

      spotify.getFeaturedPlaylists().then((playLists) => {
        dispatch({
          type: "SET_FEATURED_LIST",
          playLists,
        });
      });

      spotify.getAvailableGenreSeeds().then((playLists) => {
        dispatch({
          type: "SET_GENRE_LIST",
          playLists,
        });
      });
    }
    return () => {};
  }, [dispatch]);

  return (
    <div className="app">{token ? <Body spotify={spotify} /> : <Login />}</div>
  );
}

export default App;
