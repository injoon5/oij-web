import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import { motion } from 'framer-motion'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="py-16"></div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <h1
          className="flex justify-center py-5 text-5xl font-bold leading-5 tracking-tight text-gray-900 dark:text-gray-100 md:text-7xl md:leading-14"
          style={{ wordBreak: 'keep-all' }}
        >
          Injoon Oh
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h2
          className="flex justify-center text-2xl font-extrabold leading-9 tracking-tight text-gray-700 dark:text-gray-300 md:text-5xl md:leading-14"
          style={{ wordBreak: 'keep-all' }}
        >
          소프트웨어 개발에 관심이 많은 학생.
        </h2>
      </motion.div>
      <div className="py-10"></div>
      <div className="columns-1 gap-4 space-y-4 2xl:columns-2">
        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-bl from-red-500 to-blue-600 p-10 z-10">
          <h2
            className="leading-15 justify-right flex text-4xl font-extrabold text-white text-opacity-60 md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            다양한 기술 스택
          </h2>
          <h2
            className="leading-15 justify-right flex pb-5 text-4xl font-extrabold text-white md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            무한한 가능성.
          </h2>
          <h2
            className="leading-15 justify-right flex break-words pb-7 text-xl font-bold text-white md:text-2xl"
            style={{ wordBreak: 'keep-all' }}
          >
            저는 다양한 기술 스택을 익숙하게 다룰 줄 압니다. C언어 같은 저수준 언어부터 Python 같은
            고수준 언어까지 말이죠. 게다가 이런 언어들에 익숙하기까지 합니다. 덕분에 다양한 환경에서
            실행되는 코드를 능숙히 만들어낼 수 있죠.
          </h2>
          <div className="rounded-3xl bg-white opacity-95">
            <Image
              src="/static/images/techstack.png"
              alt="Logos Of Tech Stack"
              width="800"
              height="700"
            />
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-tr from-fuchsia-900 to-red-600 p-10 ">
          <h2
            className="leading-15 justify-right flex text-4xl font-extrabold text-white text-opacity-60 md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            여러 프로젝트 진행
          </h2>
          <h2
            className="leading-15 justify-right flex pb-5 text-4xl font-extrabold text-white md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            믿을 수 있는 경력.
          </h2>
          <h2
            className="leading-15 justify-right flex break-words pb-7 text-xl font-bold text-white md:text-2xl"
            style={{ wordBreak: 'keep-all' }}
          >
            과거부터 저는 다양한 프로젝트들을 진행해 왔습니다. 웹 기반, 데스크톱 프로그램, 모바일 앱
            등 말이죠. 새로운 언어를 활용하여 프로젝트를 진행할 때마다 새로운 것들을 배울 수 있어서
            프로젝트를 하는 것을 좋아합니다.
          </h2>
          <Link
            href={`/projects`}
            className="leading-15 justify-right flex break-words text-xl font-bold text-white hover:underline md:text-2xl"
            aria-label={'프로젝트 보러가기'}
            style={{ wordBreak: 'keep-all' }}
          >
            프로젝트 보러가기 &rarr;
          </Link>
        </div>

        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-bl from-yellow-500 to-blue-600 p-10">
          <h2
            className="leading-15 justify-right flex text-4xl font-extrabold text-white text-opacity-60 md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            여러 사람들의 인정
          </h2>
          <h2
            className="leading-15 justify-right flex pb-5 text-4xl font-extrabold text-white sm:text-4xl md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            검증된 실력.
          </h2>
          <h2
            className="leading-15 justify-right flex break-words pb-7 text-xl font-bold text-white md:text-2xl"
            style={{ wordBreak: 'keep-all' }}
          >
            저는 학교에서는 물론, 외부 사람들에서도 인정받고 있습니다. 저는 유명 대학의 소프트웨어
            영재원을 2년째 다니고 있습니다. 또한 오픈소스 공유 플랫폼인 GitHub 계정의 팔로워도
            50명이 넘었죠.
          </h2>

          <SocialIcon kind="github" href={siteMetadata.github} size="8" />
        </div>

        <div className="aspect-w-16 aspect-h-9 relative rounded-3xl bg-gradient-to-bl from-blue-700 to-pink-500 p-10">
          <h2
            className="leading-15 justify-right flex text-4xl font-extrabold text-white text-opacity-60 md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            멋진 디자인
          </h2>
          <h2
            className="leading-15 justify-right flex pb-5 text-4xl font-extrabold text-white sm:text-4xl md:text-5xl"
            style={{ wordBreak: 'keep-all' }}
          >
            남다른 차별성.
          </h2>
          <h2
            className="leading-15 justify-right flex break-words pb-7 text-xl font-bold text-white md:text-2xl"
            style={{ wordBreak: 'keep-all' }}
          >
            저는 디자인과 관련해서는 항상 최고를 추구합니다. 원래는 Bootstrap 같은 Component가 미리
            정의되어 있는 라이브러리를 사용했으나, 저만의 스타일이 필요해 보여서 현재는 Tailwind
            CSS를 이용하고 있습니다. 이 덕분에 제가 만드는 모든 프로젝트들은 모두 자신만의 개성을
            가진 뛰어난 디자인으로 이루어져 있습니다.
          </h2>
          <div className="rounded-3xl bg-white opacity-95">
            <Image
              src="/static/images/projects.png"
              alt="Logos Of Tech Stack"
              width="800"
              height="700"
            />
          </div>
        </div>
      </div>
    </>
  )
}
