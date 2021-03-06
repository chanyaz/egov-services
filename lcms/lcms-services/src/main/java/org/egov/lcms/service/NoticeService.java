package org.egov.lcms.service;

import java.util.List;
import org.egov.common.contract.request.RequestInfo;
import org.egov.lcms.config.PropertiesManager;
import org.egov.lcms.factory.ResponseFactory;
import org.egov.lcms.models.Notice;
import org.egov.lcms.models.NoticeRequest;
import org.egov.lcms.models.NoticeResponse;
import org.egov.lcms.models.NoticeSearchCriteria;
import org.egov.lcms.models.NoticeSearchResponse;
import org.egov.lcms.repository.NoticeRepository;
import org.egov.lcms.util.UniqueCodeGeneration;
import org.egov.tracer.kafka.LogAwareKafkaTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

/** 
* 
* Author		Date			eGov-JIRA ticket	Commit message
* ---------------------------------------------------------------------------
* Yosadhara		31st Oct 2017						Initial commit for Notice service 
* Prasad		08th Nov 2017						Added isSummon value for getUniqueCode method calling
*/
@Service
public class NoticeService {

	@Autowired
	ResponseFactory responseInfoFactory;

	@Autowired
	PropertiesManager propertiesManager;

	@Autowired
	UniqueCodeGeneration uniqueCodeGeneration;

	@Autowired
	NoticeRepository noticeRepository;

	@Autowired
	private LogAwareKafkaTemplate<String, Object> kafkaTemplate;
	
	/**
	 * This method is to create Notice
	 * 
	 * @param noticeRequest
	 * @return NoticeResponse
	 * @throws Exception
	 */
	public NoticeResponse createNotice(NoticeRequest noticeRequest) throws Exception {

		String code = uniqueCodeGeneration.getUniqueCode(noticeRequest.getNotice().getTenantId(), noticeRequest.getRequestInfo(),
				propertiesManager.getNoticeUlbFormat(), propertiesManager.getNoticeUlbName(), Boolean.FALSE, null,Boolean.FALSE);
		noticeRequest.getNotice().setCode(code);
		kafkaTemplate.send(propertiesManager.getCreateNoticeTopic(), noticeRequest);

		return new NoticeResponse(
				responseInfoFactory.getResponseInfo(noticeRequest.getRequestInfo(), HttpStatus.CREATED),
				noticeRequest.getNotice());
	}
	
	/**
	 * This method is to update Notice
	 * 
	 * @param noticeRequest
	 * @return NoticeResponse
	 * @throws Exception
	 */
	public NoticeResponse updateNotice(NoticeRequest noticeRequest) throws Exception {

		kafkaTemplate.send(propertiesManager.getUpdateNoticeTopic(), noticeRequest);
		return new NoticeResponse(
				responseInfoFactory.getResponseInfo(noticeRequest.getRequestInfo(), HttpStatus.CREATED),
				noticeRequest.getNotice());
	}
	
	/**
	 * This method is to search Notice based on Notice search criterias
	 * 
	 * @param noticeSearchCriteria
	 * @param requestInfo
	 * @return
	 */
	public NoticeSearchResponse searchNotice(NoticeSearchCriteria noticeSearchCriteria, RequestInfo requestInfo) {
		List<Notice> notices = noticeRepository.search(noticeSearchCriteria);
		return new NoticeSearchResponse(responseInfoFactory.getResponseInfo(requestInfo, HttpStatus.CREATED), notices);
	}
}
