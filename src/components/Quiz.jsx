import { useState, useCallback } from "react"

import QUESTIONS from '../questions.js'
import QuestionTimer from "./QuestionTimer.jsx"
import quizCompleteImg from '../assets/quiz-complete.png'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length
    const quizIsComplate = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers(prevUserAnswers => {
            return [...prevUserAnswers, selectedAnswer]
        })
    }, [])

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    }, [handleSelectAnswer])

    if (quizIsComplate) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Complated!</h2>
        </div>
    }

    const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswer.sort(() => Math.random() - 0.5)

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswer.map((answer) =>
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}