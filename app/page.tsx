'use client'
import { useState } from 'react'
import Image from 'next/image'
import coffee from '@/public/images/coffee.png'

import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
//import { authOptions } from './api/auth/authOptions'


const HeavyComponent = dynamic(
  () => import('./components/HeavyComponent'), 
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  });


export default function Home() {
  //const session = await getServerSession(authOptions)
  const [isVisible, setVisible] = useState(false);
  return (
    <main className='relative h-screen'>
        <h1>Hello World</h1>
        <button onClick={() => setVisible(true)}>Show</button>
        <button onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [
            {name:'c'},
            {name:'b'},
            {name:'a'}
          ];

         const sorted = _.orderBy(users, ['name']);
         console.log(sorted);
        }}>Sort</button>
        {isVisible && <HeavyComponent/>}
    </main>
  )
}

// export const metadata: Metadata = {
//   title: ''
// }

// export async function generateMetadata(): Promise<Metadata/> {
//   const product = await fetch('');

//   return {
//     title: product.title,
//   }
// }

//  <main className='relative h-screen'>
//       { <Image src={coffee} alt='coffee'/> }
//       { <Image 
//         src='https://bit.ly/react-cover'
//         fill
//         alt='coffee'
//         className='object-cover'
//         sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw' 
//         quality={75}
//         priority
//         /> }
//         <h1>Hello World</h1>
//         <HeavyComponent/>
//     </main>