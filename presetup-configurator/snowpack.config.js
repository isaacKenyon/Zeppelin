module.exports = {
  mount: {
    src: "/",
  },
  buildOptions: {
    out: 'public'
  },
  plugins: ["@snowpack/plugin-typescript"],
};
