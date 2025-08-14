import { motion } from 'framer-motion';

const Services = () => {
  // 服务数据
  const services = [
    {
      id: 1,
      title: "机载导航数据库校验",
      description: "提供专业的机载导航数据库校验服务，确保导航数据的准确性和可靠性，保障飞行安全。我们遵循国际航空数据标准，通过科学的管理流程和先进的技术手段，为航空安全运行提供坚实的数据支撑。",
      icon: "fa-database",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Aviation%20navigation%20database%20verification%2C%20data%20validation%20interface%2C%20professional%20software%2C%20high%20quality%20screenshot&sign=e4df1deb04026e7bd1667b3b787b5250"
    },
    {
       id: 2,
       title: "全球导航数据生产",
       description: "提供专业的全球导航数据生产服务，包括机场数据、航路数据、导航设施数据等全要素航空导航数据的采集、处理和维护。",
       icon: "fa-globe",
       image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Global%20navigation%20data%20production%2C%20aeronautical%20charts%2C%20flight%20routes%2C%20digital%20map&sign=4432d4c14ca51a18318669eb4c45d93f"
    },
     {
       id: 3,
       title: "智慧签派放行系统",
       description: "提供智能化的航班签派与放行解决方案，集成飞行计划管理、实时运行监控、签派授权和风险预警功能，确保航班运行安全高效。",
       icon: "fa-plane-departure",
       image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Intelligent%20flight%20dispatch%20system%2C%20aviation%20operations%20control%20center%2C%20flight%20information%20display%2C%20digital%20dashboard&sign=052afde7acbacc7170643e55f61aafeb"
     },
     {
      id: 4,
      title: "RAIM预测系统",
      description: "提供专业的RAIM（接收机自主完好性监测）预测分析服务，保障航空器导航系统的可靠性和安全性，支持飞行计划优化和风险预警。",
      icon: "fa-satellite",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=RAIM%20prediction%20system%2C%20aviation%20navigation%20monitoring%2C%20satellite%20signal%20analysis%2C%20digital%20dashboard&sign=c85b08bfd880ed3479d927e911a46ee7"
    },
     {
      id: 5,
      title: "基于运行数据的航司节油系统",
      description: "基于飞行运行数据的智能节油系统，通过大数据分析和机器学习算法优化飞行路径、燃油消耗和发动机性能，帮助航空公司降低运营成本，减少碳排放。",
      icon: "fa-plane",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Airline%20fuel%20efficiency%20system%2C%20flight%20data%20analysis%20dashboard%2C%20fuel%20consumption%20optimization%2C%20aviation%20technology%20interface&sign=b9e2e77cb0e216410c8f9516d2ecb122"
    },
     {
      id: 6,
      title: "航司情报数据平台",
      description: "提供航空情报数据整合、分析与应用平台，集成航班运行数据、气象信息、机场数据和空域情报，支持航空公司运营决策优化和效率提升。",
      icon: "fa-database",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Aviation%20intelligence%20data%20platform%2C%20flight%20data%20visualization%2C%20airline%20operations%20dashboard%2C%20digital%20interface&sign=c8c77d294a1155613dbdd6ce7c886e0e"
    }
  ];
  
  // 动画变体
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            我们的 <span className="text-blue-600 dark:text-blue-400">服务</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            提供全方位的技术解决方案，满足企业不同发展阶段的需求
          </motion.p>
        </div>
        
        {/* 服务卡片网格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  <i className={`fa-solid ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  了解更多 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA部分 */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: services.length * 0.1 }}
          className="mt-20 text-center"
        >
           <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
   <span className="whitespace-nowrap">航科院中宇（北京）新技术发展有限公司</span>汇集了一大批高素质的专业科研人才，公司现有100余名科研人员。高精尖人才将持续为公司运营与业务支撑提供强有力的保障。
</h3>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            联系我们获取定制方案
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;