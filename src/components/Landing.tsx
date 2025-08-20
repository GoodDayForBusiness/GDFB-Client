import { MapPin, TrendingUp, Users, Building2, Lightbulb, BarChart3, X, HelpCircle, Play } from "lucide-react";
import logoImage from "../assets/Logo.png";
import { useState } from "react";

interface LandingProps {
  onStartChat: () => void;
}

export function Landing({ onStartChat }: LandingProps) {
  const [showHelpModal, setShowHelpModal] = useState(false);

  return (
    <section className="flex-1 flex flex-col items-center justify-center p-8 relative">
      <div className="space-y-12 max-w-4xl mx-auto">
                <div className="text-center space-y-6 relative">
          {/* 우측 상단 시작하기 버튼 */}
          <div className="absolute top-0 right-0">
            <button
              onClick={onStartChat}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              지금 바로 시작하기
            </button>
          </div>  
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={logoImage} 
              alt="장사하기 좋은 날 로고" 
              className="w-27 h-27" 
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              장사하기 좋은 날
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            소상공인을 위한 <span className="text-blue-600 font-semibold">스마트 상권 분석</span>으로<br />
            성공적인 창업을 위한 최적의 입지를 찾아드립니다
          </p>
          
          {/* 서울 서비스 안내 */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-amber-800">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">
                 현재 서울 지역 서비스 제공 중 • 추후 전국 확장 예정
              </span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">입지 분석</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              선택한 지역의 상권 특성, 유동인구, 경쟁업체 현황을 종합적으로 분석해드립니다
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">매출 예측</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              지역 특성과 업종별 데이터를 기반으로 예상 매출과 수익성을 분석합니다
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-rose-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-500/20 rounded-lg">
                <Users className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">고객 분석</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              지역별 고객층 특성과 소비 패턴을 분석하여 타겟 고객을 파악합니다
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">경쟁 분석</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              주변 경쟁업체 현황과 시장 포화도를 분석하여 경쟁 우위를 점검합니다
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">창업 전략</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              분석 결과를 바탕으로 성공적인 창업을 위한 구체적인 전략을 제시합니다
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-sky-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-sky-500/20 rounded-lg">
                <Building2 className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">실시간 업데이트</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              최신 상권 데이터와 트렌드를 반영하여 정확한 분석 결과를 제공합니다
            </p>
          </div>
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              지금 바로 상권 분석을 시작해보세요!
            </h3>
            <p className="text-blue-100 mb-6">
              아래 버튼을 클릭하여 AI 상권 분석을 시작하세요
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
              <span className="text-sm">실시간 AI 분석 준비 완료</span>
            </div>
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
                    <span className="text-amber-600 font-medium">현재 서울 지역만 서비스 제공 중</span><br />
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
                    유동인구, 경쟁업체, 매출 예측 등<br />
                    종합적인 정보를 확인할 수 있습니다.
                  </p>
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
                
                {/* 서울 서비스 안내 */}
                <div className="mt-4 p-4 bg-amber-100 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 text-amber-800">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">📍 서비스 지역 안내</span>
                  </div>
                  <p className="text-amber-700 text-sm mt-2">
                    현재 서울 지역만 서비스 제공 중이며, 추후 전국으로 확장 예정입니다. 
                    서울 지역의 상권 분석을 통해 창업 준비에 도움을 받으실 수 있습니다.
                  </p>
                </div>
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
    </section>
  );
}
