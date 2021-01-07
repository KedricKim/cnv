import React from 'react';
import '../style/style.css';

interface Props{
    clickHere : (page:String)=>void;
}

const MainComponent :React.SFC<Props> = ({
    clickHere
}) => {
    return(
        <React.Fragment>
            {/* <head>
                <meta charSet="utf-8">
                <title>Current & Velocity</title>
            </head> */}

            {/* <link rel="stylesheet" type="text/css" href="style/style.css"/> */}
            {/* <script src="//code.jquery.com/jquery-1.12.4.min.js"></script> */}
            {/* <?php include "./topmenu/topmenu.php" ?> */}
            
            {/* 전체 */}
            <div className="wrap" id="wrap" style={{display: 'flex', justifyContent: 'center'}}>

                {/* 상단 메뉴탭 */}
                <div className="wrap_top" id="wrap_top">
                    <table id="wrap_top_table" 
                    // align="center"
                    style={{display: 'flex', justifyContent: 'center'}}
                    >
                        <tbody>
                            <tr>
                                {/* 로고 */}
                                <td>
                                    <img src='img/cnv_main_logo.jpg'
                                // onclick="location.href='index.php'" 
                                style={{width:'200px'}}/></td>
                                {/* 메뉴버튼 */}
                                <td valign="bottom" align="right">
                                    <div className="wt_right">
                                        <small style={{padding:'20px'}}>
                                            경기도 성남시 분당구 구미동 165번지 포스빌 523호<br/>
                                            Tel : (031) 782 - 9165/6     Fax : (031) 782 - 9167<br/>

                                        </small>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><input type="button" className="wtButton" value="회사소개" onClick={()=>clickHere('menu/intro.php')}/></td>
                                                    <td><input type="button" className="wtButton" value="제품소개" onClick={()=>clickHere('menu/product')}/></td>
                                                    <td><input type="button" className="wtButton" value="카탈로그" onClick={()=>clickHere('menu/catalog')}/></td>
                                                    <td><input type="button" className="wtButton" value="온라인견적" onClick={()=>clickHere('menu/help')}/></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* 중단 내용 */}
                <div className="wrap_middle" id="wrap_middle">
                    <img src="img/main-img.png"/>

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
                        <td><img src="img/product/vp1500.png"/></td>
                        <td><img src="img/product/2.png"/></td>
                        <td><img src="img/product/vp1500.png"/></td>
                        <td><img src="img/product/2.png"/></td>
                        </tr>
                        <tr>
                        <td><img src="img/product/2.png"/></td>
                        <td><img src="img/product/vp1500.png"/></td>
                        <td><img src="img/product/2.png"/></td>
                        <td><img src="img/product/vp1500.png"/></td>
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
                            <td><img src="img/product/vp1500.png"/></td>
                            <td><img src="img/product/2.png"/></td>
                            <td><img src="img/product/vp1500.png"/></td>
                            <td><img src="img/product/2.png"/></td>
                        </tr>
                        <tr>
                            <td><img src="img/product/2.png"/></td>
                            <td><img src="img/product/vp1500.png"/></td>
                            <td><img src="img/product/2.png"/></td>
                            <td><img src="img/product/vp1500.png"/></td>
                        </tr>

                        </tbody>
                    </table>

                </div>



                {/* 하단 내용 */}
                <div className="wrap_bottom" id="wrap_bottom">

                    {/* <font size="2"> */}
                        Copyright (c) 2006 C & V Corporation All Rights Reserved
                    {/* </font> */}

                </div>
            </div>
        </React.Fragment>
    )

}
export default MainComponent;
