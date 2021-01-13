<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
div{
	border : 2px solid pink;
	margin : 10px;
	padding : 10px;
	height : auto;
}
</style>
</head>
<body>
<% 
	request.setCharacterEncoding("UTF-8");

	String inputText = request.getParameter("area");
	
	//inputText의 엔터(\r\n)값에서 줄바꾸기<br> : replaceAll()
	
	String text = inputText.replaceAll("\r", "").replaceAll("\n", "<br>");
	
	//캐리지리턴(\r) : 커서를 앞으로 보내라
	//\r\n => 커서를 앞으로 가서 한칸 밑으로 내려가라
	
%>

<p>입력 내용을 request로 가져올때 여러줄로 입력된 내용을 출력시 줄이 바뀌지 않는다.</p>
<div><%=inputText %></div>

<br>
<p>입력 내용을 request로 가져올때 여러줄로 입력된 내용을 출력시에도 같은 형태로 출력한다.</p>
<div><%=text %></div>

</body>
</html>