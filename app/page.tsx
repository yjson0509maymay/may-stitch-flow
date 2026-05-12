import Image from "next/image";
import { PlayCircle, Edit3, Type, Users, Languages, LayoutGrid, CheckCircle2, Check } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-100">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold text-brand-orange">WriteFlow</div>
          <nav className="hidden md:flex gap-8 text-[15px] text-gray-500 font-medium">
            <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="hover:text-gray-900 transition-colors">FAQ</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Blog</a>
          </nav>
        </div>
        <div className="flex items-center gap-8 text-[15px] font-medium">
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Login</a>
          <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-md shadow-sm transition-colors">
            Start Free Trial
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero pt-28 pb-32 px-6 text-center">
          <h1 className="text-5xl md:text-[3.5rem] font-bold tracking-tight mb-6 text-brand-dark">
            AI와 함께 <span className="text-brand-orange">더 빠르게 더 잘</span> 쓰세요
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto break-keep leading-relaxed">
            아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 블로그, 마케팅 문구, 이메일까지<br />
            WriteFlow가 당신의 글쓰기 잠재력을 깨워드립니다.
          </p>
          <div className="flex justify-center gap-4 mb-24">
            <button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3.5 rounded-md font-medium transition-colors text-[15px] flex items-center gap-2">
              무료 체험 시작 <span>➔</span>
            </button>
            <button className="border border-brand-orange/30 text-brand-orange bg-white hover:bg-orange-50 px-8 py-3.5 rounded-md font-medium transition-colors text-[15px] flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> 데모 보기
            </button>
          </div>
          
          <div className="max-w-[1000px] mx-auto rounded-xl shadow-2xl overflow-hidden border border-white bg-white">
            <div className="bg-[#F8FAFC] px-5 py-3.5 flex gap-2 border-b border-gray-100">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="relative aspect-[16/9] bg-gray-50 w-full">
              <Image 
                src="/hero.png" 
                alt="App interface mockup" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-6 bg-[#FAFAFA] text-center">
          <h2 className="text-[2rem] font-bold mb-4 text-brand-dark">강력한 기능, 끝없는 가능성</h2>
          <p className="text-gray-500 mb-20">글쓰기에 필요한 모든 도구를 하나의 직관적인 플랫폼에 담았습니다.</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {[
              { icon: Edit3, color: "text-orange-500", title: "AI 글쓰기 어시스턴트", desc: "문맥을 이해하고 자연스러운 문장을 제안하여 글쓰기 속도를 획기적으로 높여줍니다." },
              { icon: CheckCircle2, color: "text-green-500", title: "언제나 완벽한 문법", desc: "오탈자와 문법 오류를 실시간으로 교정하여 언제나 프로페셔널한 결과물을 완성하세요." },
              { icon: Type, color: "text-orange-500", title: "브랜드 목소리에 맞게 조절", desc: "친근하게, 전문적으로, 혹은 유머러스하게. 당신의 브랜드 톤앤매너를 학습합니다." },
              { icon: Languages, color: "text-blue-500", title: "50개 이상 언어로 작성", desc: "언어의 장벽을 넘어 전 세계 독자들과 소통하세요. 자연스러운 번역과 로컬라이제이션을 지원합니다." },
              { icon: LayoutGrid, color: "text-orange-400", title: "100개 이상 템플릿", desc: "SNS 게시물부터 제품 설명까지, 검증된 프레임워크 기반의 템플릿으로 빠르게 시작하세요." },
              { icon: Users, color: "text-green-600", title: "실시간 협업", desc: "팀원들과 함께 실시간으로 문서를 편집하고 피드백을 주고받으며 생산성을 극대화하세요." }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-2xl bg-white border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center mb-6">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark">{feature.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed break-keep">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 px-6 bg-white text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[2rem] font-bold mb-4 text-brand-dark">합리적인 요금제</h2>
            <p className="text-gray-500 mb-12">당신의 작업 규모에 맞는 요금제를 선택하세요.</p>
            
            <div className="inline-flex bg-brand-blue-light p-1 rounded-full mb-16 text-[15px] font-medium">
              <button className="px-8 py-2.5 rounded-full bg-white shadow-sm text-brand-dark">Monthly</button>
              <button className="px-8 py-2.5 rounded-full text-gray-500 hover:text-gray-900">Yearly (Save 20%)</button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-left items-stretch">
              {/* Free */}
              <div className="bg-white rounded-[2rem] p-10 border border-gray-200">
                <h3 className="text-[22px] font-bold mb-2 text-brand-dark">Free</h3>
                <p className="text-gray-500 text-sm mb-8 break-keep">개인 사용자를 위한 기본 기능</p>
                <div className="mb-10">
                  <span className="text-[2.5rem] font-bold tracking-tight">$0</span>
                  <span className="text-gray-500 text-sm ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-10 text-[15px] text-gray-600">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 월 5,000 단어 생성</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 기본 템플릿 10개</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 기본 문법 교정</li>
                </ul>
                <button className="w-full py-3.5 rounded-lg bg-brand-blue-light text-brand-dark font-medium hover:bg-gray-200 transition-colors mt-auto">무료로 시작하기</button>
              </div>
              
              {/* Pro */}
              <div className="bg-white rounded-[2rem] p-10 border-[2.5px] border-brand-orange shadow-[0_20px_50px_rgba(242,97,21,0.1)] relative transform md:-translate-y-4">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[13px] font-bold px-4 py-1.5 rounded-full">가장 인기</div>
                <h3 className="text-[22px] font-bold text-brand-orange mb-2">Pro</h3>
                <p className="text-gray-500 text-sm mb-8 break-keep">전문 작가와 마케터를 위한 강력한 도구</p>
                <div className="mb-10">
                  <span className="text-[2.5rem] font-bold tracking-tight">$19</span>
                  <span className="text-gray-500 text-sm ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-10 text-[15px] text-gray-600">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-orange" /> 무제한 단어 생성</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-orange" /> 100+ 프리미엄 템플릿</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-orange" /> 고급 톤앤매너 조절</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-orange" /> 50+ 언어 지원</li>
                </ul>
                <button className="w-full py-3.5 rounded-lg bg-brand-orange text-white font-medium hover:bg-brand-orange-hover transition-colors mt-auto">Pro 요금제 선택</button>
              </div>
              
              {/* Enterprise */}
              <div className="bg-white rounded-[2rem] p-10 border border-gray-200">
                <h3 className="text-[22px] font-bold mb-2 text-brand-dark">Enterprise</h3>
                <p className="text-gray-500 text-sm mb-8 break-keep">대규모 팀과 기업을 위한 커스텀 솔루션</p>
                <div className="mb-10">
                  <span className="text-[2.5rem] font-bold tracking-tight">$49</span>
                  <span className="text-gray-500 text-sm ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-10 text-[15px] text-gray-600">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Pro의 모든 기능 포함</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 팀 협업 및 권한 관리</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 전용 어카운트 매니저</li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 커스텀 AI 모델 학습</li>
                </ul>
                <button className="w-full py-3.5 rounded-lg bg-brand-blue-light text-brand-dark font-medium hover:bg-gray-200 transition-colors mt-auto">영업팀 문의</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-cta py-24 px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[2.5rem] font-bold mb-6 tracking-tight">글쓰기를 혁신할 준비가 되셨나요?</h2>
            <p className="text-white/90 text-[17px] mb-10 break-keep">
              10,000명 이상의 작가와 함께하세요. 신용카드 등록 없이 지금 바로 체험해보실 수 있습니다.
            </p>
            <button className="bg-white text-brand-orange px-10 py-4 rounded-md font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors">
              무료 체험 시작
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-brand-blue-light py-8 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[17px] font-bold text-brand-orange">WriteFlow</span>
            <span className="text-[13px] text-gray-500">© 2024 WriteFlow AI. All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-[13px] text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Help</a>
          </div>
        </div>
      </footer>
    </>
  );
}
