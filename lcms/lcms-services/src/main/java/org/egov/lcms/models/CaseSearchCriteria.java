package org.egov.lcms.models;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @author Prasad
 *	This object holds information about the case search criteria
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CaseSearchCriteria {

	@NotNull
	private String tenantId;

	private Integer pageSize;

	private Integer pageNumber;

	private String sort;

	private String[] code;

	private String summonReferenceNo;

	private String caseReferenceNo;

	private String caseStatus;

	private String caseType;

	private String departmentName;

	private String advocateName;

	private String caseCategory;

	private Long fromDate;

	private Long toDate;

	private String caseNo;

	private String searchResultLevel;

	private String entryType;
}
