<%@page import="kr.or.ddit.lprod.vo.LprodVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	List<LprodVO> list = (List<LprodVO>) request.getAttribute("selectLprod");
%>
<table border="1">
	<tr>
		<th>아이디</th>
		<th>분류명</th>
		<th>분류이름</th>
	</tr>
<% 
	for(int i=0; i<list.size();i++){
		LprodVO vo = list.get(i);
%>
	<tr>
		<td><%= vo.getLprod_id() %></td>
		<td><%= vo.getLprod_gu() %></td>
		<td><%= vo.getLprod_nm() %></td>
	</tr>
<%
	}
%>
</table>