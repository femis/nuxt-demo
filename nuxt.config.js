module.exports = {
    head: {
        title: 'hello starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: ['element-ui/lib/theme-chalk/index.css'],
    plugins:[
        {
            src:'~/plugins/element-ui',
            ssr:true
        }
    ],
    build: {
        vendor: ['axios'],
        extend(config, ctx) {}
    }
}
