currentPage = 1;//02.16

deleteBoard = function(){//02.17
	$.get(
		"/board//DeleteBoard.do",
		{"num" : vidx},
		function(res){
			alert("")
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
                code += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ v.num +'">' + v.subject +'</a>';
                code += '</h4>';
                code += '</div>';
                code += '<div id="collapse'+ v.num +'" class="panel-collapse collapse">';
                code += '<div class="panel-body">';
                code += '<p class="p1">';
                code += '작성자 : ' + v.writer +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '이메일 : ' + v.mail + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '날짜 : ' + v.date +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                code += '조회수 : ' + 0;
                code += '</p>';
                code += '<p class="p2">';
                code += '<button idx="'+v.num+'" type="button" name="modify" class="action">수정</button>';
                code += '<button idx="'+v.num+'" type="button" name="delete" class="action">삭제</button>';
                //idx는 임의의 속성이다.
                //버튼을 클릭하면 name과 idx의 속성을 가져온다.
                code += '</p>';
                code += '<p class="p3">';
                code +=  v.cont;
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
            	pager +=   '<li><a class = "prev" href="#">Previous</a></li>';
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
                code += '조회수 : ' + 0;
                code += '</p>';
                code += '<p class="p2">';
                code += '<button type="button" name="modify" class="action">수정</button>';
                code += '<button type="button" name="delete" class="action">삭제</button>';
                code += '</p>';
                code += '<p class="p3">';
                code +=  v.cont;
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