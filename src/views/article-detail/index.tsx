import 'react'
import { html } from '@/views/articles/test.md'

const ArticleDetail: React.FC = () => {
  return <div className="article-wrapper" dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default ArticleDetail
