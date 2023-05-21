import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          width={300}
          height={100}
          src="/toogle.png"
          alt="google logo"
        />
        <HomeSearch />
      </div>
    </>
  )
}
