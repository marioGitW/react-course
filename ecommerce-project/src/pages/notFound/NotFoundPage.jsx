import {Header} from '../../components/Header'
import './NotFoundPage.css'
export function NotFoundPage({cart}){
    return(
        <>
            <Header cart={cart}/>
            <div className="notFoundDiv"> Page not found</div>
        </>
    );
}