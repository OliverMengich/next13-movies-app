'use client';

import Link from 'next/link';
// const P=({text, slug}:{text:string, slug:string})=>(
//     <p className='border border-gray-300 bg-gradient-to-b from-zinc-200 bg-zinc-800/30 backdrop-blur-2xl rounded-md p-1 mr-4 mt-2'>
//         <Link href={`/${slug}`}>{text}</Link>
//     </p>
// )
export default async function Home() {

    return (
        <div>
            
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <Link replace href={'/movies'} className="ml-4 cursor-pointer top-0 flex flex-col justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <h1 className='font-bold text-2xl'>Movies</h1>
                    <p>...</p>
                </Link>
                <Link href={'/tv-shows'} className="ml-4 cursor-pointer top-0 flex flex-col justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <h1 className='font-bold text-2xl'>TV shows</h1>
                    <p>...</p>
                </Link>
                <Link href={'/people'} className="ml-4 cursor-pointer top-0 flex flex-col justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <h1 className='font-bold text-2xl'>People</h1>
                    <p>...</p>
                </Link>
            </div>
            {/* <MoviesListComponent movies={data.results}/> */}
        </div>
    )
}
