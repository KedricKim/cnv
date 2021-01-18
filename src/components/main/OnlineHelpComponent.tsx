import React from 'react';
interface Props{
    submitCheck : (e:any)=>void;
}

const OnlineHelpComponent = ({
    submitCheck
}:Props) => {
    return(
        <React.Fragment>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
            <div className="wrap_middle" id="wrap_middle">
                <table>
                    <tbody>
                        <tr><td>
                                <div id="mf_wrapper">
                                    <div id="mf_header">
                                        <h1>온라인견적</h1>
                                        <h2>문의나 상담하실 내용이 있으시면 게시판이나 온라인 제품 견적을 활용하여 주십시요.<br/>
                                            최대한 빨리 처리하도록 하겠습니다.<br/>
                                            상담을 원하시는 분은 담당자, 상호, 연락처를 필히 남겨 주시기 바랍니다.</h2>
                                    </div>
                                    <form id="form" className="contact-form" onSubmit={submitCheck}>
                                        <table cellSpacing="0" cellPadding="0" className="mailform">
                                            <tbody>
                                            <tr>
                                                <th>담당자<span>*</span><p>your name</p></th>
                                                <td><input type="text" name="from_name" size={30} autoComplete="off" /></td>
                                            </tr>
                                            <tr>
                                                <th>이메일 주소<span>*</span><p>e-mail address</p></th>
                                                <td><input type="text" name="email" size={40} maxLength={50} className="mf" autoComplete="off" /></td>
                                            </tr>
                                            <tr>
                                                <th>회사<span>*</span><p>your company</p></th>
                                                <td><input type="text" name="company" size={40} autoComplete="off" /></td>
                                            </tr>

                                            <tr>
                                                <th>전화 번호<span>*</span><p>tel</p></th>
                                                <td><input type="text" name="tel" size={15} autoComplete="off" /></td>
                                            </tr>
                                            <tr>
                                                <th>팩스 번호<p>fax</p></th>
                                                <td><input type="text" name="fax" size={15} autoComplete="off" /></td>
                                            </tr>
                                            <tr>
                                                <th>문의 제품<p>product</p></th>
                                                <td><input type="text" name="product" size={10} autoComplete="off" /></td>
                                            </tr>
                                            <tr>
                                                <th>회신 방법<span>*</span><p>response</p></th>
                                                <td>
                                                    <input type="checkbox" name="response_tel" /> 전화
                                                    <input type="checkbox" name="response_fax" /> 팩스
                                                    <input type="checkbox" name="response_mail" defaultChecked/> 이메일 - 원하시는 회신방법을 선택해주세요.
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>내용<span>*</span><p>inquiry body</p></th>
                                                <td><textarea name="message" rows={10} cols={70} autoComplete="off" ></textarea></td>
                                            </tr>
                                            <tr>
                                                <th>문의하기</th>
                                                <td>
                                                    <input type="submit" value="견적문의"/>
                                                    <input type="reset" name="reset" value="다시쓰기" />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                    {/* <link rel="stylesheet" href="mailform/mailform.css" type="text/css"/>
                                    <script type="text/javascript" src="mailform/mailform.js" charSet="utf-8"></script> */}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )

}
export default OnlineHelpComponent;
