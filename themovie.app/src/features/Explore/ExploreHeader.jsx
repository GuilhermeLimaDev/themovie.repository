import SectionTittle from "../../components/SectionTittle/SectionTittle"
import ExploreFilters from "./ExploreFilters"

const ExploreHeader = ({ filters, onFilterChange }) => {
    return (
        <header>
            <SectionTittle
                title={'Explore'}
                subTittle={'The Movies'}
            />
            <ExploreFilters
                filters={filters}
                onFilterChange={onFilterChange}
            />
        </header>
    )
}

export default ExploreHeader