module.exports = {
  dest: 'jypblue',
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JypBlue',
      description: '个人博客，前端笔记'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'jypblue/blog',
    editLinks: false,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '笔记',
            link: '/note/',
          },
          {
            text: '算法',
            link: '/leetcode/'
          },
          // {
          //   text: '默认主题配置',
          //   link: '/default-theme-config/'
          // }
        ],
        sidebar: {
          '/note/': genSidebarConfig('笔记'),
          '/leetcode/': genSidebarLeetCodeConfig('算法')
        }
      }
    }
  }
}

// note
function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '', // real1px
        'gauss-fuzzy',
        'h5-layout',
        'h5-pits',
        'algorithm',
        'gulp-res-zip',
        'gulp-sass',
        'node-mongodb',
        'node-mysql',
        'webpack-config',
      ]
    }
  ]
}
// LeetCode
function genSidebarLeetCodeConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        '1_Two_Sum',
        '2_Add_Two_Numbers',
        '3_Longest_Substring_Without_Repeating_Characters',
        '4_Median_of_Two_Sorted_Arrays',
        '5_Longest_Palindromic_Substring',
        '6_ZigZag_Conversion',
        '7_Reverse_Integer',
        '8_String_to_Integer',
        '9_Palindrome_Number',
        '10_Regular_Expression_Matching',
        '11_Container_With_Most_Water',
        '12_Integer_to_Roman',
        '13_ Roman_to_Integer',
        '14_Longest_Common_Prefix',
        '15_3Sum',
        '16_3Sum_Closest',
        '17_Letter_Combinations_of_a_Phone_Number',
        '18_4Sum',
        '19_Remove_Nth_Node_From_End_of_List',
        '39_Combination_Sum',
        '70_Climbing_Stairs',
        '77_Combinations',
        '100_Same_Tree',
        '115_distinct_subsequencesmd',
        '131_Palindrome_Partitioning',
        '149_Max_Points_on_a_Line',
        '152_Maximum_Product_Subarray',
        '168_Excel_Sheet_Column_Title',
        '171_Excel_Sheet_Column_Number',
        '221_Maximal_Square',
        '273_Integer_to_English_Words',
        '290_Word_Pattern',
        '310_Minimum_Height_Trees',
        '321_Create_Maximum_Number',
        '330_Patching_Array',

      ]
    }
  ]
}
