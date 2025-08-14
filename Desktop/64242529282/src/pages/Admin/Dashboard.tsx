import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/contexts/authContext.tsx';
import { toast } from 'sonner';

// 定义联系消息类型
interface ContactMessage {
  id: number;
  timestamp: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
}

const Dashboard = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 检查用户是否已登录
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
      toast.warning('请先登录');
    } else {
      fetchMessages();
    }
  }, [isAuthenticated, navigate]);

  // 从localStorage获取消息
  const fetchMessages = () => {
    setLoading(true);
    try {
      const storedMessages = localStorage.getItem('contactMessages');
  if (storedMessages) {
    const parsedMessages = JSON.parse(storedMessages) as ContactMessage[];
    // 添加isRead属性（默认为false）并排序
    const messagesWithStatus = parsedMessages.map(msg => ({
      ...msg,
      isRead: msg.isRead !== undefined ? msg.isRead : false
    }));
    // 按时间戳降序排序（最新的在前）
    messagesWithStatus.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    setMessages(messagesWithStatus);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      toast.error('加载消息失败');
    } finally {
      setLoading(false);
    }
  };

  // 删除消息
  // 更新消息状态（已读/未读）
  const updateMessageStatus = (id: number, isRead: boolean) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, isRead } : msg
    );
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
  };

  // 删除消息
  const deleteMessage = (id: number) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
    setMessages(updatedMessages);
    toast.success('消息已删除');
    
    // 如果删除的是当前选中的消息，关闭模态框
    if (selectedMessage?.id === id) {
      setIsModalOpen(false);
      setSelectedMessage(null);
    }
  };

  // 格式化日期时间
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  // 搜索过滤
  const filteredMessages = messages.filter(message => 
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fa-solid fa-tachometer-alt text-blue-600 text-xl"></i>
            <h1 className="text-xl font-bold text-gray-800">系统后台管理</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => logout()}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <i className="fa-solid fa-sign-out-alt mr-2"></i> 退出登录
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={fadeInUp} 
          initial="initial"
          animate="animate"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">联系消息管理</h2>
                <p className="text-gray-500 mt-1">查看和管理网站访问者提交的联系消息</p>
              </div>
              
              <div className="mt-4 md:mt-0 w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="搜索消息..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors w-full md:w-64"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-search text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center">
                  <i className="fa-solid fa-spinner fa-spin text-3xl text-blue-600 mb-3"></i>
                  <p className="text-gray-600">加载中...</p>
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <i className="fa-solid fa-envelope-open text-5xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-medium text-gray-700 mb-2">暂无联系消息</h3>
                <p className="text-gray-500">当网站访问者提交联系表单时，消息将显示在这里</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交时间</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">主题</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredMessages.map((message) => (
                        <tr key={message.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDateTime(message.timestamp)}
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="flex items-center">
                                {!message.isRead && (
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                )}
                                {message.name}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {message.email}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                              {message.subject}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                message.isRead 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {message.isRead ? '已读' : '未读'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => {
                                // 标记为已读并打开模态框
                                if (!message.isRead) {
                                  updateMessageStatus(message.id, true);
                                }
                                setSelectedMessage(message);
                                setIsModalOpen(true);
                              }}
                              className="text-blue-600 hover:text-blue-800 mr-4 transition-colors"
                              title="查看详情"
                            >
                              <i className="fa-solid fa-eye"></i> 查看
                            </button>
                           <button
                              onClick={() => deleteMessage(message.id)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                              title="删除消息"
                            >
                              <i className="fa-solid fa-trash"></i> 删除
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                  显示 <span className="font-medium">{filteredMessages.length}</span> 条，共 <span className="font-medium">{messages.length}</span> 条消息
                </div>
              </>
            )}
          </div>

          {/* 消息详情模态框 */}
          {isModalOpen && selectedMessage && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col transform animate-in zoom-in-95 duration-300">
                {/* 模态框头部 */}
                <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
                  <h3 className="text-xl font-bold">消息详情</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-white hover:text-blue-100 transition-colors"
                  >
                    <i className="fa-solid fa-times text-xl"></i>
                  </button>
                </div>
                
                {/* 模态框内容 */}
                <div className="p-6 overflow-y-auto flex-grow">
                  <div className="space-y-6">
                    {/* 状态标签 */}
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {selectedMessage.isRead ? (
                          <>
                            <i className="fa-solid fa-check-circle mr-1"></i> 已读
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-circle mr-1"></i> 未读
                          </>
                        )}
                      </span>                    
                      <span className="text-sm text-gray-500">
                        {formatDateTime(selectedMessage.timestamp)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">姓名</h4>
                        <p className="text-gray-900 font-medium">{selectedMessage.name}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">邮箱</h4>
                        <div className="flex items-center">
                          <a 
                            href={`mailto:${selectedMessage.email}`}
                            className="text-blue-600 hover:text-blue-800 mr-2 transition-colors"
                          >
                            {selectedMessage.email}
                          </a>
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(selectedMessage.email);
                              toast.success('邮箱已复制到剪贴板');
                            }}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            title="复制邮箱"
                          >
                            <i className="fa-solid fa-copy"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">主题</h4>
                      <p className="text-gray-900 font-medium">{selectedMessage.subject}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">消息内容</h4>
                      <div className="bg-gray-50 p-5 rounded-xl text-gray-800 leading-relaxed whitespace-pre-line">
                        {selectedMessage.message}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 模态框底部 */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end space-x-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    关闭
                  </button>
                  <button
                    onClick={() => {
                      deleteMessage(selectedMessage.id);
                    }}
                    className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center"
                  >
                    <i className="fa-solid fa-trash mr-2"></i> 删除消息
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} 航科院中宇（北京）新技术发展有限公司. 保留所有权利.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                to="/"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                <i className="fa-solid fa-home mr-1"></i> 返回网站首页
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;