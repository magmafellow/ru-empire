import Container from '@/app/ui/container'
import Header from '@/app/ui/header'

import { bitter } from '@/app/lib/fonts'

export default function Page() {
  return (
    <Container>
      <Header></Header>
      {/* first section */}
      <div className="pt-0 lg:pt-14 flex flex-col-reverse lg:flex-row">
        <div className="basis-[65%] xl:basis-[55%]">
          <h1 className="text-center mb-4 lg:mb-8 xl:mb-10 text-[48px] md:text-[52px] lg:text-[64px] expressive max-w-[580px]">
            Российская империя
          </h1>
          <p className={`${bitter.className} text-bs max-w-[580px]`}>
            Росси́йская импе́рия (рус. дореф. Россійская Имперія; также
            Всеросси́йская импе́рия) — государство, существовавшее в период с 1721
            года до Февральской революции 1917 года и провозглашения Временным
            правительством в сентябре того же года республики. Девиз: «Съ нами
            Богъ!» «Боже, Царя храни!»
          </p>
        </div>
        <div className="basis-[35%] xl:basis-[45%] mb-6 flex justify-center items-center">
          <div className="flex w-[300px] flex-col">
            <span className="h-[66.67px] bg-bl"></span>
            <span className="h-[66.67px] bg-yel"></span>
            <span className="h-[66.67px] bg-wh"></span>
          </div>
        </div>
      </div>
    </Container>
  )
}
