# 部署项目到GitHub Pages指南

## 前置条件
- 已安装Node.js和pnpm
- 已创建GitHub账号和仓库
- 本地已安装Git

## 部署步骤

### 1. 安装部署依赖
```bash
pnpm add -D gh-pages
```

### 2. 配置GitHub仓库
```bash
# 初始化Git仓库(如果尚未初始化)
git init

# 添加远程仓库
git remote add origin https://github.com/your-github-username/your-repo-name.git

# 添加所有文件并提交
git add .
git commit -m "Initial commit"
```

### 3. 修改部署配置
编辑package.json文件，将以下内容替换为您的GitHub信息：
```json
"homepage": "https://your-github-username.github.io/your-repo-name",
"build:client": "vite build --base=/your-repo-name/ --outDir dist",
```

### 4. 部署到GitHub Pages
```bash
# 推送代码到GitHub
git push -u origin main

# 执行部署命令
pnpm deploy
```

## 常见问题解决

### 部署后页面空白
- 确保package.json中的homepage和base路径配置正确
- 检查浏览器控制台是否有资源加载错误
- 确认GitHub仓库设置中的GitHub Pages源已设置为gh-pages分支

### 部署命令失败
- 确保已正确安装gh-pages依赖
- 检查是否有足够的权限推送到GitHub仓库
- 确认本地Git已正确配置用户信息

## 自动部署(可选)
可以通过GitHub Actions设置自动部署，在每次推送到main分支时自动更新网站。