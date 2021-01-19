import React from 'react';
interface Props{
    // clickHere : (page:string)=>void;
}

const IntroComponent = ({
    // clickHere
}:Props) => {
    return(
        <React.Fragment>
            <div className="wrap_middle" id="wrap_middle">
                <table className="introTable">
                    <tbody>
                    <tr>
                        <th colSpan={2} >회사소개</th>
                    </tr>
                    <tr>
                        <td>회사명</td>
                        <td>씨앤브이 (Cureent & Velocity)</td>
                    </tr>
                    <tr>
                        <td>대표명</td>
                        <td>김태환</td>
                    </tr>
                    <tr>
                        <td>설립일</td>
                        <td>2006년 4월 25일</td>
                    </tr>
                    <tr>
                        <td>회사 주소</td>
                        <td>경기도 성남시 분당구 구미동 165 분당 포스빌 523호</td>
                    </tr>
                    <tr>
                        <td>주력 사업</td>
                        <td>각종 해양/환경 관련 분석 및 측정기기 판매</td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td>전화 : 031 - 782 - 9165/6<br/>
                            팩스 : 031 - 782 - 9167<br/>
                            Homepage : www.candv.co.kr    <br/>  E-Mail : <a href="mailto:thkim@candv.co.kr">thkim@candv.co.kr</a></td>
                    </tr>
                    <tr>
                        <td>찾아 오시는 길</td>
                        <td rowSpan={10} align="center">
                            <img alt="" src={"../img/map.png" }/>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )

}
export default IntroComponent;
