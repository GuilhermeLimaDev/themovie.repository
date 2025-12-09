const ExploreContent = ({ selectedFilter }) => {
    console.log(selectedFilter)
    return (
        <>
            {selectedFilter && <p>{selectedFilter}</p>}
        </>
    )
}

export default ExploreContent