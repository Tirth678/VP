import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="header">
        <h1>{t('welcome_to_vp')}</h1>
        <p>{t('financial_inclusion_for_all')}</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>{t('budgeting_tools')}</h2>
          <p>{t('simplify_your_finances')}</p>
        </div>
        <div className="feature-card">
          <h2>{t('micro_loans')}</h2>
          <p>{t('get_access_to_credit')}</p>
        </div>
        <div className="feature-card">
          <h2>{t('secure_payments')}</h2>
          <p>{t('send_and_receive_money')}</p>
        </div>
      </section>

      <footer className="footer">
        <p>{t('vp_footer')}</p>
      </footer>
    </div>
  );
};

export default Home;
