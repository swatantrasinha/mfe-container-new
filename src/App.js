import React from 'react';
import MarketingApp  from './components/MarketingApp';
import {mount} from 'marketing/MarketingApp';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

console.log('mount in container app : ', mount);

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (<div>
                {/* <h1> This is container App!!!</h1> */}
                
                <BrowserRouter>
                    <StylesProvider generateClassName={generateClassName}>
                        <div>
                            <Header />
                            <MarketingApp />
                        </div>
                    </StylesProvider>
                </BrowserRouter>
            </div>
            );
};

