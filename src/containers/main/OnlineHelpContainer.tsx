import React from 'react';
import OnlineHelpComponent from '../../components/main/OnlineHelpComponent';
import emailjs from 'emailjs-com';
import $ from "jquery"; 

interface Props{
  submitCheck : (e:any)=>void;
}
class OnlineHelpContainer extends React.Component<Props>{
  constructor(props:Props){
    super(props)
    this.state={

    }
  }

  submitCheck = (e:any) =>{
    e.preventDefault();
    let target = e.target

    let name = String( $(target).find('input[name=from_name]').val() )
    let email = String( $(target).find('input[name=email]').val() )
    let company = String( $(target).find('input[name=company]').val() )
    let tel = String( $(target).find('input[name=tel]').val() )
    let message = String( $(target).find('input[name=message]').val() )

    let response_tel = $(target).find('input:checkbox[name=response_tel]').is(":checked")
    let response_fax = $(target).find('input:checkbox[name=response_fax]').is(":checked")
    let response_mail = $(target).find('input:checkbox[name=response_mail]').is(":checked")

    if(name.length === 0){
      alert("담당자를 입력해 주십시오");
      return;
    }else if(email.length === 0){
      alert("이메일을 입력해 주십시오");
      return;
    }else if(company.length === 0){
      alert("회사명을 입력해 주십시오");
      return;
    }else if(tel.length === 0){
      alert("전화 번호를 입력해 주십시오");
      return;
    }else if(message.length === 0){
      alert("문의 내용을 입력해 주십시오");
      return;
    }else if(!response_tel && !response_fax && !response_mail){
      alert("회신 방법을 최소한 1개 선택해 주십시오");
      return;
    }else{
      emailjs.sendForm('service_ez8rpzd', 'template_99n8pva', e.target, 'user_UICKbNX8XXxkb4whK1TtR')
      .then((result) => {
        if(result.text === 'OK'){
          alert('견적문의가 완료되었습니다. 빠른시일 내에 연락드리도록 하겠습니다.')
          document.location.href = '/';
        }else{
          alert('견적문의 중 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.')
        }
      }, (error) => {
        alert('견적문의 중 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.')
        console.log(error.text);
      });
    }
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
