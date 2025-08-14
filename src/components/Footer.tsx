import { motion } from 'framer-motion';

const Footer = () => {
  // 当前年份
  const currentYear = new Date().getFullYear();
  
  // 页脚链接数据
  const footerLinks = [
    {
      title: "公司",
      links: [
        { name: "关于我们", href: "#about" },
        { name: "团队", href: "#team" },
        { name: "新闻动态", href: "#" },
        { name: "加入我们", href: "#" },
        { name: "联系方式", href: "#contact" }
      ]
    },
    {
      title: "服务",
      links: [
            { name: "机载导航数据库校验", href: "#services" },
             { name: "全球导航数据生产", href: "#services" },
             { name: "智慧签派放行系统", href: "#services" },
         { name: "RAIM预测系统", href: "#services" },
         { name: "基于运行数据的航司节油系统", href: "#services" }
      ]
    },
    {
      title: "法律",
      links: [
        { name: "隐私政策", href: "#" },
        { name: "服务条款", href: "#" },
        { name: "Cookie政策", href: "#" },
        { name: "数据处理", href: "#" },
        { name: "法律声明", href: "#" }
      ]
    }
  ];
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* 公司信息 */}
          <div className="lg:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/64242529282/attachment/image_20250813152626.png" 
              alt="中宇新技术" 
              className="w-10 h-10 rounded-lg object-contain"
            />
    <span className="text-base md:text-xl font-bold text-white whitespace-nowrap text-shadow-none">航科院中宇（北京）新技术发展有限公司</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              提供专业的数据管理解决方案，助力航空科技领域创新发展，提升数据管理效率与价值。
            </p>
            
            {/* 联系信息 */}
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fa-solid fa-map-marker-alt text-blue-400 mr-3 w-5 text-center"></i>
北京市朝阳区西坝河北里甲24号 邮编：100028
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-phone text-blue-400 mr-3 w-5 text-center"></i>

              </div><div className="flex items-center">
                <i className="fa-solid fa-envelope text-blue-400 mr-3 w-5 text-center"></i>

              </div>
            </div>
            
            {/* 社交媒体 */}
            <div className="mt-8 flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weixin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-weibo"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* 链接列 */}
           {footerLinks.map((column, index) => (
               <div key={index} className="">
               <h4 className="text-white text-lg font-semibold mb-6">{column.title}</h4>
               <ul className="space-y-4">
                 {column.links.map((link, linkIndex) => (
                   <li key={linkIndex}>
                     <a 
                       href={link.href} 
                       className="text-gray-400 hover:text-blue-400 transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
                     >
                       {link.name}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
        </div>
        
        {/* 订阅区域 */}
        <div className="border-t border-gray-800 pt-10 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-semibold mb-2">订阅我们的通讯</h3>
              <p className="text-gray-400 max-w-md">获取最新的行业洞察、技术趋势和公司动态</p>
            </div>
            <div className="w-full md:w-auto flex">
              <input 
                type="email" 
                placeholder="您的电子邮箱" 
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition-colors whitespace-nowrap">
                订阅
              </button>
            </div>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
  &copy; {currentYear} 航科院中宇（北京）新技术发展有限公司. 保留所有权利。
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">服务条款</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;