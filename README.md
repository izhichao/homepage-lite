# Homepage Lite —— A very simple homepage

[Demo](https://link.zhichao.org/homepage)

Download `index.html` `index.css` `data.js` `vue.global.prod.js`, edit the `data.js` file, `services` corresponds to links with icon and `bookmarks` corresponds to links without icon.The types are as follows:

```ts
interface Service {
  text: string;
  href: string;
  icon: string;
  target?: string;
}

interface Bookmark {
  text: string;
  href: string;
  target?: string;
}
```

---

# Homepage Lite —— 一个非常简陋的引导页

[效果演示](https://link.zhichao.org/homepage)

下载 `index.html` `index.css` `data.js` `vue.global.prod.js`，编辑 `data.js` 文件，其中 `services` 对应的是有 icon 的链接，`bookmarks` 则对应的是无 icon 的链接。其类型如下：

```ts
interface Service {
  text: string;
  href: string;
  icon: string;
  target?: string;
}

interface Bookmark {
  text: string;
  href: string;
  target?: string;
}
```
