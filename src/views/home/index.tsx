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
          <p className="font-14 din-alternate sub-intro mt-16 words-2-space">
            嗨，欢迎您光临我的一亩三分地儿。这个B...站用户，是一名前端开发，也是个摩的佬，中年二次元。
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
