import "./SectionTittle.css"

const SectionTittle = ({ title, subTittle }) => {
    return (
        <>
            <h1 className="tittle-text">{title}</h1>
            {subTittle && <p className="subtittle-text">{subTittle}</p>}
        </>
    )
}

export default SectionTittle