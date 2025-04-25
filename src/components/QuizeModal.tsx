import  { useState, useEffect, useRef } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { GoClock } from "react-icons/go";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Arctic", "Indian", "Pacific"],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Tolstoy", "Hemingway", "Dickens"],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
  },
];

const QuizeModal = ({ open, handleClose }: any) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0); // index 0 to 4
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isRunning && time < 60) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (time >= 60 && timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  }, [time]);

  const handleStart = () => {
    setTime(0);
    setIsRunning(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: 600 },
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: '#2c387e',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        {/* Timer */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-30 h-10 rounded-md bg-yellow-300 flex items-center justify-center text-center mr-2">
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 1 }}>
              <GoClock className="text-white text-md" /> {formatTime(time)}
            </Typography>
          </div>
        </div>

        {/* Question Selector (1-5) */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <Button
              key={index}
              variant={selectedQuestion === index ? "contained" : "outlined"}
              color="info"
              onClick={() => {
                setSelectedQuestion(index);
                setSelectedOption(null); 
              }}
                sx={{
                    backgroundColor: selectedQuestion === index ? '#1976d2' : 'transparent',
                    color: selectedQuestion === index ? 'white' : 'white',
                    borderColor: 'white',
                    '&:hover': {
                    backgroundColor: selectedQuestion === index ? '#1565c0' : 'rgba(255,255,255,0.1)',
                    },
                    borderRadius: '100%',
                    width: '50px',
                    height: '50px',
                }}
            >
              {num}
            </Button>
          ))}
        </div>

        {/* Question Display */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
            {questions[selectedQuestion].question}
          </Typography>
          <div className="grid grid-cols-1 gap-2">
            {questions[selectedQuestion].options.map((option, idx) => (
              <Button
                key={idx}
                variant={selectedOption === idx ? "contained" : "outlined"}
                onClick={() => setSelectedOption(idx)}
                sx={{
                  justifyContent: 'flex-start',
                  backgroundColor: selectedOption === idx ? '#1976d2' : 'transparent',
                  color: selectedOption === idx ? 'white' : 'white',
                  borderColor: 'white',
                  '&:hover': {
                    backgroundColor: selectedOption === idx ? '#1565c0' : 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {option}
              </Button>
            ))}
          </div>
        </Box>

        {/* Timer Button */}
        <Button onClick={handleStart} variant="outlined" sx={{ mb: 2, color: 'white', borderColor: 'white' }} fullWidth>
          Start Timer
        </Button>

        <Button onClick={handleClose} variant="contained" fullWidth>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default QuizeModal;
