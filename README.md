# 青农场景 · 中文学术主页 Demo

基于 [Academic Pages](https://github.com/academicpages/academicpages.github.io) 的中文适配版本，保留 Jekyll、Markdown 和 GitHub Pages 工作方式。

**在线预览：https://maoggge.github.io/qau-academic-demo/**

## 示例声明
非青岛农业大学官方网站，未获得学校背书，不使用官方校徽。人物、成果、项目、成员、课程及招生内容均为虚构或占位。叶片图标为本站原创通用农业图形。学校官网链接仅用于提供官方信息入口。

## 日常更新
- `_pages/about.md`：首页介绍、研究方向与动态
- `_pages/publications.html`：论文成果
- `_pages/portfolio.html`：科研项目
- `_pages/teaching.html`：教学工作
- `_pages/team.md`：团队成员
- `_pages/recruitment.md`：招生说明
- `_pages/cv.md`：个人履历
- `_layouts/qau.html`：公共中文界面和教师侧栏
- `_data/navigation.yml`：中文导航
- `assets/css/qau.css`、`tokens.css`：排版和配色
- `_config.yml`：域名、子路径和全站信息

无需依赖外部字体或图片服务。手机端自动调整为顶部教师简介和折行导航。招生页没有表单，不收集个人信息。

## 部署
GitHub Pages 使用 master 分支根目录构建。推送更新后，GitHub 自动构建发布。迁移到其他仓库时修改 `_config.yml` 的 url、baseurl、repository，以及布局、README 中的仓库链接。

本地预览：安装兼容的 Ruby / Bundler 后执行 `bundle install` 和 `bundle exec jekyll serve`。

## 上游与许可
保留上游 LICENSE 和原模板文件。未使用的上游示例通过 `_config.yml` 的 exclude 排除，不会进入演示站。此次为中文 Demo 适配，未逐一翻译上游开发文档和所有可选功能。Academic Pages 源自 Minimal Mistakes，使用 MIT License；修改与分发请保留许可声明。
