<%@page import="kr.or.ddit.buyer.BuyerVO"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//1. 클라이언트 요청시 전송되는 데이터 받기
	String buyer_id = request.getParameter("id");
	
	// 2. sqlMapClient객체 열기
	SqlMapClient client = SqlMapClientFactory.getClient();
	
	// 3. sql문 실행 - select
	BuyerVO vo = (BuyerVO) client.queryForObject("buyer.selectByDetails", buyer_id);//parameter를 넘겨줌
%>
<%-- key값은 유일한 값을 사용 --%>
{
	"id" : "<%= vo.getBuyer_id()%>",
	"name" : "<%= vo.getBuyer_name()%>",
	"lgu" : "<%= vo.getBuyer_lgu()%>",
	"mail" : "<%= vo.getBuyer_mail()%>",
	"bank" : "<%= vo.getBuyer_bank()%>",
	"bankname" : "<%= vo.getBuyer_bankname()%>",
	"bankno" : "<%= vo.getBuyer_bankno()%>",
	"add1" : "<%= vo.getBuyer_add1()%>",
	"add2" : "<%= vo.getBuyer_add2()%>",
	"zip" : "<%= vo.getBuyer_zip()%>"
}