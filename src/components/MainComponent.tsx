import React from 'react';

interface Props{
    clickHere : (page:String)=>void;
}

const MainComponent :React.SFC<Props> = ({
    clickHere
}) => {
    return(
        <React.Fragment>
            This is MainComponent
            <button onClick={()=>clickHere('잉')}>button</button>
        </React.Fragment>
    )

}
export default MainComponent;
