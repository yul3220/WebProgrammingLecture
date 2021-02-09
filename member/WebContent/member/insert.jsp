<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String result = (String) request.getAttribute("insertMember");
	if(result!=null){
%>
	{
		"sw" : "등록성공"
	}
<% 		
	}else{
%>
	{
		"sw" : "등록실패"
	}
<% 	
	}
%>