<%@page import="kr.or.ddit.prod.vo.ProdVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<%
	List<ProdVO> list = (List<ProdVO>) request.getAttribute("selectAllProd");
%>
<table border="1" class="table table-striped">
	<tr>
		<td>PROD_ID</td>
		<td>PROD_NAME</td>
		<td>PROD_LGU</td>
		<td>PROD_BUYER</td>
		<td>PROD_COST</td>
		<td>PROD_PRICE</td>
		<td>PROD_SALE</td>
		<td>PROD_OUTLINE</td>
		<td>PROD_DETAIL</td>
		<td>PROD_TOTALSTOCK</td>
		<td>PROD_INSDATE</td>
		<td>PROD_PROPERSTOCK</td>
		<td>PROD_DELIVERY</td>
		<td>PROD_UNIT</td>
	</tr>
<%
	for(int i=0; i<list.size(); i++){
		ProdVO vo = list.get(i);	
%>
	<tr>
		<td><%=vo.getProd_id() %></td>
		<td><%=vo.getProd_name() %></td>
		<td><%=vo.getProd_lgu() %></td>
		<td><%=vo.getProd_buyer() %></td>
		<td><%=vo.getProd_cost() %></td>
		<td><%=vo.getProd_price() %></td>
		<td><%=vo.getProd_sale() %></td>
		<td><%=vo.getProd_outline() %></td>
		<td><%=vo.getProd_detail() %></td>
		<td><%=vo.getProd_totalstock() %></td>
		<td><%=vo.getProd_insdate() %></td>
		<td><%=vo.getProd_properstock() %></td>
		<td><%=vo.getProd_delivery()%></td>
		<td><%=vo.getProd_unit() %></td>
	</tr>
<%
	}
%>
</table>