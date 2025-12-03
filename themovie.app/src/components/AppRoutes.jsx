import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<>Ola, mundo</>} />
                <Route path='/movie/:id' element={<>Ola, mundo</>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;