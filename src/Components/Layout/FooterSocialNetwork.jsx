const FooterSocialNetwork = ({ socialNetwork }) => {

    return <div class="flex flex-wrap justify-center items-center gap-10 mt-10 relative z-20">
        {
            socialNetwork?.items.map((item, index) => <>
                <a
                    href={item?.link}
                    aria-label={item?.title}
                    target="_blank"
                    key={item?.id}
                >
                    <div
                        dangerouslySetInnerHTML={item?.svg}
                        style={{ animationDelay: (index + 1) * 150 + 'ms !important' }}
                        class={`animate-up-down w-8 aspect-square fill-white hover:pause transition-all`}
                    />
                </a>
            </>)
        }
    </div>
}

export default FooterSocialNetwork
