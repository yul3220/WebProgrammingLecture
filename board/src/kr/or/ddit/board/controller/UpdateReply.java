package kr.or.ddit.board.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.ReplyVO;

@WebServlet("/UpdateReply.do")
public class UpdateReply extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 전송되는값을 가져온다 => cont, renum
		request.setCharacterEncoding("utf-8");
		
		ReplyVO vo = new ReplyVO();
		vo.setRenum(Integer.parseInt(request.getParameter("renum")));
		vo.setCont(request.getParameter("cont"));
		
		// 2. service객체 얻기
		IBoardService service = BoardServiceImpl.getService();
		
		// 3. service메서드 호출하기 - 결과값 받기
		int cnt = service.updateReply(vo);
		
		// 4. 결과값을 request에 저장
		request.setAttribute("result", cnt);
		
		// 5. view페이지로 forward - result.jsp
		request.getRequestDispatcher("board/result.jsp").forward(request, response);
	}
}