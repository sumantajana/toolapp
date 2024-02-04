const menuList = [
    { title: 'Dashboard', icon: 'tachometer', trigger: '/' },
    {
        title: 'Category', icon: 'th-list', trigger: [
            { title: 'Main Category', trigger: '/mainCategory' },
            { title: 'Sub Category', trigger: '/subCategory' }
        ]
    },
    { title: 'Chat', icon: 'comments', trigger: '/chat' }
]
export default menuList;