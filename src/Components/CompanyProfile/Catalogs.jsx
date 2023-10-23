import { HeadingOne } from 'Shared'

const Catalogs = ({ catalogs }) => {

    return <section class='my-5 max-w-7xl mx-auto px-4 2xl:px-0 min-h-[30vh]'>

        <HeadingOne title={catalogs.title} />
        <a
            class='flex p-4 rounded-lg text:md md:text-lg justify-center items-center max-w-md mx-auto border text-custom-color1 shadow shadow-custom-color1 shadow-sm hover:translate-y-1 transition-all duration-500'
            href={catalogs.catalogFa}
            download
            target='_Blank'
        >
            {catalogs?.catalogFaTitle}
        </a>
        <a
            class='flex p-4 rounded-lg text:md md:text-lg justify-center items-center max-w-md mx-auto border text-custom-color1 shadow shadow-custom-color1 shadow-sm hover:translate-y-1 transition-all duration-500 mt-10'
            href={catalogs.catalogEn}
            download
            target='_Blank'
        >
            {catalogs?.catalogEnTitle}
        </a>

    </section >
}

export default Catalogs
