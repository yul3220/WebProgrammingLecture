<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
p{
	font-size : 1.2em;
	background : yellow;
	margin: 20px;
}
</style>
</head>
<body>
<% 
	request.setCharacterEncoding("UTF-8");

	String userName = request.getParameter("name");
	String userId = request.getParameter("id");
	String userGender = request.getParameter("gender");
	String foods[] = request.getParameterValues("food");
	String file = request.getParameter("file");
	
	String fod = "";
	
	for(int i = 0; i < foods.length; i++){
		fod += foods[i]+"&nbsp;&nbsp;&nbsp;";
	}
	//request.getParameterValues를 사용하면 여러 값을 가져올 수 있다.
	//request.getParameterValues("food"); 
	//=> 안에 이름이 value에 지정한 이름과 다르면 null값이 출력됨
%>

<p><%= userName %></p>
<p><%= userId %></p>
<p><%= userGender %></p>
<p><%= fod %></p>
<p><%= file %></p>
</body>
</html>