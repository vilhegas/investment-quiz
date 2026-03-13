import { Questions } from "@/types/Question";
import { useState } from "react";

type Props = {
  questions: Questions;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ questions, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-5 mt-3">
        {count}. {questions.question}
      </div>

        <div>
        {questions.options.map((item, key) => (
            <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`text-black border px-3 py-2 rounded-md text-lg mb-3
                ${selectedAnswer === null ? "cursor-pointer hover:opacity-60 bg-white" : "cursor-auto"}
                ${selectedAnswer !== null && key === questions.answer ? "bg-green-500 text-white" : ""}
                ${selectedAnswer !== null && key === selectedAnswer && key !== questions.answer ? "bg-red-500 text-white" : ""}
            `}
            >
            {item}
            </div>
        ))}
        </div>
    </div>
  );
};