
type PropsType = {
    text: string,
    theme: 'primary' | 'secondary'
}
const PolyButton = ({text, theme} : PropsType) => {
    return (
        <div className="relative w-fit h-fit">
            <button className={`text-gray-900 poly-button ${theme} bg-green-400 px-12 py-2`}>{text}</button>
            {theme === 'secondary' && <span className="absolute top-0 left-0 right-0 bottom-0 text-green-400 px-12 py-2">{text}</span>}
        </div>
    )
}

export default PolyButton;