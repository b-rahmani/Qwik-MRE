import {
    component$,
    Slot,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import {
    getGlobalization,
} from 'Globalization'
import { getLayout } from 'Contents'
import { getMenu } from 'Navigation'
import {
    Footer,
    Header,
} from 'Layout'

const getData = routeLoader$(async (props) => {
    const [
        layout,
        menuData,
        globalization,
    ] = await useAsync([
        getLayout('main', props),
        getMenu(props),
        getGlobalization(props),
    ])
    return {
        ...globalization,
        ...layout,
        ...menuData,
    }
})

const Layout = component$(() => {

    const data = getData().value

    const { isRtl } = data

    return <>
        <div
            dir={isRtl ? 'rtl' : 'ltr'}
            class="relative scroll-smooth overflow-x-hidden text-base"
        >
            <Header  {...data} />
            <Slot />
            <Footer {...data} />
        </div>
    </>
})

export default Layout
