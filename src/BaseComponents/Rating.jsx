import {
    $,
    component$,
    useSignal,
} from '@builder.io/qwik'
import Star from './Svg/Star'

const Rating = component$(({
    activeColor,
    click,
    containerClass,
    count,
    inactiveColor,
    starClass,
    value,
}) => {

    const rate = useSignal(value ?? 0)

    const clickHandler = $((rate) => {
        click(rate)
    })

    const hoverHandler = $((newRate) => {
        rate.value = newRate
    })

    const startCount = +count || 5
    const starActiveColor = activeColor || 'fill-yellow-500 stroke-yellow-500'
    const starInactiveColor = inactiveColor || 'fill-white stroke-black/50'
    const DefaultClassName = starClass === undefined ? 'w-6' : starClass?.indexOf('w-') > -1 ? starClass : 'w-6' + starClass

    return <div class={containerClass}>
        <div
            dir='ltr'
            class={`w-fit flex items-center justify-center text-lg`}>
            {[...Array(startCount)].map((item, index) => {
                const givenRating = index + 1
                return (
                    <label>
                        <input
                            type="radio"
                            class='hidden'
                            value={value}
                            onInput$={() => clickHandler(givenRating)}
                        />
                        <div
                            class={`cursor-pointer`}
                            onMouseOver$={() => hoverHandler(givenRating)}
                        >
                            {/* custom icon not work yet */}
                            <Star
                                class={`${index < rate.value && starActiveColor} ${givenRating < rate.value || givenRating === rate.value
                                    ? starActiveColor
                                    : starInactiveColor} ${DefaultClassName}`}
                            />
                        </div>
                    </label>
                )
            })}
        </div>
    </div>
})

export default Rating
