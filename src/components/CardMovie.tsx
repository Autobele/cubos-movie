// import Image from 'next/image'
// import React from 'react'

// type CardMovie = {
//     imageSrc?: string,
//     name: string,
//     categories: string
// }

// export const CardMovie = ({ name, categories, imageSrc = "/assets/not-available.png", }: CardMovie) => {
//     return (
//         <div
//             className="relative flex justify-center h-fit w-fit rounded-lg"
//         >
//             <Image
//                 src={imageSrc}
//                 width={235}
//                 height={355}
//                 alt="card"
//             />
//             <div
//                 className="absolute flex items-end w-full h-full"
//                 style={{
//                     background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, #000 100%)",
//                 }}
//             />

//             <div className="absolute flex items-end w-full h-full text-base z-10 ">
//                 <div className='px-[16px] pb-[16px]'>
//                     <h3 className="text-mauve-12">{name}</h3>
//                     <p className="text-mauve-9 font-bold">{categories}</p>
//                 </div>
//             </div>
//         </div >
//     )
// }
import Image from 'next/image'
import React from 'react'
import { CircularRating } from './CircularRating'

type CardMovie = {
    imageSrc?: string,
    name: string,
    categories: string,
    vote_average?: number
}

export const CardMovie = ({ name, categories, imageSrc = "/assets/not-available.png", vote_average = 0 }: CardMovie) => {
    const ratingPercent = Math.round(vote_average * 10);

    return (
        <div className="relative flex justify-center h-fit w-fit rounded-lg group">
            <Image
                src={imageSrc}
                width={235}
                height={355}
                alt="card"
            />

            {/* Gradiente */}
            <div
                className="absolute flex items-end w-full h-full"
                style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, #000 100%)",
                }}
            />

            {/* Conteúdo do card */}
            <div className="absolute flex items-end w-full h-full text-base z-10">
                <div className='px-[16px] pb-[16px]'>
                    <h3 className="text-mauve-12">{name}</h3>
                    <p className="text-mauve-9 font-bold">{categories}</p>
                </div>
            </div>

            {/* CircularRating no centro, aparece só no hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CircularRating rating={ratingPercent} size={98} strokeWidth={4} />
            </div>
        </div>
    )
}
