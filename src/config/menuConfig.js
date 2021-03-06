 const menuList = [
    {
        title:'首页',
        key:'/home',
        icon:'pie-chart'
    },
    {
        title:'redux',
        key:'/redux',
        icon:'pie-chart'
    },
    {
        title:'关于自己',
        key:'/about',
        icon:'pie-chart'
    },
    {
        title:'商品',
        key:'/category',
        icon:'home',
        children:[
            {
                title:'品类管理',
                key:'/category',
                icon:'pie-chart'
            },
            {
                title:'商品管理',
                key:'/product',
                icon:'pie-chart'
            }
        ]
    },
    {
        title:'文章管理',
        key:'/article',
        icon:'home',
        children:[
            {
                title:'创建文章',
                key:'/article',
                icon:'pie-chart'
            },
            {
                title:'文章列表',
                key:'/article-list',
                icon:'pie-chart'
            },
            {
                title:'富文本编辑器',
                key:'/tinymce',
                icon:'pie-chart'
            },
            {
                title:'markdown编辑器',
                key:'/markdown',
                icon:'pie-chart'
            }
        ]
    },
    {
        title:'用户管理',
        key:'/user',
        icon:'pie-chart'
    }
]
export default menuList