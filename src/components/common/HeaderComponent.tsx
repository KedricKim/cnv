import React from 'react';
interface Props{
    pageMove : (page:string)=>void;
}

const HeaderComponent = ({
    pageMove
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
                            <td onClick={()=>pageMove('/')}>
                                <img alt="" src={'/img/cnv_logo.png'}
                            // onclick="location.href='index.php'" 
                            style={{width:'200px'}}/></td>
                            {/* 메뉴버튼 */}
                            <td valign="bottom" align="right">
                                <div className="wt_right">
                                    <small>
                                        경기도 성남시 분당구 구미동 165번지 포스빌 523호<br/>
                                        Tel : (031) 782 - 9165/6     Fax : (031) 782 - 9167<br/>

                                    </small>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><input type="button" className="wtButton" value="메인" onClick={()=>pageMove('/')}/></td>
                                                <td><input type="button" className="wtButton" value="회사소개" onClick={()=>pageMove('/menu/intro')}/></td>
                                                <td><input type="button" className="wtButton" value="제품소개" onClick={()=>pageMove('/menu/product')}/></td>
                                                <td><input type="button" className="wtButton" value="카탈로그" onClick={()=>pageMove('/menu/catalog')}/></td>
                                                <td><input type="button" className="wtButton" value="온라인견적" onClick={()=>pageMove('/menu/onlineHelp')}/></td>
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
