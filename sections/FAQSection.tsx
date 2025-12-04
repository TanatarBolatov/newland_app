
import React, { useRef, useState } from 'react';
import { ScrambleText } from '../components/ui/ScrambleText';
import { IconPlus } from '../components/Icons';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="faq-item" onClick={onClick} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "24px 0", cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.25rem", fontWeight: 600, color: isOpen ? "#35DF86" : "white", margin: 0, transition: "color 0.3s" }}>{question}</h3>
        <div style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)", color: isOpen ? "#35DF86" : "white" }}><IconPlus /></div>
      </div>
      <div style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)", opacity: isOpen ? 1 : 0.5 }} ref={contentRef}>
        <p style={{ marginTop: "16px", marginBottom: 0, color: "#9ca3af", lineHeight: 1.6, fontSize: "1rem" }}>{answer}</p>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { question: "Как работает Caster AI?", answer: "Наш ИИ непрерывно сканирует более 20 проверенных источников..." },
    { question: "Подходит ли это для начинающих актеров?", answer: "Абсолютно! На платформе есть много кастингов..." },
    { question: "Как отменить подписку?", answer: "Вы можете отменить подписку в любой момент..." },
    { question: "Есть ли бесплатный пробный период?", answer: "Да, у нас есть бесплатный тариф «БАЗОВЫЙ»..." },
    { question: "Какие данные нужны для регистрации?", answer: "Вам понадобятся ваши актуальные фото..." }
  ];
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section id="faq" className="section-container" style={{ paddingBottom: "100px" }}>
      <div className="faq-container-box">
        <ScrambleText defaultText="FAQ" hoverText="ВОПРОСЫ?" className="scramble-text" />
        <div style={{ maxWidth: "1000px", width: "100%", padding: "0 20px" }}>
          {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onClick={() => toggleFAQ(index)} />)}
        </div>
      </div>
    </section>
  );
};
