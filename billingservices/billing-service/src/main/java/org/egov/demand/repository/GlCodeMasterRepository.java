package org.egov.demand.repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.egov.common.contract.request.RequestInfo;
import org.egov.demand.model.GlCodeMaster;
import org.egov.demand.model.GlCodeMasterCriteria;
import org.egov.demand.model.TaxHeadMaster;
import org.egov.demand.repository.querybuilder.GlCodeMasterQueryBuilder;
import org.egov.demand.repository.rowmapper.GlCodeMasterRowMapper;
import org.egov.demand.web.contract.GlCodeMasterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j

public class GlCodeMasterRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private GlCodeMasterQueryBuilder glCodeMasterQueryBuilder;
	
	@Autowired
	private GlCodeMasterRowMapper glCodeMasterRowMapper;
	
	
	public List<GlCodeMaster> findForCriteria(GlCodeMasterCriteria glCodeMasterCriteria) {

		List<Object> preparedStatementValues = new ArrayList<>();
		String queryStr = glCodeMasterQueryBuilder.getQuery(glCodeMasterCriteria, preparedStatementValues);
		List<GlCodeMaster> glCodeMaster = null;
		try {
			log.info("queryStr::" + queryStr + "preparedStatementValues::" + preparedStatementValues.toString());
			glCodeMaster = jdbcTemplate.query(queryStr, preparedStatementValues.toArray(), glCodeMasterRowMapper);
			log.info("GlCodeMasterRepository::" + glCodeMaster);
		} catch (Exception ex) {
			log.info("the exception from findforcriteria : " + ex);
		}
		return glCodeMaster;
	}

	@Transactional
	public List<GlCodeMaster> create(GlCodeMasterRequest glCodeMasterRequest){
		
		RequestInfo requestInfo = glCodeMasterRequest.getRequestInfo();
		List<GlCodeMaster> glCodeMasters = glCodeMasterRequest.getGlCodeMasters();
		
		log.debug("create requestInfo:"+ requestInfo);
		log.debug("create glCodeMasters:"+ glCodeMasters);
		
		
		jdbcTemplate.batchUpdate(glCodeMasterQueryBuilder.getInsertQuery(), new BatchPreparedStatementSetter() {
			
			@Override
			public void setValues(PreparedStatement ps, int index) throws SQLException {
				GlCodeMaster glCodeMaster = glCodeMasters.get(index);


				ps.setString(1, glCodeMaster.getId());
				ps.setString(2, glCodeMaster.getTenantId());
				ps.setString(3, glCodeMaster.getTaxHead());
				ps.setString(4, glCodeMaster.getService());
				ps.setObject(5, glCodeMaster.getFromDate());
				ps.setObject(6, glCodeMaster.getToDate());
				ps.setString(7, requestInfo.getUserInfo().getId().toString());
				ps.setLong(8, new Date().getTime());
				ps.setString(9, requestInfo.getUserInfo().getId().toString());
				ps.setLong(10, new Date().getTime());
				ps.setString(11, glCodeMaster.getGlCode());
			}
			
			@Override
			public int getBatchSize() {
				return glCodeMasters.size();
			}
		});
		return glCodeMasters;
	}
	

}
