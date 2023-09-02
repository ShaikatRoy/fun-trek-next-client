import Image from 'next/image'
import Banner from './Banner';
import PopularClasses from './PopularClass';
import PopularInstructors from './PopularInstructors';

const HomePage = () => {
  return (
    <main className="">
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
    </main>
  )
}

export default HomePage;