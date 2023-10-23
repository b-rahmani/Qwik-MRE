import {
    Categories,
    Related,
    Tags,
} from 'PostParts'

const Side = ({
    categories,
    post,
    postTitles,
    relatedPosts,
}) => {

    return <>
        <div class="lg:basis-[26vw] xl:basis-[16vw]">
            <div class="mb-6">
                <b class="block text-md pb-2 mb-4 text-custom-color2 border-b border-gray-200">
                    {postTitles?.category}
                </b>
                <div class="flex flex-col sm:flex-row flex-wrap lg:flex-col gap-4 text-center">
                    <Categories categories={categories} />
                </div>
            </div>
            {relatedPosts &&
                <div class="mb-4 shadow-md pt-3 pb-6 px-3 rounded-xl">
                    <b class="block text-md pb-2 mb-4 text-custom-color2 border-b border-gray-200">
                        {postTitles?.related}
                    </b>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <Related relatedPosts={relatedPosts} />
                    </div>
                </div>
            }
            {
                post?.relatedItems?.tags &&
                post?.relatedItems?.tags.length > 0 &&
                <div class="w-full flex flex-wrap gap-3 mt-7 mb-14">
                    <span class="inline-block text-custom-color3">
                        {postTitles?.tags}
                    </span>
                    <Tags tags={post?.relatedItems?.tags} />
                </div>
            }
        </div>
    </>
}

export default Side
