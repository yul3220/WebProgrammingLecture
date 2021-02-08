<%@page import="kr.or.ddit.lprod.vo.LprodVO"%>
<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	//1. 클라이언트 요청시 전송데이터 받기 
//2. SqlMapClient 객체 얻기
//3. sql문 실행 - select - 
	List<LprodVO> list = (List<LprodVO>) request.getAttribute("id");
%>
 
<table border = "1">

	<tr>
		<td>아이디</td>
		<td>아으아</td>
		<td>이름</td>
	</tr>

<%
	for(int i=0; i<list.size(); i++){
		LprodVO vo = list.get(i);
%>

		<tr>
		<td><%=vo.getLprod_id() %></td>
		<td><%=vo.getLprod_gu() %></td>
		<td><%=vo.getLprod_nm() %></td>
		</tr>
<% 
}
%>

</table>