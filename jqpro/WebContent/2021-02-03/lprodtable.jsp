<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="kr.or.ddit.lprod.LprodVO"%>
<%@page import="java.util.List"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	// 1. 클라이언트 요청시 전송되는 데이터 받기
	// 2. sqlMapClient객체 열기
	SqlMapClient aa = SqlMapClientFactory.getClient();

	// 3. sql문 실행 - select
	List<LprodVO> list = aa.queryForList("lprod.selectLprod");
%>

<!-- HTML -->
<table border="1">
	<tr class="t1">
		<td>LPROD_ID</td>
		<td>LPROD_GU</td>
		<td>LPROD_NM</td>
	</tr>
	
<%	
//JAVA// 3. 실행 결과로 json데이터 생성
	for(int i=0; i<list.size();i++){
		LprodVO vo = list.get(i);
		//out은 내장printwriter객체이다. // 자바에서의 System.out.print()의 기능을 수행
%>

<!-- HTML -->
	<tr>
		<td><%=vo.getLprod_id() %></td>
		<td><%=vo.getLprod_gu() %></td>
		<td><%=vo.getLprod_nm() %></td>
	</tr>
	
<% } %>
<!-- HTML -->
</table>