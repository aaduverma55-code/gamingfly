import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans p-6">
      <header className="flex justify-between items-center pb-6 border-b border-gray-800 mb-8">
        <div className="text-2xl font-black tracking-wider text-indigo-500">
          Gaming<span className="text-white">Fly</span>
        </div>
      </header>

      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6">Featured Game</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Metro Rush 3D</h3>
              <p className="text-gray-400 text-sm mb-4">
                Sprint along active metro tracks, dodge oncoming trains, and collect coins!
              </p>
            </div>
            <a 
              href="/metro.html" 
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold py-2.5 px-4 rounded-xl text-center transition"
            >
              Play Game
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
