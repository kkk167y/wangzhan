# 网站图片替换指南

## 基本方法
要替换网站中的图片，您需要修改对应组件文件中`img`标签的`src`属性。所有图片都使用以下格式的URL生成：

```
https://space.coze.cn/api/coze_space/gen_image?prompt={图片描述}&image_size={图片尺寸}
```

## 具体步骤

1. **找到包含目标图片的组件文件**
   - 首页背景图：`src/components/Hero.tsx`
   - 关于我们图片：`src/components/About.tsx`
   - 联系我们图片：`src/components/Contact.tsx`
   - 服务项目图片：`src/components/Services.tsx`
   - 团队成员图片：`src/components/Team.tsx`


2. **修改图片描述(prompt)**
   - 找到`img`标签的`src`属性
   - 修改`prompt=`后面的内容，描述您想要的图片
   - 确保描述使用英文，单词之间用`%20`代替空格

3. **选择合适的图片尺寸(image_size)**
   - 横向图片：`landscape_16_9` 或 `landscape_4_3`
   - 纵向图片：`portrait_16_9` 或 `portrait_4_3`
   - 方形图片：`square` 或 `square_hd`

## 航空数据相关图片描述示例

```
# 背景图片
Aviation%20data%20center%2C%20modern%20technology%20concept%2C%20blue%20tone

# 数据可视化
Aviation%20navigation%20data%20visualization%2C%20digital%20dashboard

# 团队照片
Professional%20aviation%20data%20team%20working%20together

# 办公环境
Modern%20office%20environment%20for%20aviation%20data%20management

# 数据中心
High%20tech%20data%20center%20with%20server%20racks
```

## 示例：替换关于我们页面图片
1. 打开文件 `src/components/About.tsx`
2. 找到以下代码行：
   ```jsx
   <img 
     src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Team%20collaboration%20in%20modern%20office%2C%20diverse%20team%2C%20brainstorming%2C%20professional%20environment%2C%20high%20quality%20photography&sign=b54b9fb511052246c048c8e3512263c8" 
     alt="团队协作" 
     className="w-full h-auto"
   />
   ```
3. 修改`prompt`参数值：
   ```jsx
   <img 
     src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Aviation%20data%20analysis%20team%20working%20together%2C%20professional%20environment&sign=c6a14bb1acf9fc64577f3cd030241efa" 
     alt="航空数据分析团队协作" 
     className="w-full h-auto"
   />
   ```
4. 保存文件并刷新页面查看效果