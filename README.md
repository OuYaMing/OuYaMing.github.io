# Yaming Ou · Academic Homepage

主页：<https://ouyaming.github.io/>

直接使用 [KID-7391/KID-7391.github.io](https://github.com/KID-7391/KID-7391.github.io) 的原始 AcadHomepage 模板，源码版本 `f1cb0010bace96d9b3dbc5f6bab4bb288ea10798`。保留原模板的字体、字号、布局、Sass、论文 paper-box 组件、图标字体和导航脚本，只替换个人内容及资源路径。原模板许可见 [LICENSE.reference-template](LICENSE.reference-template)，旧站许可见 [LICENSE](LICENSE)。

## 内容维护

- `_pages/about.md`：个人介绍、主页章节与学术服务。
- `_data/home.json`：论文、动态、奖项及项目资料。
- `_data/navigation.yml`：顶部单页导航。
- `_config.yml`：姓名、邮箱、机构、照片和学术账号。
- `_pages/news.md`：完整动态存档。
- `assets/css/main.scss` 与 `_sass/`：参考站原始样式；正文字体为 `Trebuchet MS, Helvetica, sans-serif`。

个人论文、视频、动画和项目文件继续保留在原目录。旧论文详情、CV 和项目页继续可访问；`/publications/` 跳转到主页论文区。`_layouts/legacy-default.html` 用于兼容原有多页内容。

未配置他人的 Google Analytics 或学术统计账号。

## 本地运行

```sh
bundle install
bundle exec jekyll serve
```

访问 <http://127.0.0.1:4000/>。
