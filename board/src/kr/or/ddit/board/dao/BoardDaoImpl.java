package kr.or.ddit.board.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import com.ibatis.sqlmap.client.SqlMapClient;
import kr.or.ddit.board.vo.BoardVO;
import kr.or.ddit.ibatis.config.SqlMapClientFactory;

/*
 * SqlMapClient 객체 얻어오기 - 생성자 
 * 자신의 객체를 생성하고 리턴 하는 메소드 - getDao()  getInstance()
 * 
 */
public class BoardDaoImpl implements IBoardDao {
  
	private SqlMapClient  client;
	private static IBoardDao  dao ;
	
	//생성자
	private BoardDaoImpl(){
		client = SqlMapClientFactory.getClient();
	}
	
	public static IBoardDao getDao(){
		if(dao == null)  dao = new BoardDaoImpl();
		
		return dao;
	}
	
	
	@Override
	public List<BoardVO> selectAll() throws SQLException {
		return client.queryForList("board.selectAll");
	}

	@Override
	public List<BoardVO> selectByPage(Map<String, Integer> map) throws SQLException {
		return client.queryForList("board.selectByPage", map);
	}

	@Override
	public int listCount() throws SQLException {
		return (Integer) client.queryForObject("board.listCount");
	}

	@Override
	public int insertBoard(BoardVO vo) throws SQLException {
		return (int) client.insert("board.insertBoard", vo);
	}

	@Override
	public int updateBoard(BoardVO vo) throws SQLException {
		return client.update("board.updateBoard", vo);
	}

	@Override
	public int deleteBoard(int num) throws SQLException {
		return client.delete("board.deleteBoard", num);
	}

}
