import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 2

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <h1 className="flex justify-center pb-5 text-5xl font-bold leading-5 tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-10 lg:text-7xl lg:leading-14 ">
        Injoon Oh
      </h1>
      <h2 className="flex justify-center text-2xl font-extrabold leading-9 tracking-tight text-gray-700 dark:text-gray-300 md:text-4xl md:leading-14 lg:text-5xl">
        소프트웨어 개발에 관심이 많은 학생.
      </h2>
      <div className="py-10"></div>

      <div className="columns-1 gap-6 space-y-6 2xl:columns-2">
        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-bl from-red-500 to-blue-600 p-10">
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white text-opacity-60">
            다양한 기술 스택
          </h2>
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white">
            편리성, 안정성에 성능까지.
          </h2>
        </div>
        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-tr from-fuchsia-900 to-red-600 p-10">
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white text-opacity-60">
            여러 프로젝트를 진행
          </h2>
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white">
            믿을 수 있는 경력.
          </h2>
        </div>
        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-bl from-yellow-500 to-blue-600 p-10">
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white text-opacity-60">
            여러 사람들의 인정
          </h2>
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white">
            검증된 실력.
          </h2>
        </div>
        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-bl from-blue-700 to-pink-500 p-10">
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white text-opacity-60">
            멋진 디자인
          </h2>
          <h2 className="leading-15 justify-right flex text-5xl font-extrabold tracking-tight text-white">
            남다른 차별성.
          </h2>
        </div>
      </div>
    </>
  )
}
