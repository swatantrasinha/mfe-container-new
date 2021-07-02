import React from 'react';
import MarketingApp  from './components/MarketingApp';
import {mount} from 'marketing/MarketingApp';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';

console.log('mount in container app : ', mount);


export default () => {
    return (<div>
                {/* <h1> This is container App!!!</h1> */}
                <BrowserRouter>
                    <div>
                        <Header />
                        <MarketingApp />
                    </div>
                </BrowserRouter>
            </div>
            );
};

