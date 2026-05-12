import Image from "next/image";
import { MapPin, Calendar, Wallet, BookOpen, ChevronRight, Compass } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-10 py-5 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold text-brand-ocean flex items-center gap-2">
            <Compass className="w-7 h-7" />
            연정이의 여행나루
          </div>
          <nav className="hidden md:flex gap-8 text-[15px] text-gray-600 font-medium">
            <a href="#destinations" className="hover:text-brand-ocean transition-colors">여행지 둘러보기</a>
            <a href="#book-pick" className="hover:text-brand-coral transition-colors">추천 도서</a>
            <a href="#" className="hover:text-brand-ocean transition-colors">나루 소개</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-brand-ocean hover:bg-brand-ocean-hover text-white px-6 py-2.5 rounded-full shadow-sm transition-all font-medium">
            구독하기
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero pt-24 pb-32 px-6 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 text-brand-coral font-medium text-sm mb-6 backdrop-blur-sm border border-brand-coral/20">
              <MapPin className="w-4 h-4" /> 이번 주의 추천 여행지
            </div>
            <h1 className="text-5xl md:text-[4rem] font-extrabold tracking-tight mb-6 text-brand-dark leading-tight break-keep">
              가깝지만 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-ocean to-brand-coral">너무여행여행한 강릉!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto break-keep leading-relaxed">
              파도 소리와 진한 커피 향이 어우러진 곳. <br />
              무작정 떠나고 싶은 날, 당일치기로 다녀오기 완벽한 바다로 당신을 초대합니다.
            </p>
            
            <div className="max-w-[900px] mx-auto rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-white transform hover:scale-[1.01] transition-transform duration-500">
              <div className="relative aspect-[21/9] bg-gray-100 w-full">
                <Image 
                  src="/gangneung.png" 
                  alt="강릉 바다 풍경" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[2.2rem] font-bold mb-4 text-brand-dark">이번 주말, 어디로 떠날까요?</h2>
              <p className="text-gray-500 text-lg">당신의 일정과 예산에 맞춘 맞춤형 여행 코스</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* 강릉 당일치기 */}
              <div className="bg-white rounded-[2rem] p-10 border-2 border-transparent hover:border-brand-ocean/30 shadow-lg hover:shadow-xl transition-all group">
                <div className="inline-flex px-3 py-1 bg-brand-ocean-light text-brand-ocean rounded-md text-sm font-bold tracking-wide mb-6">
                  DAY TRIP
                </div>
                <h3 className="text-[28px] font-bold mb-4 text-brand-dark group-hover:text-brand-ocean transition-colors">첫 번째 여행지: 강릉</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed break-keep mb-8 h-20">
                  푸른 동해 바다를 보며 마시는 커피 한 잔의 여유. 교통편이 잘 되어 있어 가벼운 마음으로 훌쩍 떠나기 좋습니다.
                </p>
                
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl mb-8">
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-ocean">
                      <Calendar className="w-5 h-5" />
                    </div>
                    당일치기
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-coral">
                      <Wallet className="w-5 h-5" />
                    </div>
                    약 150,000 원
                  </div>
                </div>
                
                <button className="w-full py-4 rounded-xl bg-brand-ocean text-white font-bold text-lg hover:bg-brand-ocean-hover transition-colors flex items-center justify-center gap-2">
                  상세 일정 보기 <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* 부산 1박 2일 */}
              <div className="bg-white rounded-[2rem] p-10 border-2 border-transparent hover:border-brand-coral/30 shadow-lg hover:shadow-xl transition-all group">
                <div className="inline-flex px-3 py-1 bg-brand-coral-light text-brand-coral rounded-md text-sm font-bold tracking-wide mb-6">
                  2 DAYS
                </div>
                <h3 className="text-[28px] font-bold mb-4 text-brand-dark group-hover:text-brand-coral transition-colors">두 번째 여행지: 부산</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed break-keep mb-8 h-20">
                  해운대의 화려한 야경부터 로컬 맛집 탐방까지. 하루로는 부족한 다채로운 매력의 항구 도시를 온전히 즐겨보세요.
                </p>
                
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl mb-8">
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-ocean">
                      <Calendar className="w-5 h-5" />
                    </div>
                    1박 2일 (이틀)
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-coral">
                      <Wallet className="w-5 h-5" />
                    </div>
                    약 350,000 원
                  </div>
                </div>
                
                <button className="w-full py-4 rounded-xl bg-brand-coral text-white font-bold text-lg hover:bg-brand-coral-hover transition-colors flex items-center justify-center gap-2">
                  상세 일정 보기 <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Book Recommendation Section */}
        <section id="book-pick" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto bg-brand-light rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-coral-light rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-ocean-light rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-ocean font-bold mb-4 tracking-wide">
                  <BookOpen className="w-5 h-5" /> BOOK PICK
                </div>
                <h2 className="text-[2.2rem] font-extrabold mb-6 text-brand-dark leading-tight break-keep">
                  내 여행을 더 풍성하게 <br /> 해 줄 책 한 권
                </h2>
                
                <div className="pl-6 border-l-4 border-brand-coral mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">나를 부르는 숲, 《안식》</h3>
                  <p className="text-gray-500 font-medium">마르바 던 (Marva Dawn)</p>
                </div>
                
                <p className="text-gray-600 text-[17px] leading-relaxed break-keep mb-8">
                  일상의 번잡함에서 벗어나 여행지에서 온전한 쉼표를 찍고 싶을 때. 
                  조용한 숲길을 걷거나 해변의 카페에 앉아 읽기에 완벽한 책입니다. 
                  진정한 쉼과 안식의 의미를 찾아가며, 당신의 여행을 한층 더 깊이 있게 만들어 줄 것입니다.
                </p>
                
                <button className="text-brand-coral font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  도서 상세 정보 보기 <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                <Image 
                  src="/book.png" 
                  alt="추천 도서 이미지" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-brand-dark text-white/80 py-12 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Compass className="w-6 h-6 text-brand-coral" />
            <span className="text-[19px] font-bold text-white">연정이의 여행나루</span>
          </div>
          <div className="flex gap-8 text-[14px]">
            <a href="#" className="hover:text-white transition-colors">여행기 모아보기</a>
            <a href="#" className="hover:text-white transition-colors">인스타그램</a>
            <a href="#" className="hover:text-white transition-colors">이메일 구독</a>
          </div>
          <span className="text-[13px] text-white/40">© 2024 Yeonjeong's Travel. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
