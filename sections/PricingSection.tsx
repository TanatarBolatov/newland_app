
import React from 'react';
import { ScrambleText } from '../components/ui/ScrambleText';
import { ActionBtn } from '../components/ui/ActionBtn';
import { IconGift, IconStar, IconCrown, SmallCheck } from '../components/Icons';

export const PricingSection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-container" style={{ paddingBottom: '150px' }}>
      <ScrambleText defaultText="ПРОСТЫЕ ЦЕНЫ" hoverText="ЗВЕЗДНЫЕ ПРЕДЛОЖЕНИЯ" className="scramble-text" />
      <div className="pricing-grid">
        <div className="pricing-card free">
          <div className="pricing-header"><IconGift className="plan-icon" color="#5C9FC5" /><span className="plan-name">БАЗОВЫЙ</span></div>
          <div className="price-block"><div className="price-value">0 <span className="currency">₸</span></div></div>
          <ul className="features-list">
            <li className="feature-item"><div className="check-circle"><SmallCheck /></div>Размещение анкеты в базе</li>
            <li className="feature-item"><div className="check-circle"><SmallCheck /></div>Видимость для кастинг-директоров</li>
            <li className="feature-item disabled"><div className="check-circle"></div>Автоподбор кастингов</li>
            <li className="feature-item disabled"><div className="check-circle"></div>Уведомления в Telegram</li>
            <li className="feature-item disabled"><div className="check-circle"></div>Отклик в 1 клик</li>
          </ul>
          <ActionBtn initialText="СОЗДАТЬ АНКЕТУ" className="pricing-btn dark" changeText={false} />
        </div>
        <div className="pricing-card standard-electric">
          <div className="star-glow-bg"></div>
          <div className="standard-electric-content">
            <div className="pricing-header"><IconStar className="plan-icon" color="#5277C1" /><span className="plan-name">СТАНДАРТ</span></div>
            <div className="price-block"><div className="price-value">30 <span className="currency">₸</span></div><div className="price-period">первый месяц, далее 3 490 ₸/мес</div></div>
            <ul className="features-list">
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#5277C1" /></div>Всё из тарифа «БАЗОВЫЙ»</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#5277C1" /></div>Сборка из 30+ WA/TG чатов</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#5277C1" /></div>Автоподбор по профилю</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#5277C1" /></div>Моментальные уведомления</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#5277C1" /></div>Отклик в 1 клик</li>
            </ul>
            <ActionBtn initialText="НАЧАТЬ СЕЙЧАС" className="pricing-btn star-btn" changeText={true} />
          </div>
        </div>
        <div className="pricing-card electric">
          <div className="background-glow"></div>
          <div className="overlay-1"></div>
          <div className="electric-content">
            <div className="badge-electric">Рекомендуем</div>
            <div className="pricing-header"><IconCrown className="plan-icon" color="#35DF86" /><span className="plan-name">ПРОФЕССИОНАЛ</span></div>
            <div className="price-block"><div className="price-value">30 <span className="currency">₸</span></div><div className="price-period">первый месяц, далее 4 490 ₸/мес</div></div>
            <ul className="features-list">
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#35DF86" /></div>Всё из тарифа «СТАНДАРТ»</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#35DF86" /></div>Фильтр: массовка / роль / реклама</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#35DF86" /></div>Приоритетная поддержка</li>
              <li className="feature-item"><div className="check-circle"><SmallCheck color="#35DF86" /></div>Ранний доступ к новым функциям</li>
            </ul>
            <ActionBtn initialText="НАЧАТЬ СЕЙЧАС" className="pricing-btn electric-btn" changeText={true} />
            <div className="glow-layer-1"></div>
            <div className="glow-layer-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
