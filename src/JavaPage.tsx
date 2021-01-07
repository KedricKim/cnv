import React from 'react';
interface Props{
    clickHere : (page:String)=>void;
}
const JavaPage :React.SFC<Props> = ({
    clickHere
}) => {
    return(
        <React.Fragment>
                This is Java Page
                <button onClick={()=>clickHere('잉')}>button</button>
        </React.Fragment>
    )

}
export default JavaPage;
