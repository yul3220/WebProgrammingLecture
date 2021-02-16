package kr.or.ddit.board.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.BoardVO;

@WebServlet("/List.do")
public class ListAll extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public ListAll() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 전체 목록 가져오기
		
		// 1. 클라이언트 요청시 전송 데이터 받기
		
		// 2. service객체 얻기
		IBoardService service = BoardServiceImpl.getService();
		
		// 3. service메서드 호출 - 결과값 List로 받음
		List<BoardVO> list = service.selectAll();
		
		// 4. 결과값을 request에 저장
		request.setAttribute("list", list);
		
		// 5. view페이지로 forward
		request.getRequestDispatcher("board/listAll.jsp").forward(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 페이지별 리스트 가져오기
		
		// 1. 클라이언트 요청시 전송 데이터 받기 - 페이지 번호
		//String형을 int형으로 변환시킴
		int cpage = Integer.parseInt(request.getParameter("cpage"));
		
		// 2. service객체 얻기
		IBoardService service = BoardServiceImpl.getService();
		
		// 전체 글 갯수 가져오기
		int totalCount = service.listCount();
		
		// 한페이지에 출력할 글갯수 - 3
		int perList = 3;
		
		// 한 화면에 출력할 페이지수 - 3
		int perPage = 3;
		
		// 전체 페이지수 구하기 - 7
		int totalPage = (int) (Math.ceil(totalCount / (double)perList));
		
		// start와 end값 구하기 1-> 1,2,3 / 2-> 4,5,6 / 3-> 7,8,9
		// 7 -> 19,20,21
		int start = (cpage-1) * perList +1;
		int end = start + perList - 1;
		if(end > totalCount) end = totalCount;
		
		/*
			[1][2][3]
			cpage = 1, cpage  = 2, cpage = 3
			startpage = 1, endpage = 3
			[4][5][6]
			cpage = 4, cpage  = 5, cpage = 6
			startpage = 4, endpage = 6
			[7][8][9]
			cpage = 7, cpage  = 8, cpage = 9
			startpage = 7, endpage = 9
		*/
		// startpage와 endpage구하기
		int startPage = ((cpage-1) / perPage * perPage) +1;
		int endPage = startPage + perPage -1;
		if(endPage > totalPage) endPage = totalPage;
		
		Map<String, Integer> map = new HashMap<>();
		map.put("start", start);
		map.put("end", end);
		
		// 3. service메서드 호출 - 결과값 List로 받음
		List<BoardVO> list = service.selectByPage(map);
		
		// 4. 결과값을 request에 저장
		request.setAttribute("list", list);
		request.setAttribute("totalpage", totalPage);
		request.setAttribute("startpage", startPage);
		request.setAttribute("endpage", endPage);
		
		// 5. view페이지로 forward
		request.getRequestDispatcher("board/listPage.jsp").forward(request, response);
	}
}