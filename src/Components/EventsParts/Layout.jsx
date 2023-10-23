import {
    Breadcrumb,
    HeadingOne,
    Pagination,
} from 'Shared'
import { List } from 'EventsParts'

const Layout = ({
    breadcrumb,
    events,
    eventsStatics,
    translations,
}) => {

    const { data, metadata } = events || {}

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section class='mb-5 max-w-7xl mx-auto px-4 2xl:px-0 min-h-[50vh]'>
            <div class="text-center my-14">
                <HeadingOne title={eventsStatics?.title} />
            </div>
            <List
                items={data}
                translations={translations}
            />
            <Pagination metadata={metadata} />
        </section>
    </>
}

export default Layout
