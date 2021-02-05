package kr.or.ddit.prod.service;

import java.util.List;

import kr.or.ddit.prod.dao.IProdDao;
import kr.or.ddit.prod.dao.ProdDaoImpl;
import kr.or.ddit.prod.vo.ProdVO;

public class ProdServiceImpl implements IProdService {
	private IProdDao dao;
	private static ProdServiceImpl service;
	
	private ProdServiceImpl(){
		dao = ProdDaoImpl.getDao();
	}
	
	public static IProdService getService(){
		if(service==null) service = new ProdServiceImpl();
		return service;
	}
	
	@Override
	public List<ProdVO> selectAllProd() {
		List<ProdVO> list = null;
		
		list = dao.selectAllProd();
		
		return list;
	}
}
