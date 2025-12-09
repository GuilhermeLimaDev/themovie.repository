import Button from "../../components/Button/Button"

const ExploreFilters = ({ filters, onFilterChange }) => {
    return (
        <div>
            {filters.map((filter) => (
                <Button key={filter.id} onClick={() => onFilterChange(filter.id)}>
                    {filter.name}
                </Button>
            ))
            }
        </div>
    )
}

export default ExploreFilters