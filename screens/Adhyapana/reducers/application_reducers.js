import { GET_APPLICATIONS, DELETE_APPLICATIONS } from "../actions/types";

export default (
  state = {
    applications: [],
  },
  action
) => {
  switch (action.type) {
    case GET_APPLICATIONS:
      return {
        applications: action.payload,
      };
    case DELETE_APPLICATIONS:
      return {
        applications: state.applications.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
