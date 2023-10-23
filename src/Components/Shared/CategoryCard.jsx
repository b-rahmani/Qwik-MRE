import { Image } from 'Base'
import { useCategoryUrl } from 'Blog'

const CategoryCard = ({
    active,
    category,
    localePathPrefix,
}) => {

    return <a
        key={category.id}
        href={useCategoryUrl(category.slug, localePathPrefix)}
        aria-label={category.title}
        class={["flex flex-col gap-8 items-center justify-center px-2 sm:px-4 py-10 rounded-2xl text-custom-color3 group transition-all duration-300",
            active && active.slug === category.slug ? 'bg-custom-color1/20' : '']}>
        <Image
            containerClass="w-20 aspect-square group-hover:scale-[150%] transition-all"
            src={category?.relatedItems?.imageUrl}
            alt={category?.title}
        />
        <p class="font-bold text-sm sm:text-base group-hover:text-custom-color1 duration-300">
            {category?.title}
        </p>
    </a>
}

export default CategoryCard
