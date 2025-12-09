import Button from "../../components/Button/Button"
import SearchBar from "../../components/SearchBar/SearchBar"
import SectionTittle from "../../components/SectionTittle/SectionTittle"
import './Header.css'
const Header = () => {  
    return (
        <header className="header">
            <Button/>
            <SectionTittle title="HOME"/>
            <SearchBar/>
        </header>
    )
}

export default Header 