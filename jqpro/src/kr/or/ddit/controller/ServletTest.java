package kr.or.ddit.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.MemberVO;
import kr.or.ddit.service.IServiceSample;
import kr.or.ddit.service.ServiceImpl;

/**
 * Servlet implementation class ServletTest
 */
@WebServlet("/ServletTest")
//HttpServlet => apache가 들고 있음
public class ServletTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletTest() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 전송되는 데이터 받기
		String aa = request.getParameter("id");
		
		// crud처리 준비
		// 2. ★service객체 생성(생성 말고 얻어오기) (Y:ss = new() => x, get을 통해 얻어올려고 함)
		IServiceSample service = ServiceImpl.getService();
		
		// 3. service메소드 호출 - 결과값 리턴 받아 가져온다.
		List<MemberVO> list = service.getMemberAll();
		
		//만들어진 list를 view페이지에 보내야한다.
		// 4. list결과값을 request객체에 저장
		request.setAttribute("getMemberAll", list);
		
		// 5. 수행된 결과값을 view페이지로 보낸다. - forard방식
		RequestDispatcher disp = request.getRequestDispatcher("2021-02-05/view.jsp");
		
		disp.forward(request, response);
	}
}
