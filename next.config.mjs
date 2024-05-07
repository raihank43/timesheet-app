import withTM from "next-transpile-modules";

/** @type {import('next').NextConfig} */
const nextConfig = withTM(["sequelize"])({
  // any other Next.js config here
});

export default nextConfig;
