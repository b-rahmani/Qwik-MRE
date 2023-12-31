const ChevronRight = ({ class: style }) => {

    return <>
        <svg
            class={style || ""}
            viewBox="0 0 24 24"
        >
            <g
                transform="translate(7.5 4)"
            >
                <path
                    d="M.246,15.759a.811.811,0,0,1-.081-1.072l.081-.092L6.973,8,.246,1.405A.811.811,0,0,1,.165.333L.246.241A.852.852,0,0,1,1.339.161l.094.08L8.754,7.418A.811.811,0,0,1,8.835,8.49l-.081.092L1.433,15.759A.852.852,0,0,1,.246,15.759Z"
                />
            </g>
        </svg>
    </>

}

export default ChevronRight
