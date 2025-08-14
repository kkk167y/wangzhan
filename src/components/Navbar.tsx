import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/64242529282/attachment/image_20250813152626.png" 
              alt="中宇新技术" 
              className="w-10 h-10 rounded-lg object-contain"
            />
   <span className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">航科院中宇（北京）新技术发展有限公司</span>
          </a>
          
           {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">关于我们</a>
            <a href="#services" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">服务</a>
            <a href="#team" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">团队</a>
            <a href="/admin" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              <i className="fa-solid fa-lock mr-1"></i> 后台管理
            </a>
            <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all transform hover:scale-105">
              联系我们
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? '250px' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-800 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-sm font-medium py-2 border-b border-gray-100 dark:border-gray-700"
            onClick={toggleMenu}
          >
            关于我们
          </a>
          <a 
            href="#services" 
            className="text-sm font-medium py-2 border-b border-gray-100 dark:border-gray-700"
            onClick={toggleMenu}
          >
            服务
          </a>
          <a 
            href="#team" 
            className="text-sm font-medium py-2 border-b border-gray-100 dark:border-gray-700"
            onClick={toggleMenu}
          >
            团队
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium py-2 border-b border-gray-100 dark:border-gray-700"
            onClick={toggleMenu}
          >
            客户评价
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium text-center transition-all"
            onClick={toggleMenu}
          >
            联系我们
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;