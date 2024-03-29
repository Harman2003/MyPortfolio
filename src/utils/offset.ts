export const offset = (windowWidth: number) => {
  return windowWidth < 1600 ? 220 : windowWidth < 1800 ? 320 : 400;
};
