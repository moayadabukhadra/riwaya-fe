module.exports = {
    extends: [
        //...
        'plugin:@next/next/recommended',
    ],
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    // async rewrites() {
    //     return [
    //       {
    //         source: '/sitemap.xml',
    //         destination: '/sitemap.xml.js',
    //       },
    //     ];
    // }
}