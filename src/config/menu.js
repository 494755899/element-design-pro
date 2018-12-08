export default [
  {
    name: '分类',
    id: '1',
    icon: 'el-icon-date',
    children: [
      {
        name: '产品分类',
        path: '/productClass',
        id: '1-1'
      },
      {
        name: '风格分类',
        path: '/typeClass',
        id: '1-2'
      },
      {
        name: '返回顶部试验',
        id: '10',
        children: [
          {
            name: '第一个子路由',
            path: '/scrollClass/first'
          },
          {
            name: '第二个子路由',
            path: '/scrollClass/second'
          }
        ]
      }
    ]
  },
  {
    name: 'text',
    id: '2',
    icon: 'el-icon-goods',
    children: [
      {
        name: '又',
        path: '/text'
      }
    ]
  },
  {
    name: '分类2',
    id: '3',
    icon: 'el-icon-news',
    children: [
      {
        name: '又',
        path: '/a/f'
      }
    ]
  },
  {
    name: '分类2',
    icon: 'el-icon-message',
    id: '4',
    children: [
      {
        name: '又',
        path: '/a/e'
      }
    ]
  },
  {
    name: '分类2',
    icon: 'el-icon-refresh',
    id: '5',
    children: [
      {
        name: '又',
        path: '/a/d'
      }
    ]
  },
  {
    name: '分类2',
    icon: 'el-icon-setting',
    id: '6',
    children: [
      {
        name: '又',
        path: '/a/c'
      }
    ]
  },
  {
    name: '分类2',
    icon: 'el-icon-edit-outline',
    id: '7',
    children: [
      {
        name: '又',
        path: '/a/b'
      }
    ]
  },
  {
    name: '分类2',
    icon: 'el-icon-location-outline',
    id: '8',
    children: [
      {
        name: '又',
        path: '/a/a'
      }
    ]
  }
]
