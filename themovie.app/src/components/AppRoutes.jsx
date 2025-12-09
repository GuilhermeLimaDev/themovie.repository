import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/movie/:id' element={<>Ola, mundo</>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;