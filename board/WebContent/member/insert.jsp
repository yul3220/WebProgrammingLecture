<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String result = (String) request.getAttribute("insertMember");
	if(result!=null){
%>
	{
		"sw" : "<%=request.getParameter("mem_id")%>님 회원가입을 축하드립니다."
	}
<% 		
	}else{
%>
	{
		"sw" : "회원가입에 실패했습니다. 빠진 항목이 있거나 아이디가 중복됬는지 한번 더 확인 부탁드립니다."
	}
<% 	
	}
%>