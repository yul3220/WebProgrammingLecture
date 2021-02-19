package kr.or.ddit.board.controller;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.ReplyVO;

@WebServlet("/ListReply.do")
public class ListReply extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 클라이언트 요청시 bonum받기
		int bonum = Integer.parseInt(request.getParameter("bonum"));
		
		// 1. 클라이언트 요청시 전송 데이터 받기
		// 2. service객체 얻기
		IBoardService service = BoardServiceImpl.getService();
		
		// 3. service메서드 호출하기 - 결과값 받기
		List<ReplyVO> list = service.listReply(bonum);
		
		// 4. 결과값을 request에 저장
		request.setAttribute("listReply", list);
		
		// 5. view페이지로 forward - replyList.jsp
		request.getRequestDispatcher("board/replyList.jsp").forward(request, response);
	}
}