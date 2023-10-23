const ListHeading = ({
    blogTitles,
    seo,
}) => {
    
    return <>
        <section>
            <div class="max-w-7xl mx-auto px-5 flex gap-3 mt-8">
                <span class="w-3 bg-custom-color2 rounded-e-lg"></span>
                <h4 class="flex flex-wrap gap-1 font-bold text-lg md:text-xl lg:text-2xl py-2">
                    <span class="font-black text-custom-color2">{blogTitles?.listTitle}</span>
                    <span>{seo?.pageTitle}</span>
                </h4>
            </div>
        </section>
    </>
}

export default ListHeading
