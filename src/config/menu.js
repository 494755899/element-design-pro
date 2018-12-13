export default [
  {
    name: '表格筛选',
    id: '1',
    icon: 'el-icon-date',
    children: [
      {
        name: '基础表格筛选',
        path: '/Form_baseForm',
        id: '1-1'
      },
      {
        name: '分页表格筛选',
        path: '/Form_complexForm',
        id: '1-2'
      },
      {
        name: '高级表格筛选',
        path: '/Form_editForm',
        id: '1-3'
      },
      {
        name: '混元霹雳手',
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
  }
]
