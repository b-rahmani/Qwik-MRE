import {
    AddComment,
    CommentsList,
    RichText,
} from 'Shared'

const Main = ({
    comments,
    commentsTexts,
    content,
    fields,
    form,
    post,
    translations,
}) => {

    return <>
        <div class="lg:basis-[calc(100%-30vw)] xl:basis-[calc(100%-20vw)] mt-6 mb-0 md:mt-10 lg:mb-24">
            <h1 class="font-bold text-custom-color2 text-lg md:text-xl lg:text-2xl mb-8">
                {post?.title}
            </h1>

            <div class="w-full bg-custom-color31 rounded-lg px-4 py-6 md:px-10 md:py-12">
                <RichText content={content} />
            </div>

            <CommentsList
                comments={comments?.data}
                title={commentsTexts?.usersComments}
            />

            <AddComment
                {...fields}
                {...form}
                {...translations}
                entityGuid={post.guid}
                entityType={post?.relatedItems?.entityType || 'BlogPost'}
            />
        </div>
    </>
}

export default Main
