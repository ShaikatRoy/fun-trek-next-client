"use client";

import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { db } from '@/firebase/firebase.config';

type Instructor = {
  id: string;
  name: string;
  image: string;
};

const PopularInstructors: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await db.collection("Funtrek").get();
      const fetchedData: Instructor[] = querySnapshot.docs.map(doc => ({
        id: doc.id, 
        name: doc.data().Name, 
        image: doc.data().Image
      }));
      setInstructors(fetchedData);
      console.log(fetchedData);

    };

    fetchData();
  }, []);


  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Instructors</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-48 h-48 mx-auto relative mb-4">
              <Image src={instructor.image} alt={instructor.name} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-xl font-bold mb-4">{instructor.name}</h3>
            <Link href={`/instructors/${instructor.id}`}>
              <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                View Class
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
