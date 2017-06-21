package org.egov.demand.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.egov.common.contract.request.RequestInfo;
import org.egov.demand.model.TaxHeadMaster;
import org.egov.demand.model.TaxHeadMasterCriteria;
import org.egov.demand.model.TaxPeriod;
import org.egov.demand.repository.builder.TaxHeadMasterQueryBuilder;
import org.egov.demand.repository.rowmapper.TaxHeadMasterRowMapper;
import org.egov.demand.web.contract.TaxHeadMasterRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Repository
public class TaxHeadMasterRepository {

	private static final Logger logger = LoggerFactory.getLogger(TaxHeadMasterRepository.class);
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private TaxHeadMasterQueryBuilder taxHeadMasterQueryBuilder;
	
	@Autowired
	private TaxHeadMasterRowMapper taxHeadMasterRowMapper;
	
	public List<TaxHeadMaster> findForCriteria(TaxHeadMasterCriteria taxHeadMasterCriteria) {

		List<Object> preparedStatementValues = new ArrayList<>();
		String queryStr = taxHeadMasterQueryBuilder.getQuery(taxHeadMasterCriteria, preparedStatementValues);
		List<TaxHeadMaster> taxHeadMaster = null;
		try {
			logger.info("queryStr::" + queryStr + "preparedStatementValues::" + preparedStatementValues.toString());
			taxHeadMaster = jdbcTemplate.query(queryStr, preparedStatementValues.toArray(), taxHeadMasterRowMapper);
			logger.info("TaxHeadRepository::" + taxHeadMaster);
		} catch (Exception ex) {
			logger.info("the exception from findforcriteria : " + ex);
		}
		return taxHeadMaster;
	}
	
	public Integer getNextTaxHeadMasterId() {
		String query = "SELECT nextval('seq_egBillingServices_taxHeadMaster')";
		Integer result = jdbcTemplate.queryForObject(query, Integer.class);
		return result;
	}
	
	public String getTaxHeadMasterCode() {
		String query = "SELECT nextval('seq_egBillingServices_taxHeadMastercode')";
		Integer result = jdbcTemplate.queryForObject(query, Integer.class);
		logger.info("result:" + result);
		StringBuilder code = null;
		try {
			code = new StringBuilder(String.format("%06d", result));
		} catch (Exception ex) {
			logger.info("the exception from seq number gen for code : " + ex);
		}
		return code.toString();
	}
	public List<TaxHeadMaster> create(TaxHeadMasterRequest taxHeadMasterRequest) {
		List<TaxHeadMaster> taxHeads = taxHeadMasterRequest.getTaxHeadMasters();
		
		if(taxHeads!=null){
			String query = taxHeadMasterQueryBuilder.getInsertQuery();
			List<Object[]> taxHeadsBatchArgs = new ArrayList<>();
			int taxHeadsCount=taxHeads.size();
			RequestInfo requestInfo = taxHeadMasterRequest.getRequestInfo();
			for (int i = 0; i < taxHeadsCount; i++) {
				Object[] demandRecord = { taxHeads.get(i).getId(),taxHeads.get(i).getTenantId(),taxHeads.get(i).getCategory().toString(),
						taxHeads.get(i).getService(),taxHeads.get(i).getName(),taxHeads.get(i).getCode(),taxHeads.get(i).getGlCode()
						,taxHeads.get(i).getIsDebit(),taxHeads.get(i).getIsActualDemand(),
						requestInfo.getUserInfo().getId(),  new java.util.Date().getTime(),requestInfo.getUserInfo().getId(),  new java.util.Date().getTime(),
						taxHeads.get(i).getTaxPeriod().getId()};
				taxHeadsBatchArgs.add(demandRecord);
			}

			try {
				jdbcTemplate.batchUpdate(query, taxHeadsBatchArgs);
			} catch (DataAccessException ex) {
				ex.printStackTrace();
				throw new RuntimeException(ex.getMessage());
			}
		}
		
		return taxHeads;
	}
	
	public List<TaxHeadMaster> update(TaxHeadMasterRequest taxHeadMasterRequest) {
		List<TaxHeadMaster> taxHeads = taxHeadMasterRequest.getTaxHeadMasters();
		
		if(taxHeads!=null){
			String query = taxHeadMasterQueryBuilder.getUpdateQuery();
		
			List<Object[]> taxHeadsBatchArgs = new ArrayList<>();
			int taxHeadsCount=taxHeads.size();
			RequestInfo requestInfo = taxHeadMasterRequest.getRequestInfo();
			
			for (int i = 0; i < taxHeadsCount; i++) {
				Object[] demandRecord = { taxHeads.get(i).getCategory().toString(),
						taxHeads.get(i).getService(),taxHeads.get(i).getName(),taxHeads.get(i).getCode(),
						taxHeads.get(i).getGlCode(),taxHeads.get(i).getIsDebit(),taxHeads.get(i).getIsActualDemand(),
						requestInfo.getUserInfo().getId(),taxHeads.get(i).getTaxPeriod().getId() ,
						new java.util.Date().getTime(),taxHeads.get(i).getTenantId()};
				taxHeadsBatchArgs.add(demandRecord);
			}

			try {
				jdbcTemplate.batchUpdate(query, taxHeadsBatchArgs);
			} catch (DataAccessException ex) {
				ex.printStackTrace();
				throw new RuntimeException(ex.getMessage());
			}
			
		}
		return taxHeads;
	}
	
	
	
	
	
}
