/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
const addNode = (graph, node) => {
  graph.set(node, {
    in: new Set(),
    out: new Set()
  });
};

const connectNodes = (graph, departure, arrival) => {
  graph.get(departure).out.add(arrival);
  graph.get(arrival).in.add(departure);
};

const buildGraphFromEdges = (edges) =>
  edges.reduce((graph, { departure, arrival }) => {
    if (!graph.has(departure)) {
      addNode(graph, departure);
    }

    if (!graph.has(arrival)) {
      addNode(graph, arrival);
    }

    connectNodes(graph, departure, arrival);

    return graph;
  }, new Map());

const buildPath = (arrival, path) => {
  const result = [];

  while (path.has(arrival)) {
    const departure = path.get(arrival);
    result.push({
      departure,
      arrival
    });
    arrival = departure;
  }

  return result.reverse();
};

const findPath = (deals, departure, arrival) => {
  const graph = buildGraphFromEdges(deals);
  if (!graph.has(departure)) {
    throw new Error('Unknown departure.');
  }

  if (!graph.has(arrival)) {
    throw new Error('Unknown arrival.');
  }

  const queue = [departure];
  const visited = new Set();
  const path = new Map();

  while (queue.length > 0) {
    const start = queue.shift();

    if (start === arrival) {
      return buildPath(start, path);
    }

    for (const next of graph.get(start).out) {
      if (visited.has(next)) {
        continue;
      }

      if (!queue.includes(next)) {
        path.set(next, start);
        queue.push(next);
      }
    }

    visited.add(start);
  }

  return null;
};

module.exports = findPath;
