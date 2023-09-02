import Link from "next/link";
import Image from 'next/image';

const PopularClasses: React.FC = () => {
  const classes = [
    { id: 1, title: "Hiking Adventures", image: "https://i.ibb.co/ccKjmQM/pexels-photo-9292930.jpg", description: "Explore the mountains with our expert guides." },
    { id: 2, title: "Arts & Crafts", image: "https://i.ibb.co/ccKjmQM/pexels-photo-9292930.jpg", description: "Unleash your creativity with hands-on projects." },
    { id: 3, title: "Swimming 101", image: "https://i.ibb.co/ccKjmQM/pexels-photo-9292930.jpg", description: "Dive into the basics of swimming with our coaches." },
    { id: 4, title: "Campfire Stories", image: "https://i.ibb.co/ccKjmQM/pexels-photo-9292930.jpg", description: "Gather around the fire for thrilling tales." },
    { id: 5, title: "Nature Walks", image: "https://i.ibb.co/ccKjmQM/pexels-photo-9292930.jpg", description: "Discover the beauty of nature around the camp." },
    { id: 6, title: "Tent Building", image: "https://i.ibb.co/ccKjmQM/pexels-photo-9292930.jpg", description: "Learn the art of setting up your own tent." },
  ];

  return (
    <section className="py-10">
    <h2 className="text-3xl font-bold text-center mb-8">Popular Classes</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {classes.map((cls) => (
        <div key={cls.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="w-full h-48 relative">
            <Image src={cls.image} alt={cls.title} layout="fill" objectFit="cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{cls.title}</h3>
            <p className="text-gray-600 mb-4">{cls.description}</p>
            <Link href={`/classes/${cls.id}`}>
              <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default PopularClasses;
