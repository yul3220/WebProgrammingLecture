/**
 * 
 */

function check() {
	//-------------이름체크-------------
	// 입력한 값 가져오기 - 이름
	namevalue = document.getElementById('name').value;

	//공백체크
	if (namevalue.trim().length < 1) {
		alert("이름 입력하세요.");
		return false;
	}

	//정규식
	namereg = /[가-힣]+/; //정규식안에 공백이 존재하면 안됨    
	// 비교 test() - true/false리턴
	if (!(namereg.test(namevalue))) {
		alert("이름형식오류");
		return false;
	}

	//길이체크 2-7
	if (namevalue.trim().length < 2 || namevalue.trim().length > 7) {
		alert("이름 2~7사이");
		return false;
	}
	//길이체크를 정규식보다 아래에 사용해야 길이가 체크된다.

	//----------- 아이디 체크----------------
	//값 가져오기 
	idvalue = document.getElementById("id").value;

	//공백
	if (idvalue.trim().length < 1) {
		alert("아이디 입력");
		return false;
	}

	//길이체크
	if (idvalue.trim().length < 4 || idvalue.trim().length > 12) {
		alert("아이디 4-12");
		return false;
	}

	//정규식 - 소문자로 시작
	idreg = /^[a-z][a-zA-Z0-9]{3,11}$/;
	if (!(idreg.test(idvalue))) {
		alert("아이디형식오류");
		return false;
	}
	//길이가 지정해 있기때문에 길이체크보다 위에 있으면 길이가 벗어나도 아이디 형식오류라고 뜸

	//------ 이메일 체크------------

	emailvalue = document.getElementById('email').value;

	//공백 
	if (emailvalue.trim().length < 1) {
		alert("이메일 입력");
		return false;
	}

	//정규식
	emailreg = /[a-zA-Z0-9]+@[a-zA-Z0-9-_]+(\.[a-z]+){1,2}/;
	//.그냥 점 찍으면 문자가 되면 => \.으로 작성
	a = emailreg.test(emailvalue);
	if (!a) { //!a => false이면
		alert("이메일 형식오류");
		return false;
	}

	//------전화번호 체크-------
	telvalue = document.getElementById('phone').value;

	//공백 
	if (telvalue.trim().length < 1) {
		alert("전화번호 입력");
		return false;
	}

	//정규식
	telreg = /\d{3}-\d{4}-\d{4}/;
	if (!(telreg.test(telvalue))) {
		alert("전화번호 형식오류");
		return false;
	}
	/*a=telreg.test(telvalue);
	if(a==false){//!a => false이면
		alert("전화번호 형식오류");
		return false;
	}*/

	//------비밀번호 체크-------
	passvalue = document.getElementById('pass').value;

	//공백 
	if (passvalue.trim().length < 1) {
		alert("비밀번호 입력");
		return false;
	}

	//길이 8-15
	if (passvalue.trim().length < 8 || passvalue.trim().length > 15) {
		alert("비밀번호 8-15");
		return false;
	}

	//정규식 - 영문대소문자,숫자,특수문자 반드시 1개이상씩 입력
	//http://www.naver.com
	//https://www.naver.com
	//전방탐색 => 찾을문자 ?= 기준점 ex).+?=:(:을 기준으로 한번이상 나오는 문자) or \w+?=:(기준으로한번이상나오는 문자나 숫자)
	// ?=.*[a-z](a-z을 기준으로 문자가 앞에 0번이상 옴)
	// ?=.*[A-Z](A-Z을 기준으로 대문자가 앞에 0번이상 옴)
	// ?=.*[0-9]
	//=> 범위를 지정할 수 있는 이유는 아스키코드의 번호가 이어져있기때문에 가능
	//특수문자는 코드가 이어져있지 않다.
	// ?=.*[~!@#$%^&*\-()_+?\\] =>-가 가운데 들어가면 특수문자(\) -로들어가야한다.뒤에 들어가는 경우는 상관없음
	// 앞의 찾는 대상이 없으면 
	//^$를 넣는 경우는 반드시 이것으로 끝나거나 시작해야 하는 경우에 작성
	passreg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*\-()_+?\\]).{8,15}$/;
	// 정규식으로 검색하여 일치하는 결과를 배열로 리턴한다. 발견되지 않으면 null을 리턴한다.
	//.이 없으면 이중에 한개를빼고 작성해도 오류가 나지 않음
	a = passvalue.match(passreg);
	if (a == null) {
		alert("비밀번호 형식오류");
		return false;
	}

	//-----------생일-------------
	birvalue = document.getElementById('birthday').value;

	//공백
	if (birvalue.trim().length < 1) {
		alert("생일 입력");
		return false;
	}

		birth = new Date(birvalue);

		today = new Date();

		//시간의 간격 - getTime() - millisec리턴
		times = today.getTime() - birth.getTime();

		times = parseInt(times / 1000 / 60 / 60 / 24 / 365);

		if (times < 14) {
			alert("14세 이상 가능합니다.");
			return false;
		}

		return true;
	}
