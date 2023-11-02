/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    'app-env': process.env.NEXT_PUBLIC_APP_ENV,
  },
}
