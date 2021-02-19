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

@WebServlet("/InsertReply.do")
public class InsertReply extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1.클라이언트 요청시 전송 데이터 받기 - bonum, name, cont
		// VO에 저장
		request.setCharacterEncoding("utf-8");
		
		ReplyVO vo = new ReplyVO();
		vo.setBonum(Integer.parseInt(request.getParameter("bonum")));
		vo.setName(request.getParameter("name"));
		vo.setCont(request.getParameter("cont"));
		
		// 2. service객체 얻기
		IBoardService service = BoardServiceImpl.getService();
		
		// 3. service메서드 호출하기 - 결과값 받기
		int renum = service.insertReply(vo);
		
		// 4. 결과값을 request에 저장
		request.setAttribute("result", renum);
		
		// 5. view페이지로 forward - result.jsp
		request.getRequestDispatcher("board/result.jsp").forward(request, response);
	}
}