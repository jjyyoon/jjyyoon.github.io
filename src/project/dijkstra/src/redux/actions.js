import { generateNodes, generateEdges, findTheShortestPath } from "../helpers";

export const generateGraph = (num, maxX, maxY) => {
  const nodes = generateNodes(num, maxX, maxY);

  return {
    type: "GENERATE_GRAPH",
    nodes,
    edges: generateEdges(nodes)
  };
};

export const updateNode = (idx, x, y) => {
  return (dispatch, getState) => {
    const { nodes } = getState().graph;
    nodes[idx] = { ...nodes[idx], x, y };

    return dispatch({ type: "UPDATE_NODE", nodes });
  };
};

const calcEdges = (nodes, edges, i, all) => {
  const { x, y } = nodes[i];

  edges[i].forEach((edge, j) => {
    if (edge && (!all || (all && i < j))) {
      const target = nodes[j];
      const r = Math.hypot(target.x - x, target.y - y);
      edges[i][j] = r;
      edges[j][i] = r;
    }
  });

  return edges;
};

export const updateEdges = idx => {
  return (dispatch, getState) => {
    let { nodes, edges } = getState().graph;
    edges = calcEdges(nodes, edges, idx, false);

    return dispatch({ type: "UPDATE_EDGES", edges });
  };
};

export const updateGraph = (forX, forY) => {
  return (dispatch, getState) => {
    let { nodes, edges } = getState().graph;

    nodes.forEach((node, idx) => {
      nodes[idx] = { ...nodes[idx], x: node.x * forX, y: node.y * forY };
    });

    for (let i = 0; i < edges.length - 1; i++) {
      edges = calcEdges(nodes, edges, i, true);
    }

    return dispatch({ type: "UPDATE_GRAPH", nodes, edges });
  };
};

export const setResult = (source, target) => {
  return (dispatch, getState) => {
    const { edges } = getState().graph;
    const result = findTheShortestPath(edges, source.id, target.id);

    let path = null;
    let shown = false;

    if (result[target.id]) {
      path = result[target.id].path;
      shown = true;
    }

    return dispatch({
      type: "SET_RESULT",
      source: source.label,
      target: target.label,
      path,
      shown
    });
  };
};

export const resetResult = () => {
  return (dispatch, getState) => {
    const { source, target } = getState().result;

    if (source && target) {
      return dispatch({ type: "RESET_RESULT" });
    }
  };
};

export const toggleResultShown = () => ({ type: "TOGGLE_RESULT_SHOWN" });
