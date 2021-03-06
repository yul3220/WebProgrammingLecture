function idcheck(){
		idvalue = $("#id").val().trim();
		
		if(idvalue.length < 1){
			alert("id 입력하세요.");
			return false;
		}
		
		/*$.ajax({
			//project이름의 member는 context Root
			url : '/member/ID.do',
			type : "post",
			data : {"id": idvalue},
			success : function(res){
				$("#idspan").html(res.sw).css("color", "red");
			},
			error : function(xhr){
				alert("상태 : " +  xhr.status);
			},
			dataType : "json"
		})*/
		
		$.post(
				'/member/ID.do',
				{"id": idvalue},
				function(res){
					$("#idspan").html(res.sw).css("color", "red");
				},
				"json"
		)//02.15 ajax단축메뉴로 변경
	}//idbtn클릭
  	
  	// 우편번호 modal에서 동 입력후 확인버튼 클릭 이벤트
	function dongsearch(){
		//입력한값 가져오기
		dongvalue = $("#dong").val().trim();
		
		//서버로 전송(요청)
		$.ajax({
			url : "/member/DongSearch.do",
			data : {"dong" : dongvalue},
			type : "post",
			success : function(res){
				code = "<table border='1' class='table table-bordered'>";
				code += "<tr><td>우편번호</td>";
				code += "<td>주소</td>";
				code += "<td>번지</td></tr>";
				$.each(res, function(i, v){
					code += "<tr class='ziptr'><td>" + v.code + "</td>";
					code += "<td>" + v.addr + "</td>";
					code += "<td>" + v.bunji + "</td></tr>";
				})//each끝
				code += "</table>";
				
				$("#result1").html(code);
			},
			error : function(xhr){
				alert("상태 : " + xhr.status);
			},
			dataType : "json"
		})//ajax 끝
	}//button클릭
	
	// modal결과에서 원하는 행(주소)를 선택했을떄 이벤트
	// 동적으로 새롭게 생성된 요소 - delegate	
	//부모는 같이 생긴것보다는 기존에 있던것들로 잡는 것이 좋음
	function zipselect(tt){
		//.ziptr에 있는 td의 자식을 선택하게 하고 싶음 => this는 ziptr
		//td속에 있는 값들을 들고오기 위해서는 html(), text()사용 / eq()는 인덱스가 0부터 시작
		zipcode = $("td:eq(0)",tt).text();
		addr = $("td:eq(1)", tt).text();
		
		// 폼에 출력
		$("#zip").val(zipcode);
		$("#add1").val(addr);
		
		// 모달창 닫기
		$("#myModal").modal('hide');
		
		// 모달창 내용 지우기
		$("#dong").val("");
		$("#result1").empty();
	}
	
	// 제출버튼 클릭 이벤트
  	function fsubmit(){//form의 제출버튼에 해당하는 함수
  		//02.01 교재리스트.html참고
  		// submit의 고유 기능(전송)을 방지한다.
  		event.preventDefault();
  
  		console.log($("#ff").serialize());
  		console.log($("#ff").serializeArray());
  		console.log($("#ff").serializeJSON());
  		
  		$.ajax({
  			url : "/member/Insert.do",
  			method : "post",
  			data : $("#ff").serializeJSON(),
  			//js의 폴터에 있는 jquery.serializejson.min.js라이브러리를 통해 실행됨
  			success : function(res){
  				$("#submit").html(res.sw).css("color", "blue");
  			},
  			error : function(xhr){
  				alert("상태 : " + xhr.status);
  			},
  			dataType : "json"
  		})
  	}
  	
  	function okpro(vinput) {
  	   vsp = $(vinput).parents(".form-group").find(".sp");

  	   $(vsp).empty();

  	   $("<img>",{
  	      "src" : "../images/check.png",
  	      "width" : "20px",
  	      "height" : "20px"
  	   }).appendTo(vsp);

  	   // nopro영역 지우기
  	   $(vinput).parents(".form-group").find(".msg").html("");

  	}

	function nopro(vinput, text){
		// this.parent를 통해 div class가 form-group인것을 찾고 후손인 class msg인것을 찾는다.
		 $(vinput).parents('.form-group')
         .find('.msg').html(text)
         .css('color', 'red');
		
		 $(vinput).parents(".form-group").find(".sp").empty();
	}
	