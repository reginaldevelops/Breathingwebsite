const nextConfig = {
  compiler: { styledComponents: true },
  output: "export",
  images: { unoptimized: true }, // nodig omdat image-optimalisatie niet werkt met export
};
module.exports = nextConfig;
