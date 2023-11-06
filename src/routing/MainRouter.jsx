import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import MainLayout from './components/MainLayout'
import Homepage from '../pages/homepage';
import FetchAmazingUsers from '../components/FetchExercise/FetchAmazingUsers';
import NotFoundPage from '../components/NotFoundPage';
import SingleArticle from '../components/FetchExercise/FetchAmazingUsers/SingleArticle';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            {/* <Route index element={<Homepage/>}/> */}
            {/* <Route path="article" >
                <Route index element={<FetchAmazingUsers /> }/>
            <Route path=":auto" element={<SingleArticle />} />
            </Route>
            <Route path={"users"} >
                <Route index element={<div>users</div>} />
                <Route path={":userId"} element={<div>user single</div>}/>
            </Route> */}
                
           

            {/* <Route path="*" element={<NotFoundPage/>}/> */}
        </Route>
    )
)