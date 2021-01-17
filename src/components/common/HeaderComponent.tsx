import React from 'react';
interface Props{
    clickHere : (page:string)=>void;
}

const HeaderComponent = ({
    clickHere
}:Props) => {
    return(
        <React.Fragment>
            {/* 상단 메뉴탭 */}
            <div className="wrap_top" id="wrap_top">
                <table id="wrap_top_table" 
                // align="center"
                style={{display: 'flex', justifyContent: 'center'}}
                >
                    <tbody>
                        <tr>
                            {/* 로고 */}
                            <td onClick={()=>clickHere('/')}>
                                <img src='/img/cnv_logo.png'
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
                                                <td><input type="button" className="wtButton" value="회사소개" onClick={()=>clickHere('/menu/intro')}/></td>
                                                <td><input type="button" className="wtButton" value="제품소개" onClick={()=>clickHere('/menu/product')}/></td>
                                                <td><input type="button" className="wtButton" value="카탈로그" onClick={()=>clickHere('/menu/catalog')}/></td>
                                                <td><input type="button" className="wtButton" value="온라인견적" onClick={()=>clickHere('/menu/onlineHelp')}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

}
export default HeaderComponent;
