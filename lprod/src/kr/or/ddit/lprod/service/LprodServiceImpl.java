package kr.or.ddit.lprod.service;

import java.util.List;

import kr.or.ddit.lprod.dao.ILprodDao;
import kr.or.ddit.lprod.dao.LprodDaoImpl;
import kr.or.ddit.lprod.vo.LprodVO;

/*
 * 
 * dao 객체 얻어오기 - 생성자에서 얻어오면 된다 
 * dao 메소드 호출하기 - 결과값 리턴 받기
 * servlet으로 리턴한다 
 * 
 * servlet에서 사용할 자신의 객체를 생성한다
 * 자신의 객체를 리턴하는 getService() 메소드 정의 
 * 
 * 
 * 
 */




public class LprodServiceImpl implements ILprodService {

	private ILprodDao dao;
	private static ILprodService service;
	
	private LprodServiceImpl(){
		
		dao = LprodDaoImpl.getDao();
		
	}
	
	public static ILprodService getService(){
		if(service == null) service = new LprodServiceImpl();
		
		return service;
		
	}
	
	
	
	@Override
	public List<LprodVO> selectLprod() {
		List<LprodVO> list =null;

		
		//dao 메서드 호출하여 결과값 받기
		list = dao.selectLprod();
		
		return list; //servlet으로 리턴 
	}

}
