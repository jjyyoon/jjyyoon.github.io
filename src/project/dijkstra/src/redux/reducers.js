import { combineReducers } from "redux";

const graph = (state = { nodes: null, edges: null }, action) => {
  switch (action.type) {
    case "GENERATE_GRAPH":
    case "UPDATE_GRAPH":
      return {
        ...state,
        nodes: action.nodes,
        edges: action.edges
      };
    case "UPDATE_NODE":
      return {
        ...state,
        nodes: action.nodes
      };
    case "UPDATE_EDGES":
      return {
        ...state,
        edges: action.edges
      };
    default:
      return state;
  }
};

const INITIAL_STATE = { source: null, target: null, path: null, shown: false };

const result = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_RESULT":
      return {
        ...state,
        source: action.source,
        target: action.target,
        path: action.path,
        shown: action.shown
      };
    case "RESET_RESULT":
      return INITIAL_STATE;
    case "TOGGLE_RESULT_SHOWN":
      return {
        ...state,
        shown: !state.shown
      };
    default:
      return state;
  }
};

export default combineReducers({ graph, result });
