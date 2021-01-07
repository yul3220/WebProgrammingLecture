<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>여기는 JSP파일입니다.</h1>
	<h3>JSP : JAVA Server Page의 약어입니다.</h3>	
	<h4>html태그안에 java 코딩이 가능한 페이지입니다.</h4>
	
	<% 
		//자바 문장이 들어갈 수 있음
		//클라이언트가 전송시 입력데이터를 받는다.
		//request라는 내장 객체를 이용한다.
		request.setCharacterEncoding("UTF-8");
		//post방식일때 한글을 깨지지 않게 가져오기 위해서 필요, 무조건 처음에 작성
		//server.xml에는 get방식의 데이터 encoding만 정의되어있음
		String userName = request.getParameter("name");
		String userId = request.getParameter("id");
		String userTel = request.getParameter("tel");
		
		//db연결
		//sql문 수행(select)
		//sql 수행결과를 출력
		//출력을 받을 때는 <%= %
	%>	
	
	<%= userName%>님 환영합니다.<br>
	<%= userId%>님 즐거운 하루 되세요.<br>
	<%= userTel%>번호로 연락드리겠습니다.<br>
</body>
</html>