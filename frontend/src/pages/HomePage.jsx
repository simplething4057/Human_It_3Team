import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Heart, ShieldCheck, Activity, MessageSquare, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-extrabold text-teal-600 flex items-center gap-2">
                <Heart className="w-8 h-8 fill-current" />
                CareLink
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {isAuthenticated ? (
                <>
                  <Link to="/mypage" className="text-slate-600 hover:text-teal-600 transition-colors font-semibold">마이페이지</Link>
                  <button 
                    onClick={logout}
                    className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-teal-700 transition-all shadow-md"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-teal-600 transition-colors font-semibold">로그인</Link>
                  <Link to="/signup" className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-teal-700 transition-all shadow-md">
                    시작하기
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Slider */}
      <section className="relative h-[650px]">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center text-white bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-slate-900/60" />
              <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg">
                  CareLink - AI가 건강검진 <br className="hidden md:block" /> 결과를 쉽게 해석해드립니다
                </h1>
                <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
                  복잡한 의료 데이터를 AI 분석을 통해 명확하고 실행 가능한 인사이트로 변환하세요.
                </p>
                <Link to={isAuthenticated ? "/upload" : "/signup"} className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl">
                  지금 분석 시작하기 <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full flex items-center justify-center text-white bg-[url('https://images.unsplash.com/photo-1505751172107-573957a243b0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-slate-900/60" />
              <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                  개인 맞춤형 <br /> 건강 관리 솔루션
                </h1>
                <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-medium">
                  당신의 건강 지표에 맞춘 식단과 운동 계획을 AI가 제안합니다.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      
      {/* Reviews */}
      <section className="py-24 bg-[#f9f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">사용자 후기</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "김OO", text: "드디어 건강검진 결과를 이해했어요! AI의 설명이 정말 명확하고 도움이 되었습니다." },
              { name: "이XX", text: "인터페이스가 현대적이고 사용하기 쉽네요. 모든 분들께 강력히 추천합니다." },
              { name: "박YY", text: "더 이상 의학 용어를 검색할 필요가 없어요. CareLink가 즉시 모든 것을 해결해 줍니다." },
              { name: "최ZZ", text: "내 건강 관리에 더 자신감이 생겼어요. 정말 혁신적인 도구입니다." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-orange-50 hover:shadow-md transition-shadow">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                <p className="font-extrabold text-slate-900">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              건강 비디오
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Video */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="CareLink Demo"
                allowFullScreen
              ></iframe>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                의료 전문가가 엄선하고 데이터 기반 분석을 통해 제공되는
                최신 헬스케어 정보를 확인하세요.
                귀하만의 건강검진 트렌드를 바탕으로 라이프 스타일을
                개선하는 방법을 알아보세요.
              </p>

              <ul className="space-y-4 text-slate-700 font-medium">
                <li>✔ 맞춤형 영양 가이드</li>
                <li>✔ 장수를 위한 활동 추천</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 text-slate-800 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-12">
            <div>
              <div className="flex items-center gap-2 text-3xl font-extrabold mb-6 text-teal-600">
                <Heart className="w-10 h-10 fill-current" />
                CareLink
              </div>
              <div className="flex flex-wrap gap-8 text-slate-600 font-bold mb-8">
                <a href="#" className="hover:text-teal-600 transition-colors">이용약관</a>
                <a href="#" className="hover:text-teal-600 transition-colors">개인정보처리방침</a>
              </div>
              <div className="space-y-4 text-slate-500 text-sm font-medium">
                <p>(주)케어링크 헬스케어 서비스</p>
                <p>서울특별시 디지털밸리 헬스이노베이션로 123</p>
                <p>전화: 02-1234-5678 | 이메일: support@carelink.health</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-8 text-slate-900">문의하기</h3>
              <form className="space-y-4">
                <input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="제목" type="text" />
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg py-4 px-4 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="메시지" rows={4}></textarea>
                <button 
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-extrabold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
            <p>© Copyright 2026 CareLink Healthcare - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
