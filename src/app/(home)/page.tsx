import Image from 'next/image'
import Banner from './Banner';
import PopularClasses from './PopularClass';

const HomePage = () => {
  return (
    <main className="">
        <Banner></Banner>
        <PopularClasses></PopularClasses>
    </main>
  )
}

export default HomePage;