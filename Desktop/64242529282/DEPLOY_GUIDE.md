 # 如何在GitHub上使用GitHub Pages显示静态页面

GitHub Pages是GitHub提供的静态网站托管服务，允许您直接从GitHub仓库托管静态HTML、CSS和JavaScript文件。以下是如何使用GitHub Pages在GitHub上显示静态页面的完整指南：

## 前置条件
- 已安装Node.js和pnpm
- 已创建GitHub账号和仓库
- 本地已安装Git

## 为什么node_modules文件不应提交到GitHub

在开发过程中，你可能会注意到项目根目录下有一个`node_modules`文件夹，里面包含了项目的所有依赖包。这个文件夹不应直接提交到GitHub，主要原因如下：

### 1. **体积过大**
`node_modules`文件夹通常包含成百上千个依赖文件，体积可能达到数百MB甚至GB级别，会显著增加仓库大小，影响克隆和推送速度。

### 2. **冗余信息**
所有依赖信息都已经记录在`package.json`和`pnpm-lock.yaml`文件中，任何人都可以通过这些文件重新安装完全相同版本的依赖。

### 3. **版本控制问题**
第三方依赖的代码不应该由你的项目仓库管理，它们有自己的版本控制和更新周期。

### 4. **安全考虑**
某些依赖可能包含敏感信息或编译后的二进制文件，不适合公开分享。

### 5. **标准开发实践**
这是JavaScript/TypeScript项目的行业标准做法，几乎所有项目都会忽略`node_modules`文件夹。

### 如何正确处理依赖

1. **使用.gitignore文件**
项目根目录下的`.gitignore`文件应该已经包含了对`node_modules`的忽略规则：
```
# 依赖
/node_modules
.pnp
.pnp.js
```

2. **安装依赖**
当克隆项目到新环境时，只需运行以下命令即可重新安装所有依赖：
```bash
pnpm install
```

3. **依赖更新**
需要更新依赖时，使用pnpm命令而不是手动修改`node_modules`：
```bash
# 更新所有依赖
pnpm update

# 更新特定依赖
pnpm update package-name
```

## 部署所需的关键文件

为确保GitHub Pages正常显示您的网站，以下文件是必需的，缺失可能导致网站无法正常构建或显示：

### 1. **构建和配置文件**
- `package.json`: 包含项目依赖和构建脚本，缺失将无法运行构建命令
- `vite.config.ts`: Vite构建配置，缺失将导致构建过程出错
- `tsconfig.json`: TypeScript配置，缺失将导致TypeScript编译错误
- `tailwind.config.js`: Tailwind CSS配置，缺失将导致样式异常

### 2. **源代码文件**
- `src/`: 包含所有React组件和页面代码，缺失将导致网站内容不完整
- `index.html`: 网站入口文件，缺失将导致404错误

### 3. **部署相关文件**
- `.github/workflows/`: 如果使用GitHub Actions自动部署，缺失将导致自动部署失败
- `deploy.yml`: 部署配置文件，缺失将导致部署命令无法正常执行

### 缺失文件的影响
- **构建失败**: 缺少配置文件会导致`pnpm build`命令失败，无法生成可部署的静态文件
- **内容不完整**: 缺少源代码文件会导致网站显示空白或功能缺失
- **样式异常**: 缺少Tailwind配置会导致样式错乱
- **404错误**: 缺少入口文件会导致GitHub Pages无法找到网站首页

## 部署步骤

### 1. 安装部署依赖
```bash
pnpm add -D gh-pages rimraf
```

> **注意**：`rimraf` 是一个跨平台的文件删除工具，用于替代Unix系统的`rm`命令，确保在Windows系统上也能正常工作。

### 2. 配置GitHub仓库
```bash
# 初始化Git仓库(如果尚未初始化)
git init

# 配置Git用户信息(首次提交必须配置)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 添加远程仓库
git remote add origin https://github.com/your-github-username/your-repo-name.git

# 检查文件状态
git status
# 此命令将显示所有已修改或未跟踪的文件
# 红色文件表示未暂存，绿色文件表示已暂存

# 添加文件到暂存区
# 添加所有文件
git add .
# 或者添加特定文件
# git add filename.ext

# 提交更改
git commit -m "Initial commit"
```

### 3. 修改部署配置
编辑package.json文件，将以下内容中的占位符替换为您的实际GitHub信息：

1. **找到您的GitHub信息**：
   - GitHub用户名：您的GitHub账号名称（例如：johnsmith）
   - 仓库名称：您在GitHub上创建的项目仓库名称（例如：my-website）

2. **修改package.json文件**：
   打开项目根目录下的`package.json`文件，找到并修改以下两行：

```json
"homepage": "https://your-github-username.github.io/your-repo-name",
"build:client": "vite build --base=/your-repo-name/ --outDir dist",
"deploy": "gh-pages -d dist"
```

3. **替换示例**：
   如果您的GitHub用户名是`johnsmith`，仓库名称是`my-website`，修改后应为：
```json
"homepage": "https://johnsmith.github.io/my-website",
"build:client": "vite build --base=/my-website/ --outDir dist",
```

> **重要提示**：请将 `your-github-username` 和 `your-repo-name` 替换为您的实际GitHub用户名和仓库名称！
> 
> **说明**：
> - `homepage`：指定网站部署后的访问URL（已更新为您的GitHub信息：https://kkk167y.github.io/wangzhan）
> - `--base`：设置网站的基础路径，必须与仓库名称一致
> - 修改后请保存文件

### 4. 部署到GitHub Pages
```bash
# 推送代码到GitHub
# 检查本地分支名称
git branch

# 如果分支不是main，重命名分支
git branch -M main

# 推送代码到GitHub
git push -u origin main


# 执行部署命令
pnpm deploy

# 验证部署是否成功创建gh-pages分支
git branch
# 你应该能看到列出的gh-pages分支
```

### 5. 配置GitHub仓库设置
> **注意**：在执行此步骤前，请确保已成功运行`pnpm deploy`命令并创建了gh-pages分支。如果看不到gh-pages分支选项，请先检查部署命令是否执行成功。

1. 打开你的GitHub仓库页面
2. 点击顶部导航栏中的 **Settings**
3. 在左侧边栏中找到并点击 **Pages**
4. 在 **Source** 部分:
   - 从下拉菜单中选择 **gh-pages** 分支（如果看不到此选项，请确保已完成步骤4中的部署命令）
   - 选择根目录 ("/ (root)")
   - 点击 **Save** 按钮

### 6. 验证部署
## 6. 查看已部署的静态页面

部署完成后，你可以通过以下方式访问并显示你的静态页面:

### 访问网站
- 网址格式: `https://your-github-username.github.io/your-repo-name`
- 在GitHub仓库的 **Settings > Pages** 页面顶部可以找到自动生成的网址
- 注意: 首次部署可能需要1-10分钟才能生效，请耐心等待

### 验证页面显示
1. 打开生成的网址
2. 确认页面内容正确显示
3. 检查页面布局和样式是否正常加载
4. 测试所有链接和交互功能

## 常见问题解决

### 部署后页面空白或404错误
这是GitHub Pages最常见的问题，按以下步骤排查：

1. **检查package.json配置** (关键步骤):
   ```json
   "homepage": "https://your-actual-username.github.io/your-actual-repo-name",
   "build:client": "vite build --base=/your-actual-repo-name/ --outDir dist",
   ```
   - 确保已将`your-actual-username`替换为您的GitHub用户名
   - 确保已将`your-actual-repo-name`替换为您的GitHub仓库名称
   - 仓库名称区分大小写，请确保与GitHub上完全一致

2. **验证gh-pages依赖安装**:
   ```bash
   # 确保gh-pages已安装
   pnpm list gh-pages
   # 如果未安装，重新安装
   pnpm add -D gh-pages
   ```

3. **检查构建输出**:
   ```bash
   # 查看dist目录是否有内容
   ls -la dist
   # 确保index.html存在
   cat dist/index.html | grep -i "<title>"
   ```

4. **检查GitHub Pages设置**:
   - 确认已选择`gh-pages`分支
   - 确认已选择根目录`/ (root)`
   - 点击"Save"按钮后查看是否有绿色成功提示

5. **检查浏览器控制台**:
   - 按F12打开开发者工具
   - 查看"Console"和"Network"标签页是否有404错误
   - 特别注意CSS和JS文件是否加载失败(通常是base路径设置错误)

### 无法访问GitHub Pages网站
- 确认仓库名称和用户名拼写正确
- 检查网址格式是否正确：`https://username.github.io/repo-name`
- 确保仓库是公开的(Public)，私有仓库需要GitHub Pro或以上账户才能使用GitHub Pages

### Git提交失败
- 确保已配置Git用户信息：`git config --global user.name "Your Name"` 和 `git config --global user.email "your.email@example.com"`
- 检查是否有文件被添加：`git status` 应该显示已暂存的文件
- 确保提交信息不为空

### "src refspec main does not match any"错误
这个错误通常表示本地没有名为main的分支或没有提交记录：
```bash
# 检查本地分支
git branch

# 如果没有main分支，创建并切换到main分支
git checkout -b main

# 或者重命名当前分支为main
git branch -M main
```

 ### 部署命令失败
- 确保已正确安装gh-pages依赖：`pnpm add -D gh-pages`
- 检查是否有足够的权限推送到GitHub仓库
- 确认本地Git已正确配置用户信息
- 尝试删除node_modules和dist目录后重新安装依赖：
  ```bash
  rm -rf node_modules dist
  pnpm install
  pnpm deploy
  ```

### "gh-pages分支不存在"错误
如果在GitHub仓库设置中找不到gh-pages分支选项，可能是部署命令没有成功执行：

1. **确保部署命令成功执行**：
  ```bash
  # 重新运行部署命令
  pnpm deploy
  ```

2. **检查是否有错误输出**：
   - 注意查看命令行中的错误信息
   - 常见问题包括网络问题、权限问题或配置错误

3. **手动创建gh-pages分支（如果上述方法都失败）**：
  ```bash
  # 创建并切换到gh-pages分支
  git checkout -b gh-pages
  # 创建一个空提交
  git commit --allow-empty -m "Initial gh-pages commit"
  # 推送到远程仓库
  git push -u origin gh-pages
  # 切换回主分支
  git checkout main
  # 再次运行部署命令
  pnpm deploy
  ```

## 部署项目到Gitee Pages指南

### 前置条件
- 已创建Gitee账号和仓库
- 本地已安装Git并配置Gitee访问

### 部署步骤

#### 1. 添加Gitee远程仓库
```bash
# 添加Gitee远程仓库
git remote add gitee https://gitee.com/your-gitee-username/your-repo-name.git

# 检查远程仓库配置
git remote -v
```

#### 2. 配置package.json
打开package.json文件，添加Gitee相关配置：
```json
"homepage": "https://your-gitee-username.gitee.io/your-repo-name",
"build:gitee": "vite build --base=/your-repo-name/ --outDir dist-gitee",
"deploy:gitee": "gh-pages -d dist-gitee -r https://gitee.com/your-gitee-username/your-repo-name.git -b gh-pages"
```

#### 3. 执行部署命令
```bash
# 构建Gitee版本
pnpm build:gitee

# 部署到Gitee Pages
pnpm deploy:gitee
```

#### 4. 配置Gitee仓库设置
1. 打开你的Gitee仓库页面
2. 点击顶部导航栏中的 **服务**
3. 在下拉菜单中找到并点击 **Gitee Pages**
4. 在部署设置中:
   - 选择 **gh-pages** 分支
   - 选择根目录 ("/")
   - 点击 **部署** 按钮

#### 5. 验证部署
部署成功后，你可以通过以下地址访问网站:
`https://your-gitee-username.gitee.io/your-repo-name`

> **注意**: Gitee Pages可能需要手动更新，每次代码变更后需重新运行部署命令并在Gitee Pages页面点击更新。

## 国内免费静态网站部署平台对比

| 平台 | 特点 | 免费额度 | 适合场景 | 访问速度(国内) |
|------|------|----------|----------|----------------|
| Gitee Pages | 国内访问快，GitHub Pages镜像功能 | 无限流量，支持自定义域名 | 个人博客、小型项目 | ★★★★★ |
| Coding Pages | 腾讯旗下，提供CI/CD功能 | 10GB存储空间，支持自定义域名 | 团队协作项目 | ★★★★☆ |
| 阿里云OSS+CDN | 稳定可靠，扩展性强 | 5GB存储空间，每月50GB流量 | 企业官网、流量较大的站点 | ★★★★★ |
| 腾讯云COS+CDN | 配置简单，控制台友好 | 50GB存储空间，每月10GB流量 | 个人项目、演示站点 | ★★★★☆ |
| Cloudflare Pages | 全球CDN，自动HTTPS | 无限项目，无流量限制 | 对访问速度要求不高的国际站点 | ★★★☆☆ |

## 自动部署(推荐)

通过GitHub Actions可以实现代码推送后自动部署到GitHub Pages，无需手动执行部署命令。

### 配置步骤

1. **创建部署配置文件**

项目中已添加自动部署配置文件 `.github/workflows/deploy.yml`，内容如下：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
      
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build project
        run: pnpm build
        
      - name: Setup Pages
        uses: actions/configure-pages@v5
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
        with:
          artifact_name: github-pages
```

2. **启用GitHub Pages**

1. 打开GitHub仓库页面
2. 点击 **Settings > Pages**
3. 在 **Build and deployment > Source** 部分，选择 **GitHub Actions**
4. 保存设置

3. **触发自动部署**

每次将代码推送到main分支时，部署工作流会自动触发：

```bash
git add .
git commit -m "Add automatic deployment"
git push origin main
```

您也可以在GitHub仓库的 **Actions** 标签页手动触发部署工作流。

### 查看部署状态

1. 打开GitHub仓库页面
2. 点击 **Actions** 标签
3. 选择最新的"Deploy to GitHub Pages"工作流
4. 查看部署进度和结果

## 其他国内部署平台详细指南

### Coding Pages部署

Coding Pages是腾讯云旗下的静态网站托管服务，提供稳定的国内访问速度和完整的CI/CD功能。

#### 前置条件
- 已注册Coding账号并创建项目
- 已安装Git并配置Coding访问

#### 部署步骤

1. **添加Coding远程仓库**
```bash
# 添加Coding远程仓库
git remote add coding https://e.coding.net/your-coding-username/your-project/your-repo.git

# 检查远程仓库配置
git remote -v
```

2. **修改部署配置**
编辑package.json文件，添加Coding相关配置：
```json
"deploy:coding": "gh-pages -d dist -r https://e.coding.net/your-coding-username/your-project/your-repo.git -b coding-pages"
```

3. **执行构建和部署命令**
```bash
# 构建项目
pnpm run build

# 部署到Coding Pages
pnpm deploy:coding
```

4. **配置Coding Pages**
1. 打开Coding项目页面，进入「代码」→「Pages服务」
2. 选择部署来源为「 coding-pages 」分支
3. 设置部署目录为根目录(/)
4. 点击「保存并部署」按钮

5. **访问网站**
部署成功后，您的网站将通过以下地址访问：
`https://your-coding-username.coding-pages.com/your-repo`

> **注意**: Coding Pages支持自定义域名，您可以在设置中添加自己的域名并进行DNS配置。

### 阿里云OSS部署

阿里云对象存储服务(OSS)可以用来托管静态网站，配合CDN可获得极佳的国内访问速度。

#### 前置条件
- 已注册阿里云账号并完成实名认证
- 已开通OSS服务

#### 部署步骤

1. **创建OSS Bucket**
1. 登录阿里云控制台，进入OSS服务
2. 点击「创建Bucket」
3. 填写Bucket名称，选择地域(建议选择离您目标用户最近的地域)
4. 设置读写权限为「公共读」
5. 其他设置保持默认，点击「确定」

2. **安装阿里云CLI工具并配置账号**
> **注意**：阿里云账号配置需要使用官方阿里云CLI工具，而非ali-oss SDK。


# 安装阿里云官方CLI（推荐方式）
## Windows系统
```bash
# 使用PowerShell安装（管理员模式）
Invoke-WebRequest -Uri https://aliyuncli.alicdn.com/aliyun-cli-windows-x64-latest.zip -OutFile aliyun-cli.zip
Expand-Archive -Path aliyun-cli.zip -DestinationPath C:\aliyun-cli
setx PATH "$env:PATH;C:\aliyun-cli"
```

## Mac/Linux系统
```bash
# 使用官方安装脚本
curl -fsSL https://get.aliyun.com/aliyun-cli/install.sh | bash
# 刷新环境变量
source ~/.bashrc
```

# 验证CLI安装
```bash
aliyun --version
```

如果安装成功，会显示类似 `aliyun-cli version 3.0.100` 的版本信息。

# 配置阿里云账号
```bash
aliyun configure
```

**获取AccessKey的步骤**:
1. 登录阿里云控制台: https://console.aliyun.com
2. 进入"AccessKey管理"页面: https://usercenter.console.aliyun.com/#/manage/ak
3. 点击"创建AccessKey"，完成安全验证
4. 保存生成的AccessKey ID和AccessKey Secret（仅显示一次）

**地域代码示例**:
- 北京: cn-beijing
- 上海: cn-shanghai
- 广州: cn-guangzhou
- 杭州: cn-hangzhou

# 验证配置是否成功
```bash
aliyun oss ls
```

## 常见错误及解决方法

### "aliyun: command not found"
- 确保阿里云CLI已正确安装并添加到系统PATH
- 尝试关闭终端并重新打开，或重启电脑

### "Invalid access key ID"
- 检查AccessKey ID和Secret是否正确输入
- 确保AccessKey具有OSS访问权限
- 尝试重新创建AccessKey并重新配置

### "No such bucket" 或 "AccessDenied"
- 检查地域配置是否与Bucket所在地域一致
- 确保账号具有访问该Bucket的权限
- 确认Bucket名称是否正确

### 网络问题
- 检查网络连接是否正常
- 尝试使用VPN或更换网络环境
- 检查防火墙设置是否阻止了阿里云CLI的网络访问

如果成功列出存储空间，则表示配置正确。

3. **创建部署脚本**
在项目根目录创建deploy-aliyun.js文件：
```javascript
const OSS = require('ali-oss');
const fs = require('fs');
const path = require('path');

// 配置OSS信息
const client = new OSS({
  region: 'your-region', // 例如：oss-cn-beijing
  accessKeyId: 'your-access-key-id',
  accessKeySecret: 'your-access-key-secret',
  bucket: 'your-bucket-name'
});

// 上传目录函数
async function uploadDir(dirPath, targetPath = '') {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await uploadDir(filePath, path.join(targetPath, file));
    } else {
      const objectPath = path.join(targetPath, file);
      await client.put(objectPath, filePath);
      console.log(`上传成功: ${objectPath}`);
    }
  }
}

// 执行上传
uploadDir('./dist')
  .then(() => console.log('所有文件上传完成'))
  .catch(err => console.error('上传失败:', err));
```

4. **修改package.json**
添加部署脚本：
```json
"deploy:aliyun": "node deploy-aliyun.js"
```

5. **构建并部署**
```bash
# 构建项目
pnpm run build

# 部署到阿里云OSS
pnpm deploy:aliyun
```

6. **配置静态网站托管**
1. 在OSS Bucket控制台，进入「基础设置」→「静态网站托管」
2. 点击「设置」，开启静态网站托管
3. 设置默认首页为index.html，错误页面为404.html
4. 点击「保存」

7. **配置CDN(可选)**
为提高访问速度，建议配置阿里云CDN加速：
1. 进入CDN控制台，添加加速域名
2. 源站设置为OSS Bucket的访问域名
3. 完成域名解析配置
4. 开启HTTPS证书

### 腾讯云COS部署

腾讯云对象存储(COS)提供了稳定可靠的静态网站托管服务，适合国内用户访问。

#### 前置条件
- 已注册腾讯云账号并完成实名认证
- 已开通COS服务

#### 部署步骤

1. **创建COS存储桶**
1. 登录腾讯云控制台，进入对象存储服务
2. 点击「创建存储桶」
3. 填写存储桶名称，选择地域
4. 设置访问权限为「公有读私有写」
5. 其他设置保持默认，点击「确定」

2. **安装腾讯云CLI工具**
```bash
# 安装腾讯云CLI
npm install -g cos-nodejs-sdk-v5
```

3. **创建部署脚本**
在项目根目录创建deploy-tencent.js文件：
```javascript
const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');

// 配置COS信息
const cos = new COS({
  SecretId: 'your-secret-id',
  SecretKey: 'your-secret-key'
});

// 上传目录函数
function uploadDir(dirPath, Bucket, Region, targetPath = '') {
  return new Promise((resolve, reject) => {
    const files = fs.readdirSync(dirPath);
    let completed = 0;
    
    if (files.length === 0) {
      resolve();
      return;
    }
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        uploadDir(filePath, Bucket, Region, path.join(targetPath, file))
          .then(() => {
            completed++;
            if (completed === files.length) resolve();
          })
          .catch(reject);
      } else {
        const Key = path.join(targetPath, file);
        cos.putObject({
          Bucket,
          Region,
          Key,
          Body: fs.createReadStream(filePath)
        }, (err) => {
          if (err) {
            console.error(`上传失败: ${Key}`, err);
            reject(err);
          } else {
            console.log(`上传成功: ${Key}`);
            completed++;
            if (completed === files.length) resolve();
          }
        });
      }
    });
  });
}

// 执行上传
uploadDir('./dist', 'your-bucket-name', 'ap-beijing')
  .then(() => console.log('所有文件上传完成'))
  .catch(err => console.error('上传失败:', err));
```

4. **修改package.json**
添加部署脚本：
```json
"deploy:tencent": "node deploy-tencent.js"
```

5. **构建并部署**
```bash
# 构建项目
pnpm run build

# 部署到腾讯云COS
pnpm deploy:tencent
```

6. **配置静态网站**
1. 在COS存储桶控制台，进入「基础配置」→「静态网站」
2. 点击「编辑」，开启静态网站
3. 设置默认首页为index.html，错误页面为404.html
4. 点击「保存」

7. **配置CDN加速(可选)**
1. 进入CDN控制台，添加加速域名
2. 源站类型选择「对象存储COS」
3. 选择对应的存储桶和地域
4. 完成域名解析和HTTPS配置

## 国内部署常见问题解决

### Gitee Pages空白页面问题

如果部署到Gitee Pages后出现空白页面，可尝试以下解决方案：

1. **检查base路径配置**
确保package.json中的build命令包含正确的base路径：
```json
"build:gitee": "vite build --base=/your-repo-name/ --outDir dist-gitee"
```

2. **确保gh-pages分支正确创建**
```bash
# 手动创建gh-pages分支
git checkout --orphan gh-pages
git rm -rf .
touch README.md
git add README.md
git commit -m "Initial gh-pages commit"
git push -u origin gh-pages
git checkout main
```

3. **检查index.html路径**
确保构建后的index.html文件位于gh-pages分支的根目录，而非子目录。

4. **检查Gitee Pages配置**
1. 进入Gitee仓库，点击「服务」→「Gitee Pages」
2. 确保部署分支为gh-pages
3. 确保部署目录为根目录(/)
4. 点击「更新」重新部署

### 国内访问速度优化

1. **选择合适的地域**
部署时选择离目标用户最近的地域，减少网络延迟。

2. **启用CDN加速**
阿里云、腾讯云等平台均提供CDN服务，可显著提升静态资源加载速度。

3. **压缩静态资源**
在vite.config.ts中配置资源压缩：
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
```

4. **使用国内npm源**
```bash
# 设置npm镜像为淘宝源
npm config set registry https://registry.npmmirror.com/

# 或使用cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com/
```

## 总结

国内免费静态网站部署平台各有特点，您可以根据项目需求和访问群体选择合适的平台：
- 个人博客或小型项目：推荐Gitee Pages或Coding Pages，配置简单，访问速度快
- 企业官网或对稳定性要求高的项目：推荐阿里云OSS或腾讯云COS，配合CDN使用
- 国际访问需求：可考虑Cloudflare Pages或保留GitHub Pages

所有平台都支持HTTPS和自定义域名，您可以根据实际需求选择最适合的部署方案。

## 如何清空GitHub仓库内容

如果您需要清空GitHub仓库中的所有内容（保留仓库本身），可以按照以下方法操作：

### 方法一：使用Git命令行

```bash
# 1. 克隆仓库到本地
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. 删除所有文件和文件夹（保留.git目录）
rm -rf *
rm -rf .[!.]*  # 删除隐藏文件（Linux/Mac）
# Windows用户可以手动删除所有文件，保留.git文件夹

# 3. 创建一个空提交
git add .
git commit -m "Clear repository contents"

# 4. 强制推送到远程仓库
git push -f origin main
```

### 方法二：使用GitHub网页界面

1. 打开GitHub仓库页面
2. 点击顶部的"Code"按钮
3. 在文件列表页面，点击要删除的文件或文件夹右侧的"..."按钮
4. 选择"Delete file"选项
5. 在确认页面，输入提交信息（如"Delete file"）
6. 点击"Commit changes"按钮
7. 对所有文件重复上述步骤

> **注意**：网页界面一次只能删除一个文件或文件夹，对于包含多个文件的仓库，此方法效率较低。

### 重要注意事项

1. **备份重要文件**：在清空仓库前，确保已备份所有重要文件和数据
2. **保留必要文件**：如果您计划继续使用该仓库，可能需要保留关键配置文件，如：
   - `.gitignore`：确保Git忽略不必要的文件
   - `package.json` 和 `pnpm-lock.yaml`：项目依赖配置
   - 部署配置文件如 `deploy.yml`
3. **影响现有部署**：清空仓库会影响基于该仓库的GitHub Pages或其他部署，需要重新部署
4. **强制推送风险**：使用`git push -f`命令会覆盖远程仓库历史，请谨慎操作
5. **团队协作注意**：如果有其他协作者，清空仓库前应通知团队成员