currentPage = 1;//02.16

updateReply = function(){//02.23
	$.ajax({
		url : "/board/UpdateReply.do",//contextroot가 board이다.
		type : "post",
		data : reply,//reply객체 - cont, renum
		dataType : "json"
	})
}

deleteReply = function(but){//02.22
	$.ajax({
		url : "/board/DeleteReply.do",
		type : "get",
		data : {"renum" : vidx},
		success : function(res){
			//alert(res.sw);
			$(but).parents(".rep").remove();
		},
		error : function(xhr){
			 alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}

replySaveServer = function(but){//02.19
    $.ajax({
     url : '/board/InsertReply.do',
     type : 'post',
     data : board, //board객체 - bonum, name, cont
     dataType : 'json',
     success : function(res){
        //alert(res.sw);
     
    	// 댓글 등록 후 출력
    	replyListServer(but);
     },
     error : function(xhr){
        alert("상태 : " + xhr.status);
     }
    })
};

// 등록 버튼 클릭, 제목 클릭 할때
replyListServer = function(but){//02.19
	$.ajax({
		url : '/board/ListReply.do',
		type : "get",
		data : {"bonum" : vidx},
		success : function(res){
			//alert("성공");
			recode = "";
			$.each(res, function(i, v){
				recode += '<div class="panel-body rep">';
                recode += '<p class="p1">';
                recode += 	v.name +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                recode += 	v.redate +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                recode += 	"<br><br><span class='cont'>" + v.cont + "</span>";
                recode += '</p>';
                recode += '<p class="p2">';
                recode += 	'<button id="rmodi" idx="'+v.renum+'" type="button" name="r_modify" class="action">댓글수정</button>';
                recode += 	'<button idx="'+v.renum+'" type="button" name="r_delete" class="action">댓글삭제</button>';
                recode += '</p>';
                recode += "</div>";
			})
			//새롭게 만든 내용을 없애기 위해서는 remove를 사용해야 한다.
			//$(but).parents(".panel").find(".rep").remove();
			$(but).parents(".panel").find(".pbody").find(".rep").remove();
			//remove를 하지 않으면 전에 있던 내용도 다시 불러와진다.
			$(but).parents(".panel").find(".pbody").append(recode);
		},
		error : function(xhr){
			 alert("상태 : " + xhr.status)
		},
		dataType : "json"
		
	})
}

readHitServer = function(list){//02.18 && 02.19
	$.ajax({
		url : "/board/UpdateHit.do",
		data : {"num" : vidx},
		method : "get",
		success : function(res){
			parent = $(list).parents(".panel");
			hit = parseInt($(parent).find(".wh").text());
			$(parent).find(".wh").text(++hit);
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}

updateBoard = function(){//02.18
	$.ajax({
		url : "/board/UpdateBoard.do",
		data : $("#mform").serializeJSON(),
		method : "post",
		success : function(res){
			//alert(res.sw);
			
			// 화면에서 수정한 값 출력 - 
			//parent는 board.html에서 전역변수로 선언했기때문에 board.js에서 사용가능하다.
			// 제목
			$(parent).find("a").text($("#mform #subject").val());
			// 메일
			$(parent).find(".wm").text($("#mform #mail").val());
			// 내용
			cont = $("#mform #content").val();
			cont = cont.replace(/\r/g, "").replace(/\n/g, "<br>");
			
			$(parent).find(".wc").html(cont);
			
			// 모달창 닫기
			$("#modiModal").modal("hide");
			$("#mform .txt").val("");
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		}, 
		dataType : "json"
	})
}

deleteBoard = function(btn){//02.17
	$.get(
		"/board//DeleteBoard.do",
		{"num" : vidx},
		function(res){
			//alert(res.sw);
			//=> 흐름을 방해함으로써 코드를 작성하면서 에러나 결과확인용으로 사용하는 것이 좋음
			// 화면에서 리스트 삭제
			//여기서 삭제포인트를 this로 넣기에는 this가 무엇인지 모름
			//=>파라미터값을 통해 현재 선택한 항목을 넘겨받는다.
			//$(btn).parents(".panel").remove();//.panel-default도 가능
			//=>이상태까지는 삭제만되서 5개출력을원하는데 4개가 나옴
			readPageServer(currentPage);
		},
		"json"
	)
}

insertBoard = function(){//02.17
	//url, data, success, dataType
	$.post(
			"/board/Insert.do",
			$("#wform").serializeJSON(),//jquery.serializejson.min.js가 필요
			function(res){
				$("#writeModal").modal("hide");
				$(".txt").val("");//modal안에 작성한 내용 다 지우기
				readPageServer(1);//다 작성하면 다시 첫페이지로 가게끔 함
			},
			"json"
	)
}

readPageServer = function(cpage){//02.16
	$.ajax({
		url : '/board/List.do',
        type : 'post',
        data : {'cpage' : cpage},
        success : function(res){
        	code = "<div class=\"panel-group\" id=\"accordion\">";/*큰 따옴표가 여러 개라서 인식에 힘들다면 \를 넣어주면 해결할 수 있다.*/
            $.each(res.datas, function(i, v){
                code += '<div class="panel panel-default">';
                code += '<div class="panel-heading">';
                code += '<h4 class="panel-title">';
                code += '<a idx="'+v.num+'" name="list" class="action" data-toggle="collapse" data-parent="#accordion" href="#collapse'+ v.num +'">' + v.subject +'</a>';
                code += '</h4>';
                code += '</div>';
                code += '<div id="collapse'+ v.num +'" class="panel-collapse collapse">';
                code += '<div class="panel-body pbody">';
                code += '<p class="p1">';
                code += '작성자  : <span class="wr">' + v.writer +'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '이메일 : <span class="wm">' + v.mail + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '날짜 : <span class="wd">' + v.date +'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '조회수 : <span class="wh">' + v.hit + '</span>';
                code += '</p>';
                code += '<p class="p2">';
                code += '<button idx="'+v.num+'" type="button" name="modify" class="action">수정</button>';
                code += '<button idx="'+v.num+'" type="button" name="delete" class="action">삭제</button>';
                //idx는 임의의 속성이다.
                //버튼을 클릭하면 name과 idx의 속성을 가져온다.
                code += '</p>';
                code += '<p class="p3">';
                code +=  '<span class="wc">'+ v.cont + '</span>';
                code += '</p>';
                code += '<p class="p4">';
                code += '<textarea cols="60"></textarea>';
                code += '<button idx="'+v.num+'" type="button" name="reply" class="action">등록</button>';
                code += '</p>';
                code += '</div>';
                code += '</div>';
                code += '</div>';
            })
            code += '</div>';
            
            $('.box').html(code);
            
            // 이전버튼 출력 - 1보다 클떄만
            $("#pagelist").empty();
            if(res.startpage > 1){
            	pager = '<ul class="pul pager">';
            	pager += '</ul>';
            	
            	$("#pagelist").append(pager);
            }
            
            // 페이지번호 출력
            pager = '<ul class="pul pagination pager">';
            for(i = res.startpage; i<=res.endpage; i++){
            	if(currentPage == i){
            		 pager += '<li class="active"><a class="paging" href="#">'+ i +'</a></li>';
            	}else{
            		 pager +='<li><a class="paging" href="#">'+ i +'</a></li>';
            	}
            }
            pager += '</ul>';
            $("#pagelist").append(pager);
            
            // 다음버튼 출력
            if(res.endpage < res.totalpage){
            	pager = '<ul class="pager">';
            	pager +=   '<li><a class = "next" href="#">Next</a></li>';
            	pager += '</ul>';
            	
            	$("#pagelist").append(pager);
            }
        },
        error : function(xhr){
        	alert("상태 : " + xhr.status);
        },
        dataType : "json"
	})
}

readServer = function(){//02.15
    $.ajax({
        url : '/board/List.do',
        type : 'get',
        success : function(res){
//            code = '<div class="panel-group" id="accordion">';
            code = "<div class=\"panel-group\" id=\"accordion\">";/*큰 따옴표가 여러 개라서 인식에 힘들다면 \를 넣어주면 해결할 수 있다.*/
            $.each(res, function(i, v){
                code += '<div class="panel panel-default">';
                code += '<div class="panel-heading">';
                code += '<h4 class="panel-title">';
                code += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ v.num +'">' + v.subject +'</a>';
                code += '</h4>';
                code += '</div>';
                code += '<div id="collapse'+ v.num +'" class="panel-collapse collapse">';
                code += '<div class="panel-body">';
                code += '<p class="p1">';
                code += '작성자 : ' + v.writer +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '이메일 : ' + v.mail + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '날짜 : ' + v.date +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '조회수 : ' + v.hit;
                code += '</p>';
                code += '<p class="p2">';
                code += '<button type="button" name="modify" class="action">수정</button>';
                code += '<button type="button" name="delete" class="action">삭제</button>';
                code += '</p>';
                code += '<p class="p3">';
                code += v.cont;
                code += '</p>';
                code += '<p class="p4">';
                code += '<textarea cols="60"></textarea>';
                code += '<button type="button" name="reply" class="action">등록</button>';
                code += '</p>';
                code += '</div>';
                code += '</div>';
                code += '</div>';
            })
            code += '</div>';
            
            $('.box').html(code);
        },
        error: function(xhr){
            alert("상태 : " + xhr.status);
        },
        dataType : 'json'
    })
}