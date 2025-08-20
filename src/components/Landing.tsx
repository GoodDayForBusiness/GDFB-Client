import { MapPin, TrendingUp, Users, Building2, Lightbulb, BarChart3 } from "lucide-react";
import logoImage from "../assets/Logo.png";

export function Landing() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center p-8 relative">
      <div className="space-y-12 max-w-4xl mx-auto">
        <div className="text-center space-y-6">
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
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">사용 방법</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800">지역 선택</h3>
              <p className="text-gray-600 text-sm">분석하고 싶은 지역을 입력해주세요</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800">업종 선택</h3>
              <p className="text-gray-600 text-sm">창업하고자 하는 업종을 선택해주세요</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800">분석 결과</h3>
              <p className="text-gray-600 text-sm">AI가 상세한 상권 분석 결과를 제공합니다</p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              지금 바로 상권 분석을 시작해보세요!
            </h3>
            <p className="text-blue-100 mb-6">
              오른쪽 채팅창에서 지역명과 업종을 입력하면 AI가 상세한 분석을 제공합니다
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
              <span className="text-sm">실시간 AI 분석 준비 완료</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
