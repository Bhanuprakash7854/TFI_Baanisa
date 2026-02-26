import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="bg-[url(./assets/bg-m.png)] md:bg-[url(./assets/bg-pc.png)] h-screen w-screen bg-cover flex flex-col items-center">
            <h1 className="font-[Cinzel] 
           text-4xl sm:text-5xl md:text-7xl 
           font-black 
           tracking-widest 
           text-center 
           bg-gradient-to-b 
           from-yellow-200 
           via-yellow-400 
           to-amber-700 
           bg-clip-text 
           text-transparent 
           drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] 
           [text-shadow:0_0_15px_rgba(255,200,0,0.6),0_0_40px_rgba(255,170,0,0.6)]
           pt-20">
                TFI BAANISA
            </h1>
            <p className="mt-6 
          text-sm sm:text-base md:text-xl 
          text-amber-100 
          tracking-wide 
          text-center 
          drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] 
          [text-shadow:0_0_10px_rgba(255,200,120,0.4)]">
                Check your score as a true
                <span className="text-yellow-400 font-semibold pl-2">
                    TFI Baanisa
                </span> 🎬🔥
            </p>
            <button 
             onClick={() => navigate("/question")}
            class="mt-10 
               px-8 py-3 
               text-sm sm:text-base md:text-lg 
               font-bold 
               tracking-wide 
               text-black 
               bg-gradient-to-r 
               from-yellow-400 
               via-yellow-500 
               to-amber-600 
               rounded-lg 
               shadow-lg 
               transition-all 
               duration-300 
               hover:scale-105 
               hover:shadow-[0_0_25px_rgba(255,200,0,0.8)] 
               active:scale-95">
                PLAY GAME
            </button>
            <div class="mt-16 w-[90%] sm:w-[80%] md:w-[60%] 
            bg-black/60 
            backdrop-blur-md 
            border border-yellow-500/30 
            rounded-2xl 
            p-6 sm:p-8 
            shadow-[0_0_30px_rgba(255,200,0,0.15)]">

                <h2 class="text-xl sm:text-2xl md:text-3xl 
             font-bold 
             text-yellow-400 
             text-center 
             tracking-widest 
             mb-6">
                    HOW TO PLAY
                </h2>

                <ul class="space-y-4 text-amber-100 text-sm sm:text-base md:text-lg">

                    <li class="flex items-start gap-3">
                        <span class="text-yellow-400">🎭</span>
                        <span>Two actors will be shown on the screen.</span>
                    </li>

                    <li class="flex items-start gap-3">
                        <span class="text-yellow-400">🎬</span>
                        <span>Enter the movie they acted in together.</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <span class="text-yellow-400">🎬</span>
                        <span>The actors can be of full roles or a cameo</span>
                    </li>

                    <li class="flex items-start gap-3">
                        <span class="text-yellow-400">🔥</span>
                        <span>Some pairs have multiple movies. Guess all to move next.</span>
                    </li>

                    <li class="flex items-start gap-3">
                        <span class="text-yellow-400">🏆</span>
                        <span>Score high and prove you're a true TFI Baanisa.</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}