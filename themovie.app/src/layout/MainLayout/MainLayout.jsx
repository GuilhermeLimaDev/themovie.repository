import Header from "../Header/Header"
import './MainLayout.css'
const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}
export default MainLayout