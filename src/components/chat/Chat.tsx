import { useAgenticaRpc } from "../../provider/AgenticaRpcProvider";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { ChatStatus } from "./ChatStatus";
import { useEffect, useRef, useState } from "react";
import { MessageSquare, Sparkles, HelpCircle, X, MapPin } from "lucide-react";
import logoImage from "../../assets/Logo.png";

interface ChatProps {
  onBackToLanding: () => void;
}

export function Chat({ onBackToLanding }: ChatProps) {
  const { messages, conversate, isConnected, isError, tryConnect } =
    useAgenticaRpc();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const hasMessage = messages.length > 0;
  const lastMessage = messages[messages.length - 1];
  const isLastMessageFromUser = lastMessage?.type === "userMessage";
  const [isLoading, setIsLoading] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);



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
      <div className="relative w-full max-w-2xl h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)]">
        <div className="h-full flex flex-col bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <img 
                  src={logoImage} 
                  alt="장사하기 좋은 날 로고" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <div className="flex-1">
                <button
                  onClick={onBackToLanding}
                  className="text-left hover:opacity-80 transition-opacity duration-200"
                >
                  <h2 className="text-lg font-bold text-white">장사하기 좋은 날</h2>
                  <p className="text-blue-100 text-sm">소상공인을 위한 스마트 상권 분석</p>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowHelpModal(true)}
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300"
                >
                  <HelpCircle className="w-4 h-4" />
                  사용 방법
                </button>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-blue-200 text-xs">
                    <Sparkles className="w-3 h-3" />
                    <span>AI 분석</span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                </div>
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
                  <p className="text-blue-600 text-sm max-w-md mx-auto mt-2 font-medium">
                    ⚠️ 꼭 첫 사용 전에는 사용방법을 확인해주세요
                  </p>
                </div>
                

                <div className="space-y-3 max-w-md mx-auto">
                  <div className="text-left">
                    <p className="text-xs text-gray-500 mb-2">💡 예시 질문:</p>
                    <div className="space-y-2">
                      <button 
                        onClick={() => handleSendMessage("종로구 부암동 자화문터널 인구포화도 등급알려줘")}
                        className="block w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all text-sm text-gray-700 hover:text-gray-900"
                      >
                        "종로구 부암동 자화문터널 인구포화도 등급알려줘"
                      </button>
                      <button 
                        onClick={() => handleSendMessage("홍대입구역 1번 출구 근처에 치킨집 창업을 고려하고 있어요. 매출을 예측해 주세요.")}
                        className="block w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all text-sm text-gray-700 hover:text-gray-900"
                      >
                        "홍대입구역 1번 출구 근처에 치킨집 창업을 고려하고 있어요. 매출을 예측해 주세요."
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

      {/* 사용 방법 모달 */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">사용 방법</h2>
              <button
                onClick={() => setShowHelpModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* 모달 내용 */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">지역 선택</h3>
                  <p className="text-gray-600 leading-relaxed">
                    분석하고 싶은 지역을 입력해주세요.<br />
                    서울, 부산, 대구 등 주요 도시나<br />
                    구체적인 동네 이름도 가능합니다.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">업종 선택</h3>
                  <p className="text-gray-600 leading-relaxed">
                    창업하고자 하는 업종을 선택해주세요.<br />
                    카페, 음식점, 소매점 등<br />
                    구체적인 업종을 명시해주세요.
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">AI 분석</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI가 상세한 상권 분석 결과를 제공합니다.<br />
                    유동인구, 인구포화도, 추정 매출 등<br />
                    종합적인 정보를 확인할 수 있습니다.
                  </p>
                </div>
              </div>
              
              {/* 서울 서비스 안내 */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto mt-6">
                <div className="flex items-center gap-3 text-amber-800">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">
                     현재 서울 지역 서비스 제공 중 • 추후 전국 확장 예정 / 업종 선택 추후 업데이트 예정
                  </span>
                </div>
              </div>

              {/* 추가 설명 */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">💡 사용 팁</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• 구체적인 지역명을 입력하면 더 정확한 분석이 가능합니다</li>
                  <li>• 업종은 가능한 한 구체적으로 입력해주세요 (예: "커피전문점" 대신 "스타벅스형 카페")</li>
                  <li>• 분석 결과는 실시간으로 업데이트되며, 최신 데이터를 반영합니다</li>
                </ul>
              </div>
            </div>

            {/* 모달 푸터 */}
            <div className="flex items-center justify-center p-6 border-t border-gray-200">
              <button
                onClick={() => setShowHelpModal(false)}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
