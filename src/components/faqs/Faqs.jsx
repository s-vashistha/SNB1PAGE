import React, { useState } from "react";
import { faqsData } from '../../data/faqsData';
// Import Bootstrap first // Import Bootstrap first
import './Faqs.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqsData.map((item, index) => (
        <div key={item.id} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleQuestion(index)}
          >
            <h3>{item.question}</h3>
            <span className="anscollpse">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
