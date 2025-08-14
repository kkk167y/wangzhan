import { motion } from 'framer-motion';

const Team = () => {
  // 团队成员数据
  const teamMembers = [
    {
      id: 1,
      name: "张明",
      position: "首席执行官",
      bio: "拥有15年科技行业经验，曾任职于多家全球知名科技公司，带领团队完成多个大型数字化转型项目。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20businessman%2C%20CEO%2C%20confident%20expression%2C%20suit%2C%20high%20quality%20headshot&sign=52e1a5235aee7fbba5ee75631b1bb411"
    },
    {
      id: 2,
      name: "李华",
      position: "技术总监",
      bio: "前谷歌高级工程师，拥有丰富的软件开发和架构设计经验，精通云计算和大数据技术。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Technical%20director%2C%20asian%20male%2C%20smart%20expression%2C%20casual%20business%20attire%2C%20high%20quality%20headshot&sign=d93f428da3926694826c509dd78214ed"
    },
    {
      id: 3,
      name: "王芳",
      position: "产品负责人",
      bio: "用户体验专家，擅长产品战略规划和用户研究，曾主导多个成功产品的设计与发布。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Product%20manager%2C%20asian%20female%2C%20professional%20attire%2C%20friendly%20expression%2C%20high%20quality%20headshot&sign=73fb025a708f9fc3189e4228a2ccc08a"
    },
    {
      id:4,
      name: "赵强",
      position: "销售总监",
      bio: "拥有丰富的企业客户开发和关系管理经验，擅长为不同行业客户提供定制化解决方案。",
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Sales%20director%2C%20asian%20male%2C%20confident%20smile%2C%20business%20suit%2C%20high%20quality%20headshot&sign=c89f0dac8731d5971f6e390b6c8933eb"
    }
  ];
  
  // 动画变体
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <section id="team" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            我们的 <span className="text-blue-600 dark:text-blue-400">团队</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            由行业专家组成的核心团队，拥有丰富的实战经验和专业知识
          </motion.p>
        </div>
        
        {/* 团队成员网格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{member.position}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;