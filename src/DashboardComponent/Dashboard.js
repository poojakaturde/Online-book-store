import './Dashboard.css';
import React from 'react';
import AuthContext from '../../AuthContext';
import Cards from './Cards';
import { useContext } from 'react'
import BookData from '../../BookData';

function Dashboard() {
    const ctx = useContext(AuthContext);
    return (
        <React.Fragment className="dash">
            <div className="home">
                <h2>Welcome Pooja !!!

                    <button className="dbutton" onClick={ctx.onLogout}>Logout</button></h2> 
                </div>

                {BookData.map(function fetchCard(val){
                    return(
                        <Cards 
                        imgsrc={val.imgsrc}
                        category={val.category_title}
                        ></Cards>
                    );
                })}
        

        </React.Fragment>



    );

}

export default Dashboard;