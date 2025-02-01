// next.config.mjs
export default {
  output: "export",  // Enables static export mode
  images: {
    unoptimized: true, // Fixes image optimization issues during export
  },
};
