import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: 'WHAT IS CHAIN WARZ?',
      answer: 'Chain Warz is a blockchain lottery where each lottery ticket is represented as a fighting bot.'
    },
    {
      question: 'HOW DOES CHAIN WARZ WORK?',
      answer: 'IN PROCESS'
    },
    {
      question: 'WHAT IS AN NFT FOUNDERS PASS?',
      answer: 'IN PROCESS'
    },
    {
      question: 'HOW DO I BUY A FOUNDERS PASS?',
      answer: 'IN PROCESS'
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-custom w-screen h-full flex justify-center items-center'>
      <div className="w-full mx-44  mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-white text-center font-style"data-aos='fade-top'>FAQ</h1>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="flex items-center justify-between w-full border-b bg-custom p-8 md:p-10 shadow-md text-white font-style"
                onClick={() => toggleQuestion(index)}
              >
                <span className={`text-md md:text-3xl  font-semibold ${openIndex === index ? 'bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text' : ''}`}>{item.question}</span>
                <span className="gradient-border">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-8 md:p-10 bg-custom-100 rounded-b-lg text-white border-t uppercase">
                  <p className="text-sm md:text-xl font-style">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
