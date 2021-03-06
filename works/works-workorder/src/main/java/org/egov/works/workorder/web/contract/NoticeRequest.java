package org.egov.works.workorder.web.contract;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Contract class to send response. Array of Notice items are used in case of search results, also multiple  Notice item is used for create and update
 */
@ApiModel(description = "Contract class to send response. Array of Notice items are used in case of search results, also multiple  Notice item is used for create and update")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-11-30T11:45:24.744Z")

public class NoticeRequest {
    @JsonProperty("RequestInfo")
    private RequestInfo requestInfo = null;

    @JsonProperty("notices")
    private List<Notice> notices = null;

    public NoticeRequest requestInfo(RequestInfo requestInfo) {
        this.requestInfo = requestInfo;
        return this;
    }

    /**
     * Get requestInfo
     *
     * @return requestInfo
     **/
    @ApiModelProperty(value = "")

    @Valid

    public RequestInfo getRequestInfo() {
        return requestInfo;
    }

    public void setRequestInfo(RequestInfo requestInfo) {
        this.requestInfo = requestInfo;
    }

    public NoticeRequest notices(List<Notice> notices) {
        this.notices = notices;
        return this;
    }

    public NoticeRequest addNoticesItem(Notice noticesItem) {
        if (this.notices == null) {
            this.notices = new ArrayList<Notice>();
        }
        this.notices.add(noticesItem);
        return this;
    }

    /**
     * Used for create and update only
     *
     * @return notices
     **/
    @ApiModelProperty(value = "Used for create and update only")

    @Valid

    public List<Notice> getNotices() {
        return notices;
    }

    public void setNotices(List<Notice> notices) {
        this.notices = notices;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        NoticeRequest noticeRequest = (NoticeRequest) o;
        return Objects.equals(this.requestInfo, noticeRequest.requestInfo) &&
                Objects.equals(this.notices, noticeRequest.notices);
    }

    @Override
    public int hashCode() {
        return Objects.hash(requestInfo, notices);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class NoticeRequest {\n");

        sb.append("    requestInfo: ").append(toIndentedString(requestInfo)).append("\n");
        sb.append("    notices: ").append(toIndentedString(notices)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString(Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}

