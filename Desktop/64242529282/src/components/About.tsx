import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const About = () => {
  // 定义动画元素的变体
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
   关于 <span className="text-blue-600 dark:text-blue-400 whitespace-nowrap">航科院中宇（北京）新技术发展有限公司</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
              航科院中宇（北京）新技术发展有限公司是我国民航业内专业提供全产业链航行服务的领先平台。
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 图片部分 */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Team%20collaboration%20in%20modern%20office%2C%20diverse%20team%2C%20brainstorming%2C%20professional%20environment%2C%20high%20quality%20photography&sign=b54b9fb511052246c048c8e3512263c8" 
                alt="团队协作" 
      className="w-3/4 h-auto md:w-2/3 mx-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full z-0 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0 blur-2xl"></div>
          </motion.div>
          
          {/* 内容部分 */}
          <div className="space-y-8">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">我们的故事</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                   公司前身是航科院航行新技术研究所（北斗技术应用研究所/PBN飞行程序设计中心），于2018年3月20日经中国民用航空局决定成立为航科院全资子公司。
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                  航科院中宇（北京）新技术发展有限公司是目前国内唯一一家同时从事航空公司、机场、空管和通用航空运行新技术研究的公司，公司下设大数据管理事业部，运控技术事业部，运行监视事业部，机场技术事业部，航行服务事业部，战略发展事业部。其服务范围覆盖航空公司、机场、空管和通用航空的运行支持领域，可满足民航用户从机场到航司到空管，从设计到运行到评估，全领域全链条的服务需求。
                </p>
            </motion.div>
            

            
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">年行业经验</div>
                </div>
                <div className="h-10 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">200+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">成功案例</div>
                </div>
                <div className="h-10 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">专业顾问</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;