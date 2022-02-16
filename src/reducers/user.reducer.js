import { GET_USER, ADD_USER_LIKE } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.Payload;
    case ADD_USER_LIKE:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            likes: action.payload.likes,
          };
        } else return user;
      });
    default:
      return state;
  }
}