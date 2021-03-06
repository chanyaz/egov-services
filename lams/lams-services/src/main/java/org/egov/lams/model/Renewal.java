package org.egov.lams.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Renewal {

	@JsonProperty("renewalOrderNumber")
	private String renewalOrderNumber;

	@JsonFormat(pattern="dd/MM/yyyy")
	@JsonProperty("renewalOrderDate")
	private Date renewalOrderDate;

	@JsonProperty("reasonForRenewal")
	private String reasonForRenewal;
}
