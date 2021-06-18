import Head from 'next/head'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Index = () => (
  <Layout>
    <Head>
      <title>MyProfile</title>
    </Head>
    <div className="container mx-auto">
      <div className="flex justify-center mt-10">
        <div className="flex flex-col items-center">
          <img
            src="/images/myprofile.png"
            className="rounded-full h-32 w-32"
            alt="私のアバター"
          />
          <h1 className="text-gray-700 text-4xl my-4">ゆういち</h1>
          <p className="text-gray-600 text-justify px-8 mb-8">Webエンジニア</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 text-gray-600">
        <Card
          title={'趣味'}
          description={
            '自宅にいるときは、映画・アニメ鑑賞・料理を作ったりしています。休日はキャンプ・海で釣り・ドライブをしています。'
          }
        />
        <Card
          title={'特技'}
          description={
            'Web系のプログラミング開発が得意で、PHP・JavaScript・HTML・CSS・MySQLの経験が長いです。'
          }
        />
        <Card
          title={'ひとこと'}
          description={
            '常に新しいこと・経験したことのないことにチャレンジしながら自分を成長していくことを心がけています。'
          }
        />
      </div>
    </div>
  </Layout>
)

export default Index
