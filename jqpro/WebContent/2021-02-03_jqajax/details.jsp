<%@page import="kr.or.ddit.buyer.BuyerVO"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<%
	//1. 클라이언트 요청시 전송되는 데이터 받기
	String buyer_id = request.getParameter("id");
	
	// 2. sqlMapClient객체 열기
	SqlMapClient client = SqlMapClientFactory.getClient();
	
	// 3. sql문 실행 - select
	BuyerVO vo = (BuyerVO) client.queryForObject("buyer.selectByDetails", buyer_id);//parameter를 넘겨줌
%>
<table class="tb">
<tr><td>BUYER_ID</td>
<td><%= vo.getBuyer_id()%></td></tr>

<tr><td>BUYER_NAME</td>
<td><%= vo.getBuyer_name()%></td></tr>

<tr><td>BUYER_LGU </td>
<td><%= vo.getBuyer_lgu()%></td></tr>

<tr><td>BUYER_MAIL</td>
<td><%= vo.getBuyer_mail()%></td></tr>

<tr><td>BUYER_BANK</td>
<td><%= vo.getBuyer_bank()%></td></tr>

<tr><td>BUYER_BANKNO</td>
<td><%= vo.getBuyer_bankno()%></td></tr>

<tr><td>BUYER_BANKNAME</td>
<td><%= vo.getBuyer_bankname()%></td></tr>

<tr><td>BUYER_ADD1</td>
<td><%= vo.getBuyer_add1()%></td></tr>

<tr><td>BUYER_ADD2</td>
<td><%= vo.getBuyer_add2()%></td></tr>

<tr><td>BUYER_ZIP</td>
<td><%= vo.getBuyer_zip()%></td></tr>

</table>