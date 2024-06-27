import { useRef } from 'react'
import './index.less'

const App: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="page">
      <div className="banner-container font-bold"></div>
      <div ref={contentRef} className="black-linear">
        <div className="content-wrapper">
          <p className="font-36 font-palatino common-p text-center mt-30">DueTy's</p>
          <p className="font-14 din-alternate sub-intro mt-16">
            Hi, there, welcome to my blog, here is a FE-developer, living in Chongqing China, got a Ninja400, Bilibili usually, love OnePiece and
            SlamDunk. like reading? Maybe...
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
