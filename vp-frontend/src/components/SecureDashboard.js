import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  
  return (
    <div className="dashboard">
      <h1>{t('welcome')}</h1>
      {/* Budgeting UI, Transaction History */}
    </div>
  );
};

export default Dashboard;