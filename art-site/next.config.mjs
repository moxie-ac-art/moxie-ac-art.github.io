/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    assetprefix: isProd ? '/' : '',
    basePath: isProd ? '' : '',
    output: 'export'
};

export default nextConfig;
