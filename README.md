# Yaming Ou · Academic Homepage

个人学术主页：<https://ouyaming.github.io/>。使用 Jekyll，由 GitHub Pages 发布。

## 更新内容

- `_data/home.json`：导航、新闻、论文、教育与工作经历、奖项、项目。
- `_pages/about.md`：个人介绍与主页各章节。
- `_layouts/home.html`：主页结构与个人信息栏。
- `assets/css/home.css`：桌面与手机端排版。
- `assets/js/home.js`：导航当前位置提示；关闭 JavaScript 仍可使用链接与折叠列表。
- `_config.yml`：邮箱、学术主页链接及网站基本设置。

论文预览图位于 `images/research/`。原始论文、动画、视频和项目资料保留在各自目录，论文详情页链接继续可用。

新闻默认展示最近六条主要动态；更早动态、审稿消息、较早奖项及其他论文可展开查看。
`/publications/` 会跳转到主页论文区。

## 本地运行

安装 Ruby 和 Bundler 后：

```sh
bundle install
bundle exec jekyll serve
```

然后访问 <http://127.0.0.1:4000/>。

主页布局参考 [Peisong Wen 的个人主页](https://kid-7391.github.io/) 的简洁学术风格，保留本人的内容和研究配图。旧文章及项目详情继续使用原有 AcademicPages 模板，许可证见仓库中的 LICENSE 文件。
