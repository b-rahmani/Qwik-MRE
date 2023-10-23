import {
    component$,
    useContext,
} from '@builder.io/qwik'
import {
    PostContext,
    useCategoryUrl,
} from 'Blog'
import { LocalizedDate } from 'Base'
import {
    Calendar,
    Category,
    Chat,
    Eye,
} from 'Svg'

const Icons = component$(({
    commentView,
    post,
}) => {

    const viewCount = useContext(PostContext)
    
    return <>
        <div class="flex flex-wrap gap-6 text-xs sm:text-sm mb-3 md:px-20">
            <a
                href={useCategoryUrl(post?.relatedItems?.hierarchies?.[0]?.slug)}
                class="flex items-center gap-1.5">
                <Category
                    class='w-5 aspect-square'
                />
                {post?.relatedItems?.hierarchies?.[0]?.title}
            </a>
            <span class="flex items-center gap-1.5">
                <Eye
                    class='w-7 aspect-square'
                />
                {viewCount}
            </span>
            <span class="flex items-center gap-1.5">
                <Chat
                    class='w-[18px] aspect-square'
                />
                {commentView}
            </span>
            <span class="flex items-center gap-1.5">
                <Calendar
                    class='w-5 aspect-square'
                />
                <LocalizedDate
                    utcDate={post?.utcDate}
                    locale='fa'
                />
            </span>
        </div>
    </>
})

export default Icons
