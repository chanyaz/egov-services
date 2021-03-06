package org.egov.lams.model;

import java.util.Set;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class NoticeCriteria {
	
	private Set<Long> id; 
	private String tenantId;
	private String noticeNo;
	private String agreementNumber;
	private String acknowledgementNumber;
	private String noticeType;
	private Long assetNo;
	private Long assetCategory;
	private Long revenueWard;
	private Long offset;
	private Long size;

}
