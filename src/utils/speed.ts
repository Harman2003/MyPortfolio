export const speedFactor = (windowWidth: number) => {
  return windowWidth < 600
    ? 0.8
    : windowWidth < 1000
    ? 0.8
    : windowWidth < 1600
    ? 1
    : 1.4;
};
