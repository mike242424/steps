import { useState } from 'react';
import Button from './Button';
import Message from './Message';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handleOpenToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleOpenToggle}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            <Button
              color="#fff"
              backgroundColor="#7950f2"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button color="#fff" backgroundColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
