import React from 'react';
interface Props{
    pageMove : (page:string)=>void;
}

const CurrentComponent = ({
    pageMove
}:Props) => {
    return(
        <React.Fragment>
            <div className="wrap_middle" id="wrap_middle">
                <table cellSpacing={0} cellPadding={0} width="100%" className="product_intro">
                    <tbody>
                    {/* 시작  */}
                    <tr>
                        <td>
                            <table width="620" >
                                <tbody>
                                <tr>
                                    <td className="border">
                                        <p>
                                            &nbsp;C & V에서는 계측계 측량계등 다양한 분야의 제품들을 소개 및 공급하고 있습니다. 세계 유수의 첨단 기기 제품들을 가장 저렴한 가격과
                                                차별화된 서비스 및 기술지원으로 C & V의 독특한 고객만족 서비스를 제공받으실 수 있습니다.
                                        </p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table width="620">
                                <tbody>
                                <tr>
                                    <td height="25" className="border">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <p>
                                                        &nbsp;<img src="/img/catalog/icon_arrow_blue01.gif" width="10" height="10" />
                                                        &nbsp; OCEAN_RIVER (유속 측정 장치)
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            {/* 상품 내용 시작 */}

                            <table width="620">
                            <tbody>
                                <tr>
                                    <td height="5" colSpan={8}>
                                        <p></p>
                                    </td>
                                </tr>

                                {/* loop */}
                                <tr>
                                    <td>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <table >
                                                        <tbody>
                                                        <tr>
                                                            <td className="border">
                                                                <p>
                                                                    <a>
                                                                        <img src="/img/product/VO1000.JPG" />
                                                                    </a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>
                                                        <a>
                                                            <span>
                                                                VO1000
                                                            </span>
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <table >
                                                        <tbody>
                                                        <tr>
                                                            <td className="border">
                                                                <p>
                                                                    <a>
                                                                        <img src="/img/product/VO1000.JPG" />
                                                                    </a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>
                                                        <a>
                                                            <span>
                                                                VO1000
                                                            </span>
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <table >
                                                        <tbody>
                                                        <tr>
                                                            <td className="border">
                                                                <p>
                                                                    <a>
                                                                        <img src="/img/product/VO1000.JPG" />
                                                                    </a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>
                                                        <a>
                                                            <span>
                                                                VO1000
                                                            </span>
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {/* 상품 내용 끝 */}
                        </td>
                    </tr>
                    {/* 끝 */}
                    </tbody>
                </table>
                <p>
                    <input type="button" id="goProduct" className="btnBottom" value="제품소개 메인" onClick={()=>pageMove('/menu/product')}/>
                    <input type="button" id="goCurrent" className="btnBottom" value="유속계" onClick={()=>pageMove('/menu/current')}/>
                    <input type="button" id="goVelocity" className="btnBottom" value="파고계" onClick={()=>pageMove('/menu/velocity')}/>
                </p>
            </div>
        </React.Fragment>
    )

}
export default CurrentComponent;
