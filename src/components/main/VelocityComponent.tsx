import React from 'react';
interface Props{
    // clickHere : (page:string)=>void;
}

const VelocityComponent = ({
    // clickHere
}:Props) => {
    return(
        <React.Fragment>
            <div className="wrap_middle" id="wrap_middle">
                <table cellSpacing={20}>
                    <tbody>
                    <tr>
                        <td align="center" colSpan={4}>
                            <img src={"../img/bar/icon_arrow_blue.gif"} alt=""/>
                            &nbsp;
                            <a href="../productdetail/current.php">유속계</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="/productdetail/currentinfo.php?idx=27">
                                <img src={"/img/product/VO1000.JPG"} width="140" height="123" alt=""/>
                            </a>
                        </td>
                        <td>
                            <a href="/productdetail/currentinfo.php?idx=15">
                                <img src={"/img/product/LP1100.JPG"} width="140" height="123" alt=""/>
                            </a>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <table cellSpacing={20}>
                    <tbody>
                    <tr>
                        <td align="center" colSpan={4}>
                            <img src={"../img/bar/icon_arrow_blue.gif"} alt=""/>
                            &nbsp;
                            <a href="../productdetail/current.php">파고계</a>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={"../img/product/2.png"} width="140" height="123" alt=""/></td>
                        <td><img src={"../img/product/2.png"} width="140" height="123" alt=""/></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

}
export default VelocityComponent;
