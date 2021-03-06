<%@page import="kr.or.ddit.member.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="java.nio.charset.Charset"%>
<%@page import="com.ibatis.common.resources.Resources"%>
<%@page import="java.io.Reader"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClientBuilder"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	//클라이언트 요청시 전송되는 데이터를 받는다.
	// CRUD처리를 한다.
	//- 1. sqlMapClient객체를 얻어오기 - aa = sqlMapClientFactory.getClient()
	//- 2. sql문을 실행 - mapper파일의 namespace.id이름
	//		select -> aa.queryForList(namespace.id이름) ==> 결과가 여러줄일때 사용
	//select결과가 한줄이면 queryForObject(namespace.id이름)사용
	
	// 처리 결과로 응답 데이터를 생성한다 - json, text, html, xml
%>
<% 
	// 1. sqlMapClient객체를 얻어오기
	SqlMapClient aa = SqlMapClientFactory.getClient();

	// 2. sql문을 실행
	List<MemberVO> list = aa.queryForList("member.selectAll");
%>
<%-- jsonarr.jsp처럼 대괄호와 중괄호의 형태처럼 만들어야한다.
		자바와 json을 분리시켜야 한다.--
		json부분은 프론트엔드, 자바부분은 백엔드 
		=> 후에는 mvc모델을 이용하여 독립적으로 일을 할 수 있도록 나눔 %>
<%--JSON--%>
[ 
<%	
//JAVA// 3. 실행 결과로 json데이터 생성
	for(int i=0; i<list.size();i++){
		MemberVO vo = list.get(i);
		if(i>0) out.print(",");//out.print => 출력
		//out은 내장printwriter객체이다. // 자바에서의 System.out.print()의 기능을 수행
%>
<%--JSON--%>
{
	"id" : "<%= vo.getMem_id() %>",
	"name" : "<%= vo.getMem_name() %>",
	"hp" : "<%= vo.getMem_hp() %>",
	"mail" : "<%= vo.getMem_mail() %>"
}
<% 
//JAVA - for문의 괄호를 다는 중괄호
	}//JSON
%>
] <%--JSON--%>
