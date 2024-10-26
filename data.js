const servicesCollapse = [false];
const bookmarksCollapse = [false, false];

const services = {
  平台: [
    {
      text: '博客',
      href: 'https://zhichao.org',
      icon: './icons/zhichao.png'
    },
    {
      text: 'Github',
      href: 'https://github.com/izhichao',
      icon: 'https://cdn.jsdelivr.net/gh/xushier/HD-Icons/border-radius/Github_A.png'
    },
    {
      text: '知乎',
      href: 'https://www.zhihu.com/people/24-74-89-56',
      icon: './icons/zhihu.png'
    },
    {
      text: '什么值得买',
      href: 'https://zhiyou.smzdm.com/member/7192993349',
      icon: './icons/smzdm.png'
    },
    {
      text: 'CSDN',
      href: 'https://blog.csdn.net/zc_mk',
      icon: './icons/csdn.png'
    },
    {
      text: '公众号',
      href: 'https://zhichao.org/wechat.png',
      icon: './icons/wechat.png'
    }
  ]
};

const bookmarks = {
  项目演示: [
    { text: 'VitePress 极简主题', href: 'https://link.zhichao.org/vitepress' },
    { text: 'Homepage', href: 'https://link.zhichao.org/homepage' },
    { text: '氢记账', href: 'https://link.zhichao.org/account' },
    { text: '互助圈', href: 'https://link.zhichao.org/zone' },
    { text: '互助圈(后台)', href: 'https://link.zhichao.org/zone/admin' }
  ],
  项目仓库: [
    { text: 'VitePress 极简主题', href: 'https://github.com/izhichao/vitepress-theme-minimalism' },
    { text: 'Homepage', href: 'https://github.com/izhichao/homepage-lite' },
    { text: '氢记账', href: 'https://github.com/izhichao/hydrogen-account' },
    { text: '互助圈', href: 'https://github.com/izhichao/mutual-aid-zone' },
    { text: '互助圈(后台)', href: 'https://github.com/izhichao/mutual-aid-zone-admin' }
  ]
};

function addTarget(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key].forEach((item) => {
        if (!('target' in item)) {
          item.target = '_blank';
        }
      });
    }
  }
  return obj;
}

addTarget(services);
addTarget(bookmarks);
