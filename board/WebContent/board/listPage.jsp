<%@page import="kr.or.ddit.board.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
 pageEncoding="UTF-8"%>
<%
	List<BoardVO> list = (List<BoardVO>) request.getAttribute("list");
	int totalPage = (Integer) request.getAttribute("totalpage");
	int startPage = (Integer) request.getAttribute("startpage");
	int endPage = (Integer) request.getAttribute("endpage");
%>
{
	"totalpage" : "<%=totalPage %>",
	"startpage" : "<%=startPage %>",
	"endpage" : "<%=endPage %>",
	"datas" : [
		<% 
			for(int i=0; i<list.size(); i++){
				BoardVO vo = list.get(i);
				if(i>0) out.print(",");
				// 이부분을 가져올때는 res.datas[i].num을 통해 가져옴
		%>		
			{
				"num" : "<%= vo.getNum() %>",
				"subject" : "<%= vo.getSubject() %>",
				"writer" : "<%= vo.getWriter() %>",
				"cont" : "<%= vo.getContent().replaceAll("\r", "")
				.replaceAll("\n", "<br>")%>",
				"hit" : "<%= vo.getHit() %>",
				"date" : "<%= vo.getWdate() %>",
				"mail" : "<%= vo.getMail() %>",
				"pass" : "<%= vo.getPassword() %>"
			}	
		<%		
			}	
		%>
	]
}