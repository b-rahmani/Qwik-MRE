import { Image } from 'Base'
import { Breadcrumb } from 'Shared'
import {
    Icons,
    Main,
    Side,
} from 'PostParts'

const Layout = ({
    breadcrumb,
    categories,
    comments,
    commentsTexts,
    content,
    fields,
    form,
    post,
    postTitles,
    relatedPosts,
    translations,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>
            <div class="max-w-7xl mx-auto px-5 mt-6 md:mt-14">
                <Image
                    src={post?.relatedItems?.imageUrl}
                    alt={post?.title}
                    containerClass='w-full max-w-4xl mx-auto aspect-[2/1] mb-3 rounded-md rounded-se-[30px] rounded-es-[30px] sm:rounded-se-[50px] sm:rounded-es-[50px] md:rounded-se-[100px] md:rounded-es-[100px] overflow-hidden'
                    imageClass='object-fill w-full h-full object-center'
                />
                <Icons
                    post={post}
                    commentView={comments.metadata.dataCount}
                />
            </div>

            <div class="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-16">

                <Main
                    comments={comments}
                    commentsTexts={commentsTexts}
                    content={content}
                    fields={fields}
                    form={form}
                    post={post}
                    translations={translations}
                />

                <Side
                    categories={categories}
                    post={post}
                    postTitles={postTitles}
                    relatedPosts={relatedPosts}
                />

            </div>
        </section>

    </>
}

export default Layout
