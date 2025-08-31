import Image from 'next/image'
import React from 'react'

type CardMovie = {
    imageSrc?: string,
    name: string,
    categories: string
}

export const CardMovie = ({ name, categories, imageSrc = "/assets/not-available.png", }: CardMovie) => {
    return (
        <div
            className="relative flex justify-center h-fit w-fit rounded-lg"
        >
            <Image
                src={imageSrc}
                width={235}
                height={355}
                alt="card"
            />
            <div
                className="absolute flex items-end w-full h-full"
                style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, #000 100%)",
                }}
            />

            <div className="absolute flex items-end w-full h-full text-base z-10 ">
                <div className='px-[16px] pb-[16px]'>
                    <h3 className="text-mauve-12">{name}</h3>
                    <p className="text-mauve-9 font-bold">{categories}</p>
                </div>
            </div>
        </div >
    )
}

