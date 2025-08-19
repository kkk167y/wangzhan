
import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">管理员登录</h1>
        <div className="space-y-4">
          <p className="text-gray-600 text-center">登录表单将在这里显示</p>
        </div>
      </div>
    </div>
  );
};

export default Login;