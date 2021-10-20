export const initialState = {
  user: null,
  newPlayLists: [],
  favPlayLists: [],
  genrePayLists: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_NEW_RELEASED_LIST":
      return {
        ...state,
        newPlayLists: action.playLists,
      };
    case "SET_FEATURED_LIST":
      return {
        ...state,
        favPlayLists: action.playLists,
      };
    case "SET_GENRE_LIST":
      return {
        ...state,
        favPlayLists: action.playLists,
      };
    default:
      return state;
  }
};

export default reducer;
