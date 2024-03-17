import { useState } from "react"

export default function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [userAnwsers, setUserAnswers] = useState([])

    return <p>Curently active Question</p>
}