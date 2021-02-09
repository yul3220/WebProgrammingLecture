package kr.or.ddit.member.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.service.IMemberService;
import kr.or.ddit.member.service.MemberServiceImpl;
import kr.or.ddit.member.vo.ZipVO;

/**
 * Servlet implementation class DongSearch
 */
@WebServlet("/DongSearch.do")
public class DongSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DongSearch() {
        super();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 전송되는 데이터를 받는다.
		request.setCharacterEncoding("UTF-8");
		String dong = request.getParameter("dong");
		
		// 2. service객체얻어오기
		IMemberService service = MemberServiceImpl.getService();
		
		// 3. service 메소드 호출 - 결과값 받기
		List<ZipVO> list = service.selectByDong(dong);
		
		// 4. 결과값을 request에 저장 - session, application
		/* - session(로그인할때 주로 사용, 저장해놨다가 다음번에도 사용이 가능,
		   		로그아웃이 될때까지 메일이나 로그인이 필요한 기능(어느페이지)에서 사용할 수 있도록 하는 것)
		   - application(서버가 꺼지기 전까지 어느페이지에서나 쓸수 있도록 하는 것, 
		   			로그아웃을 했는데도 해야 하는 기능에서 사용하기도 함)
		   - pagecontext(현재페이지에서만 사용하는 것)*/
		request.setAttribute("selectByDong", list);
		
		// 5. view페이지(jsp) forward
		//redirect는 request를 공유하지 않음 => 다시 요청을 한 client한테 돌아가서 재요청을 하게끔하기 때문
		//forward는 서버에서 바로 요청과 응답을하기 때문에  request를 공유할수 있음
		RequestDispatcher disp = request.getRequestDispatcher("member/zipcode.jsp");
		//member라는 폴더의 zipcode.jsp로 Dispatcher함
		
		disp.forward(request, response);
	}
}
