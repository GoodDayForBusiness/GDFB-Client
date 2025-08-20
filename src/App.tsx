import { Chat } from "./components/chat/Chat";
import { Landing } from "./components/Landing";
import { AgenticaRpcProvider } from "./provider/AgenticaRpcProvider";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'chat'>('landing');

  return (
    <div className="relative min-h-screen">
      {/* Shared Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="fixed inset-0 opacity-[0.03] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Content */}
      <div className="relative w-full min-h-screen">
        {currentPage === 'landing' ? (
          <Landing onStartChat={() => setCurrentPage('chat')} />
        ) : (
          <div className="w-full h-screen">
            <AgenticaRpcProvider>
              <Chat onBackToLanding={() => setCurrentPage('landing')} />
            </AgenticaRpcProvider>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
