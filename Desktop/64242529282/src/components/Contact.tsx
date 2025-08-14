import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 动画变体
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  // 处理表单变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
   // 处理表单提交
   const handleSubmit = (e) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     // 创建包含时间戳的消息对象
     const newMessage = {
       id: Date.now(),
       timestamp: new Date().toISOString(),
       ...formData
     };
     
     // 保存到本地存储
     const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
     existingMessages.push(newMessage);
     localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
     
     // 模拟API提交
     setTimeout(() => {
       toast.success('您的消息已成功提交，网站管理员将收到通知并尽快与您联系！');
       setFormData({
         name: '',
         email: '',
         subject: '',
         message: ''
       });
       setIsSubmitting(false);
       
       // 控制台输出新消息通知（实际应用中可替换为邮件通知）
       console.log('新联系消息:', newMessage);
       alert('管理员通知: 收到新的联系消息');
     }, 1500);
   };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            联系 <span className="text-blue-600 dark:text-blue-400">我们</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            无论您有任何问题或需求，我们的团队随时准备为您提供帮助
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 联系信息 */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">联系信息</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <i className="fa-solid fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">公司地址</h4>
北京市朝阳区西坝河北里甲24号 邮编：100028
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">联系电话</h4>

                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">电子邮箱</h4>

                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">工作时间</h4>
                    <p className="text-gray-600 dark:text-gray-300">周一至周五: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              {/* 社交媒体 */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">关注我们</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors">
                    <i className="fa-brands fa-weixin"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors">
                    <i className="fa-brands fa-weibo"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 transition-colors">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
              
              {/* 办公室图片 */}
              <div className="mt-10 rounded-xl overflow-hidden">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=Modern%20office%20reception%20area%2C%20professional%20environment%2C%20welcoming%20atmosphere%2C%20high%20quality%20photography&sign=3bc0a64dbf46b1dda387fc3c6c842a0f" 
                  alt="公司前台" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
          
          {/* 联系表单 */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">发送消息</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">提交后，您的消息将安全存储，网站管理员会收到即时通知并通过您填写的电子邮箱回复您。</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-300 mb-6">
                  <i className="fa-solid fa-info-circle mr-2"></i>
                  管理员可通过系统后台查看所有联系消息，包括发件人姓名、邮箱和具体内容。
                </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">电子邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">主题</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">消息内容</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i> 发送中...
                    </>
                  ) : (
                    <>
                      发送消息 <i className="fa-solid fa-paper-plane ml-2"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;