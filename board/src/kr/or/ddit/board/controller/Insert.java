package kr.or.ddit.board.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.BoardVO;

@WebServlet("/Insert.do")
public class Insert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 전송 데이터 받기
		request.setCharacterEncoding("utf-8");
		
		BoardVO vo = new BoardVO();
		vo.setSubject(request.getParameter("subject"));
		vo.setWriter(request.getParameter("writer"));
		vo.setMail(request.getParameter("mail"));
		vo.setPassword(request.getParameter("password"));		
		vo.setContent(request.getParameter("content"));
		//getRemoteAddr()=>글을 작성한 사람의 ip주소를 얻는 메소드
		String wip = request.getRemoteAddr();
		vo.setWip(wip);
		
		// 2. service객체 얻기
		IBoardService service = BoardServiceImpl.getService();
		
		// 3. service메서드 호출하기 - 결과값 받기
		int num = service.insertBoard(vo);
		
		// 4. 결과값을 request에 저장
		request.setAttribute("result", num);
		
		// 5. view페이지로 forward - result.jsp
		request.getRequestDispatcher("board/result.jsp").forward(request, response);
	}
}