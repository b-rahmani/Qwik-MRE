const Info = ({ items }) => {
    
    return <>
        <div class="relative z-20 max-w-7xl mx-auto px-5">
            <div class="max-w-7xl mx-auto px-5">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 mb-6 md:mb-16">
                    {
                        items?.map(item => <>
                            <div
                                class="flex flex-col gap-3"
                                key={item?.id}
                            >
                                <strong class="block mb-2 text-lg">
                                    {item?.title}
                                </strong>
                                <div>{item?.address}</div>
                                <div>{item?.tel}</div>
                                <div>{item?.zipCode}</div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    </>
}

export default Info
