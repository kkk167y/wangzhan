
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">管理仪表盘</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">仪表盘内容将在这里显示</p>
      </div>
    </div>
  );
};

export default Dashboard;