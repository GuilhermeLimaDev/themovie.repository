const SectionTittle = ({ title, subTittle }) => {
    return (
        <>
            <h1>{title}</h1>
            {subTittle && <p>{subTittle}</p>}
        </>
    )
}

export default SectionTittle