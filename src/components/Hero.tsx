import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Aviation%20data%20center%2C%20modern%20technology%20concept%2C%20blue%20tone%2C%20professional%20photography&sign=23d5c355aae1de02d09f307411106678" 
          alt="现代办公大楼与创新概念" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              引领未来科技<br />
              <span className="text-blue-300">创造无限可能</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
  航科院中宇（北京）新技术发展有限公司提供专业的数据管理解决方案，助力航空科技领域创新发展，提升数据管理效率与价值。
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#services" 
              className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-full text-lg font-medium transition-all transform hover:scale-105 text-center"
            >
              探索服务
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full text-lg font-medium transition-all text-center"
            >
              联系顾问
            </a>
          </motion.div>
          

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <p className="text-sm mb-2">向下滚动探索更多</p>
        <i className="fa-solid fa-chevron-down"></i>
      </motion.div>
    </section>
  );
};

export default Hero;