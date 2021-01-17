import React from 'react';
import OnlineHelpComponent from '../../components/main/OnlineHelpComponent';
import $ from "jquery"; 

interface Props{
  submitCheck : (page:string)=>void;
}
class OnlineHelpContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }

  submitCheck = (page:String) =>{
    
    // if (frm.name.value.length == 0) {
    //   alert('담당자를 넣어주십시오');

    //   frm.name.focus();
    //   return;
    // }
    // if (frm.email.value.length == 0) {
    //     alert("이메일을 입력해 주십시오");
    //     frm.email.focus();
    //     return false;
    // }

    // var blnReturn = false;

    // emailEx1 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z]+/;
    // emailEx2 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z]+/;
    // emailEx3 = /[^@]+@[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z]+/;

    // if (emailEx1.test(frm.email.value)) blnReturn = true;
    // if (emailEx2.test(frm.email.value)) blnReturn = true;
    // if (emailEx3.test(frm.email.value)) blnReturn = true;
    // if (!blnReturn) {
    //     alert("이메일을 정확히 입력해 주십시오");
    //     return;
    // }
    // if (frm.company.value.length == 0) {
    //     alert("회사명을 정확히 입력해 주십시오");
    //     return;
    // }

    // if (frm.tel.value.length == 0) {
    //     alert('전화번호를 넣어주십시오');
    //     frm.tel.focus();
    //     return;
    // }
    // if (frm.inquiry.value.length == 0) {
    //     alert('글내용을 넣어주십시오');
    //     frm.inquiry.focus();
    //     return;
    // }
    // frm.submit();
  }

  render(){ 
    return (
      <React.Fragment>
          <OnlineHelpComponent 
            submitCheck={this.submitCheck}
          />
      </React.Fragment>
    );
  }
}

export default OnlineHelpContainer;
