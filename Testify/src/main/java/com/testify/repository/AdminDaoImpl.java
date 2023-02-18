package com.testify.repository;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;
import com.testify.domain.Admin;

@Repository
@Transactional
public class AdminDaoImpl implements AdminDao{
	@PersistenceContext // DI spring container injects EntityManager obj
	private EntityManager em;
	
	public List<Admin> getAllAdmins() {
		// TODO Auto-generated method stub
		return em.createQuery("select a from Admin a",Admin.class).getResultList();
	}
	
	public void addNewAdmin(Admin c) {
		em.persist(c);
	}
	
	@Override
	public boolean login(Admin admin) {
		Admin a = em.find(Admin.class, admin.getAdminEmailId());
		if(admin.getAdminEmailId().equals(a.getAdminEmailId()) || admin.getAdminPassword().equals(a.getAdminPassword()))
			return true;
		else
			return false;
	}
	
}