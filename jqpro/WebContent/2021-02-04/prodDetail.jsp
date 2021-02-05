<%@page import="kr.or.ddit.prod.ProdVO"%>
<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<% 
	// 1. 클라이언트 요청시 전송되는 데이터 받기
	String prodId = request.getParameter("id");

	// 2. sqlMapClient객체 열기
	SqlMapClient client = SqlMapClientFactory.getClient();

	// 3. sql문 실행 - select
	ProdVO vo =  (ProdVO)client.queryForObject("prod.selectBydetails", prodId);
%>
<table class="table table-striped" border="1">
<tr><td>PROD_ID</td>
<td><%=vo.getProd_id() %></td></tr>

<tr><td>PROD_NAME</td>
<td><%=vo.getProd_name() %></td></tr>

<tr><td>PROD_LGU</td>
<td><%=vo.getProd_lgu() %></td></tr>

<tr><td>PROD_BUYER</td>
<td><%=vo.getProd_buyer() %></td></tr>

<tr><td>PROD_COST</td>
<td><%=vo.getProd_cost() %></td></tr>

<tr><td>PROD_PRICE</td>
<td><%=vo.getProd_price() %></td></tr>

<tr><td>PROD_SALE</td>
<td><%=vo.getProd_sale() %></td></tr>

<tr><td>PROD_OUTLINE</td>
<td><%=vo.getProd_outline() %></td></tr>

<tr><td>PROD_DETAIL</td>
<td><%=vo.getProd_detail() %></td></tr>

<tr><td>PROD_TOTALSTOCK</td>
<td><%=vo.getProd_totalstock() %></td></tr>

<tr><td>PROD_INSDATE</td>
<td><%=vo.getProd_insdate() %></td></tr>

<tr><td>PROD_PROPERSTOCK</td>
<td><%=vo.getProd_properstock() %></td></tr>

<tr><td>PROD_DELIVERY</td>
<td><%=vo.getProd_delivery()%></td></tr>

<tr><td>PROD_UNIT</td>
<td><%=vo.getProd_unit() %></td></tr>
</table>