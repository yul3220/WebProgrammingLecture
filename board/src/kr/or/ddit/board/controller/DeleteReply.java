package kr.or.ddit.board.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;

@WebServlet("/DeleteReply.do")
public class DeleteReply extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 renum 가져오기
		int renum = Integer.parseInt(request.getParameter("renum"));
		
		// 2. service객체 얻어오기
		IBoardService service = BoardServiceImpl.getService();
		
		// 3. service메소드 호출 - 결과값 가져오기
		int cnt = service.deleteReply(renum);
		
		// 4. 결과값을 request에 저장
		request.setAttribute("result", cnt);
		
		// 5. view페이지로 이동 - result.jsp
		request.getRequestDispatcher("board/result.jsp").forward(request, response);
	}
}