import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
 /*
     useEffect(() => {
      mount(ref.current);
    });
 */

    const history= useHistory();

    useEffect(() => {
      const {onParentNavigate} = mount(ref.current, {
      onNavigate : (location) => {
        const nextPathname = location.pathname;
        const {pathname} = history.location;
        console.log(' Container noticed navigation in marketing !!!!!!', nextPathname );
        if(pathname!== nextPathname) { // check so that loop is not formed one history updated to update other and then other updated so update first
          history.push(nextPathname);
        }
      },
    });
  
    history.listen(onParentNavigate);

  }, []);

    return (<div ref={ref} />);
};
