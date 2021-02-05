package kr.or.ddit.dao;

import java.sql.SQLException;
import java.util.List;
import com.ibatis.sqlmap.client.SqlMapClient;
import kr.or.ddit.ibatis.config.SqlMapClientFactory;
import kr.or.ddit.member.MemberVO;

/*
 * SqlMapClient객체를 얻어서 mapper수행 - service로 리턴
 * 
 * service에서 사용할 자신의 객체를 생성 - 리턴 하는 get()
 */
public class DaoImpl implements IDaoSample {
	private SqlMapClient client;
	private static IDaoSample dao;//인터페이스가 표준설계니까 인터페이스타입으로 리턴
	//static => 공유
	
	// 생성자
	private DaoImpl(){//new DaoImpl()을 할수없도록 private로 정의
		client = SqlMapClientFactory.getClient();
	}
	
	public static IDaoSample getDao(){
		if(dao==null) dao = new DaoImpl();
		return dao;
	}
	@Override
	public List<MemberVO> getMemberAll() {
		 List<MemberVO> list = null;
		 try {
			// mapper에서 수행된 결과를 받는다.
			list = client.queryForList("member.selectAll");
		 } catch (SQLException e) {
			e.printStackTrace();
		 }
		 return list; // service로 리턴한다.(list결과를)
	}
}
