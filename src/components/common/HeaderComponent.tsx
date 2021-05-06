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
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>pageMove('/')}>메인</button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-success btn-sm" onClick={()=>pageMove('/menu/intro')}>회사소개</button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-info btn-sm" onClick={()=>pageMove('/menu/product')}>제품소개</button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-warning btn-sm" onClick={()=>pageMove('/menu/catalog')}>카탈로그</button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>pageMove('/menu/onlineHelp')}>온라인견적</button>
                                                </td>
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
