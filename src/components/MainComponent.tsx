import React from 'react';
interface Props{
}

const MainComponent = ({
}:Props) => {
    return(
        <React.Fragment>
            {/* 중단 내용 */}
            <div className="wrap_middle" id="wrap_middle">
                <img alt="" src={"img/main-img.png"}/>

                <table cellSpacing="20" 
                // name="product_table"
                >
                <tbody>
                    <tr>
                    <td align="center" colSpan={4}>
                        Products
                    </td>
                    </tr>
                    <tr>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                    </tr>
                    <tr>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                    </tr>

                </tbody>
                </table>
                <table cellSpacing="20" 
                // name="product_table"
                >
                    <tbody>
                    <tr>
                        <td align="center" colSpan={4}>
                            Products
                        </td>
                    </tr>
                    <tr>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                    </tr>
                    <tr>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                        <td><img alt="" src={"img/product/2.png"}/></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

}
export default MainComponent;
