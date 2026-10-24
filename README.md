# ![logo](public/logo.png) Tasks.md
一个自托管、基于 Markdown 文件的任务管理看板。


![Demo](./public/demo.gif)

## ⭐ 特性
- 在现代且响应式的界面中创建卡片、通道和标签；
- 卡片以 Markdown 文件形式保存；
- 只需一个 Docker 镜像即可轻松安装；
- 浅色/深色主题与操作系统设置同步；
- 高度可定制，自带 3 套默认配色主题（[Adwaita](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/named-colors.html)、[Nord](https://www.nordtheme.com/) 和 [Catppuccin](https://github.com/catppuccin/catppuccin)）；
- 支持基于子路径的反向代理，通过环境变量设置基础路径；
- 可安装为 PWA；
- 多语言支持，自动检测浏览器语言，并按用户持久保存。

## 从 2.X.X 升级到 3.X.X
如果你正在运行第 2 版 Tasks.md 的 Docker 容器并希望升级到第 3 版，请按照[这些说明](/migration-guide.md)操作，因为需要做一些调整才能正常工作。

## 🐋 安装
### Docker
粘贴以下命令：
```
docker run -d \
  --name tasks.md \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TITLE="" \
  -e BASE_PATH="" \
  -e LOCAL_IMAGES_CLEANUP_INTERVAL=1440 \
  -p 8080:8080 \
  -v /path/to/tasks/:/tasks/ \
  -v /path/to/config/:/config/ \
  --restart unless-stopped \
  baldissaramatheus/tasks.md
```
删除你不需要的环境变量（它们都是可选的，建议保留 `PUID` 和 `PGID`），把 `/path/to/something` 替换为你文件系统中实际存在的目录，然后执行。环境变量说明如下：
- `PUID` 和 `PGID`：拥有这些文件和目录的用户 ID 与组 ID。在 Linux 发行版中，你可以在终端运行 `id` 查看自己用户的 UID 和 GID，通常两者都是 `1000`。如果不给这两个变量赋值，Docker 会以 root 身份创建所有文件和目录。更多信息见[这里](https://docs.linuxserver.io/general/understanding-puid-and-pgid/)；
- `TITLE`：访问根路径时，显示在页头下方以及浏览器标签页中的名称；
- `BASE_PATH`：URL 中的基础路径。如果你要通过基于子路径的反向代理运行应用，就使用这个变量。注意：`BASE_PATH` 设为 "/" 以外的值时 PWA 无法工作；
- `LOCAL_IMAGES_CLEANUP_INTERVAL`：每隔一定时间，应用会删除所有未被任何任务引用的本地图片。该变量以分钟为单位控制清理间隔，默认值为 1440（正好 24 小时）。设为 0 可禁用清理。


### docker-compose
```
version: "3"
services:
  tasks.md:
    image: baldissaramatheus/tasks.md
    container_name: tasks.md
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - /path/to/tasks:/tasks
      - /path/to/config:/config
    restart: unless-stopped
    ports:
      - 8080:8080
```
变量和卷的配置请参考上面的 Docker 小节。


### 源码
用 `git clone --recursive` 克隆仓库，分别在 `/frontend` 和 `/backend` 目录各开一个终端，然后在两个目录中都运行 `npm install` 和 `npm start`。环境变量在两个目录的 `package.json` 文件中设置，与上面 Docker 小节列出的相同，另外还有用于配置目录和任务目录路径的 `CONFIG_DIR` 和 `TASKS_DIR`。

## 🎨 自定义
你可以通过 `custom.css`（Docker 部署时位于 `/config` 目录内）自定义应用的 CSS。你可以把默认的 `adwaita` 主题换成 `nord` 或 `catppuccin`，也可以自行修改。自定义应用最简单的方式是使用现有的颜色变量（详见[下文](#颜色变量)）；如果想做颜色替换以外的修改，可以参考 [index.css](frontend/src/stylesheets/index.css) 文件。

### 颜色变量
- `color-accent`：高亮颜色；
- `color-foreground`：与背景形成对比所需的前景元素，即文字颜色；
- `color-background-1`：主背景色，用作应用主页面的背景；
- `color-background-2`：比主背景高 1 层，用作编辑器代码块、对话框、弹出框、通道和页头的背景；
- `color-background-3`：比主背景高 2 层，用作卡片的背景；
- `color-background-4`：比主背景高 3 层，用作按钮和输入框的背景；
- `color-alt-1`：用作标签颜色、输入错误提示和已过期日期；
- `color-alt-2`：用作标签颜色；
- `color-alt-3`：用作标签颜色和当天日期；
- `color-alt-4`：用作标签颜色；
- `color-alt-5`：用作标签颜色；
- `color-alt-6`：用作标签颜色；
- `color-alt-7`：用作标签颜色；


## 📁 文件结构
Tasks.md 中目录和文件的组织方式非常简单。你在应用里添加的每个通道（lane）对应文件系统中的一个目录，每个任务对应一个文件。

#### 如果你的任务看板长这样：
![应用截图。共有 3 个通道：Backlog、Sprint 和 Done，其中 Done 里有一个名为 "Something something" 的文件](/public/directories-organization-1.png)

#### 那么你的文件应该是这样：
![文件管理器截图，显示 3 个文件夹：Backlog、Sprint 和 Done](/public/directories-organization-2.png)
![文件管理器截图，显示名为 "Done" 的文件夹，其中包含一个名为 "Something something" 的文件](/public/directories-organization-3.png)

子目录也可以作为独立项目打开。在上面的例子中，通过 `/backlog` 路径打开应用时，会把该目录当作一个不同的项目，拥有自己的通道和任务。

更多细节（以及它在 Obsidian 中的样子）见[这里](https://github.com/BaldissaraMatheus/Tasks.md/issues/49)。

## 💻 技术栈
为了在性能与可维护性之间取得良好平衡，应用使用 [SolidJS](https://github.com/solidjs/solid) 和 [Koa](https://github.com/koajs/koa) 构建；文本编辑使用 [Stacks-Editor](https://github.com/StackExchange/Stacks-Editor)，并使用 [serve-static](https://github.com/expressjs/serve-static) 原样提供 CSS 文件。

## 🔨 参与贡献
这是一个低维护项目。功能和支持的范围被刻意保持精简，以确保长期维护可行。提交修复 bug 和改善体验的 Issue 与 PR 完全没问题，但请不要提交会显著扩大项目范围的功能。

### 赞助
如果你喜欢这个项目，可以考虑一次性捐款[成为赞助者](https://github.com/sponsors/BaldissaraMatheus)！
