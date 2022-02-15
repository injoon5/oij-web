const projectsData = [
  {
    title: '(전) 개인 웹사이트',
    description: `Tailwind CSS를 이용하여 처음으로 제대로 만든 제 개인 웹사이트 입니다. 지금 보면 좀 허접해 보이긴 합니다만, 그 당시에는 많은 정성을 들였습니다. `,
    imgSrc: '/static/images/old_web.png',
    href: 'https://oij.vercel.app',
  },
  {
    title: 'Discord Text2Img',
    description: `'디스코드' 라는 채팅 프로그램에서 글자를 강조하기 위해 만들어진 툴입니다. 텍스트를 이미지로 만들어서 반환하죠. 파이썬과 Flask 를 이용하였으나, API Docs 같은것도 필요하고 성능도 개선하고 싶어 FastAPI로 리라이트 했습니다. `,
    imgSrc: '/static/images/dctxt2img.png',
    href: 'https://dctxt2img.vercel.app/',
  },
  {
    title: 'Cloudflare Workers URL Shortener',
    description: `Cloudflare Workers를 이용해서 벡엔드를, Cloudflare Pages를 이용하여 프런트엔드를 만든 URL 단축기 입니다. `,
    imgSrc: '/static/images/cf-url.png',
    href: 'https://cf-url.injoon5.repl.co/',
  },
  {
    title: 'injoon5 Bot',
    description: `디스코드에서 작동하는 슬래시 커맨드 기반 다용도 봇 입니다. 필요할 때마다 기능을 추가해가며 개발하고 있습니다. `,
    imgSrc: '/static/images/injoon5-bot.png',
    href: 'https://discord.com/api/oauth2/authorize?client_id=936170476273823745&permissions=0&scope=applications.commands%20bot',
  },
]

export default projectsData
