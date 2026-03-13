"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "@/data/question";
import { useState } from "react";

const Page = () => {

  const title = 'Quiz investimento';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleAnswered = () => {}

  return ( 
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-xl bg-black text-white p-5 rounded">
        <div className="text-center p-2" >{title}</div>
        <div className="border-2 rounded pl-2 mb-2 pr-2">
          <QuestionItem 
            questions={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="pl-2 mb-2 text-center">
         {currentQuestion + 1} de {questions.length} pergunta {questions.length === 1 ? '' : 's'}
        </div>

      </div>
    </div>
   );
}
 
export default Page;