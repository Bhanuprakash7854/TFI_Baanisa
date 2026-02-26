import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import data from "/src/Data.js"

export default function QuestionPage() {

    const navigate = useNavigate()

    const [gameQuestions, setGameQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [userInput, setUserInput] = useState("")
    const [message, setMessage] = useState("")
    const [guessedMovies, setGuessedMovies] = useState([])
    const [score, setScore] = useState(0)

    const normalize = (text) =>
        text.toLowerCase().replace(/\s+/g, "").trim()

    const shuffleArray = (array) => {
        const arr = [...array]
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }

    useEffect(() => {
        const shuffled = shuffleArray(data).slice(0, 10)
        setGameQuestions(shuffled)
    }, [])

    if (gameQuestions.length === 0) return null

    const currentQuestion = gameQuestions[currentIndex]

    const moveToNextQuestion = (updatedScore = score) => {
        if (currentIndex + 1 === gameQuestions.length) {
            navigate("/result", { state: { finalScore: updatedScore } })
            return
        }

        setCurrentIndex(prev => prev + 1)
        setGuessedMovies([])
        setUserInput("")
        setMessage("")
    }

    const handleCheck = () => {

        const normalizedInput = normalize(userInput)

        const matchedMovie = currentQuestion.movies.find(
            movie => normalize(movie) === normalizedInput
        )

        if (!matchedMovie) {
            setMessage("❌ Incorrect answer! Try again.")
            return
        }

        if (guessedMovies.includes(matchedMovie)) {
            setMessage("⚠️ You already guessed this movie.")
            return
        }

        const updated = [...guessedMovies, matchedMovie]
        setGuessedMovies(updated)

        if (updated.length === currentQuestion.movies.length) {
            const newScore = score + 10
            setScore(newScore)
            setMessage("🎉 All movies found! Moving to next question...")
            setTimeout(() => moveToNextQuestion(newScore), 1000)
        } else {
            setMessage(`✅ Correct! ${currentQuestion.movies.length - updated.length} more left.`)
        }

        setUserInput("")
    }

    const handleSkip = () => {
        moveToNextQuestion()
    }

    return (
        <div className="min-h-screen w-full 
                    bg-[url('./assets/bg-m.png')] 
                    md:bg-[url('./assets/bg-pc.png')] 
                    bg-cover bg-center bg-no-repeat relative">

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

                <h1 className="text-3xl sm:text-4xl md:text-6xl 
                       font-black 
                       tracking-widest 
                       text-yellow-400 
                       text-center 
                       mb-10">
                    GUESS THE MOVIE
                </h1>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">

                    <div className="flex flex-col items-center">
                        <img
                            src={currentQuestion.image1}
                            className="w-40 h-56 md:w-56 md:h-72 
                         object-cover 
                         rounded-xl 
                         border-4 border-yellow-500 
                         shadow-lg"
                        />
                        <p className="mt-3 text-amber-100 text-lg font-semibold tracking-wide">
                            {currentQuestion.actor1}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src={currentQuestion.image2}
                            className="w-40 h-56 md:w-56 md:h-72 
                         object-cover 
                         rounded-xl 
                         border-4 border-yellow-500 
                         shadow-lg"
                        />
                        <p className="mt-3 text-amber-100 text-lg font-semibold tracking-wide">
                            {currentQuestion.actor2}
                        </p>
                    </div>

                </div>

                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                    placeholder="Enter the movie name..."
                    className="w-[90%] sm:w-[70%] md:w-[40%] 
                     px-4 py-3 
                     rounded-full 
                     bg-black/60 
                     border border-yellow-500/50 
                     text-amber-100 
                     focus:outline-none 
                     focus:ring-2 
                     focus:ring-yellow-400 
                     mb-6"
                />

                <div className="flex gap-6 mb-6">

                    <button
                        onClick={handleCheck}
                        className="px-6 py-3 
                       font-bold 
                       text-black 
                       bg-gradient-to-r 
                       from-yellow-400 
                       via-yellow-500 
                       to-amber-600 
                       rounded-full 
                       shadow-lg 
                       transition-all 
                       duration-300 
                       hover:scale-105 
                       hover:shadow-[0_0_20px_rgba(255,200,0,0.8)] 
                       active:scale-95">
                        CHECK
                    </button>

                    <button
                        onClick={handleSkip}
                        className="px-6 py-3 
                       font-bold 
                       text-yellow-400 
                       border border-yellow-500 
                       rounded-full 
                       bg-black/60 
                       transition-all 
                       duration-300 
                       hover:bg-yellow-500 
                       hover:text-black 
                       active:scale-95">
                        SKIP
                    </button>

                </div>

                <div className="h-8 text-center">
                    <p className="text-red-400 font-semibold tracking-wide">
                        {message}
                    </p>
                </div>

            </div>
        </div>
    )
}