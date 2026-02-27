import { useLocation, useNavigate } from "react-router-dom"

export default function ResultPage() {

    const location = useLocation()
    const navigate = useNavigate()

    const finalScore = location.state?.finalScore || 0

    let memeImage = "./src/assets/low.jpg"
    let titleText = ""

    if (finalScore >= 90) {
        memeImage = "./src/assets/90.jpg"
        titleText = "🔥TFI Kattu Baanisa"
    } else if (finalScore >= 70) {
        memeImage = "./src/assets/70.jpg"
        titleText = "🎬 TFI Ane Goda lo Ituka Nuvvu"
    } else if (finalScore >= 50) {
        memeImage = "./src/assets/50.jpg"
        titleText = "🎥 OTT Batch Annamata Nuv"
    } else {
        memeImage = "./src/assets/30.jpg"
        titleText = "😅 Nuv Chudalsina kalakandalu chala unnay mawa"
    }

    return (
        <div className="min-h-screen w-full 
                        bg-[url('./assets/bg-m.png')] 
                        md:bg-[url('./assets/bg-pc.png')] 
                        bg-cover bg-center bg-no-repeat relative">

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

                <h1 className="text-4xl sm:text-5xl md:text-7xl 
                               font-black 
                               tracking-widest 
                               text-yellow-400 
                               text-center 
                               mb-10">
                    RESULT
                </h1>

                <div className="relative flex items-center justify-center mb-8">

                    <div className="w-40 h-40 md:w-52 md:h-52 
                                    rounded-full 
                                    border-[10px] 
                                    border-yellow-500 
                                    flex items-center justify-center 
                                    bg-black/60 
                                    shadow-[0_0_40px_rgba(255,200,0,0.6)]">

                        <span className="text-4xl md:text-6xl 
                                         font-bold 
                                         text-yellow-400">
                            {finalScore}
                        </span>

                    </div>

                </div>

                <h2 className="text-xl md:text-3xl 
                               text-amber-200 
                               font-semibold 
                               mb-6 text-center">
                    {titleText}
                </h2>

                <img
                    src={memeImage}
                    className="w-[90%] sm:w-[70%] md:w-[40%] 
                               rounded-xl 
                               border-4 border-yellow-500 
                               shadow-lg 
                               mb-8"
                />

                <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 
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
                               hover:shadow-[0_0_25px_rgba(255,200,0,0.8)] 
                               active:scale-95">
                    PLAY AGAIN
                </button>

            </div>
        </div>
    )
}