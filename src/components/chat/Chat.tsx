import { useAgenticaRpc } from "../../provider/AgenticaRpcProvider";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { ChatStatus } from "./ChatStatus";
import { useEffect, useRef, useState } from "react";
import { Building2, MessageSquare, Sparkles } from "lucide-react";

export function Chat() {
  const { messages, conversate, isConnected, isError, tryConnect } =
    useAgenticaRpc();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const hasMessage = messages.length > 0;
  const lastMessage = messages[messages.length - 1];
  const isLastMessageFromUser = lastMessage?.type === "userMessage";
  const [isLoading, setIsLoading] = useState(false);



  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      await conversate(content);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-8 min-w-0">
      <div className="relative w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] mt-16">
        <div className="h-full flex flex-col bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-white">장사하기 좋은 날</h2>
                <p className="text-blue-100 text-sm">소상공인을 위한 스마트 상권 분석</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-blue-200 text-xs">
                  <Sparkles className="w-3 h-3" />
                  <span>AI 분석</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
              </div>
            </div>
          </div>


          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
          >
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    상권 분석을 시작해보세요
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    분석하고 싶은 지역과 업종을 입력하면 AI가 상세한 상권 분석을 제공합니다
                  </p>
                </div>
                

                <div className="space-y-3 max-w-md mx-auto">
                  <div className="text-left">
                    <p className="text-xs text-gray-500 mb-2">💡 예시 질문:</p>
                    <div className="space-y-2">
                      <button 
                        onClick={() => handleSendMessage("강남구 역삼동에 카페를 창업하려고 하는데 상권이 어떤가요?")}
                        className="block w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all text-sm text-gray-700 hover:text-gray-900"
                      >
                        "강남구 역삼동에 카페를 창업하려고 하는데 상권이 어떤가요?"
                      </button>
                      <button 
                        onClick={() => handleSendMessage("홍대입구역 근처에 치킨집 창업을 고려하고 있어요. 경쟁업체 현황과 매출 예측을 알려주세요.")}
                        className="block w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all text-sm text-gray-700 hover:text-gray-900"
                      >
                        "홍대입구역 근처에 치킨집 창업을 고려하고 있어요. 경쟁업체 현황과 매출 예측을 알려주세요."
                      </button>
                      <button 
                        onClick={() => handleSendMessage("서울 마포구 합정동에 편의점을 창업하려고 해요. 유동인구와 상권 특성을 분석해주세요.")}
                        className="block w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all text-sm text-gray-700 hover:text-gray-900"
                      >
                        "서울 마포구 합정동에 편의점을 창업하려고 해요. 유동인구와 상권 특성을 분석해주세요."
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {messages.length > 0 && <ChatMessages messages={messages} />}
            

            {isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="bg-blue-50 border border-white rounded-lg p-4 flex items-center gap-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-blue-700 font-medium animate-pulse">
                    장사하기 좋은 날이 상권을 파악중입니다
                  </span>
                </div>
              </div>
            )}
            
            <ChatStatus
              isError={isError}
              isConnected={isConnected}
              hasMessages={hasMessage}
              onRetryConnect={tryConnect}
              isWsUrlConfigured={import.meta.env.VITE_AGENTICA_WS_URL !== ""}
            />
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50/50">
            <ChatInput
              onSendMessage={handleSendMessage}
              disabled={!isConnected || isError || isLastMessageFromUser || isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
