import { useState } from "react";
import ExploreHeader from "./ExploreHeader"
import ExploreContent from "./ExploreContent"

const Explore = () => {

    const [selectedFilter, setSelectedFilter] = useState(1);

    const filters = [
        { id: 1, name: "Action" },
        { id: 2, name: "Drama" },
        { id: 3, name: "Comedy" }
    ];

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div>
            <ExploreHeader 
                filters={filters} 
                onFilterChange={handleFilterChange}
            />
            <ExploreContent selectedFilter={selectedFilter} />
        </div>
    )
}

export default Explore;
