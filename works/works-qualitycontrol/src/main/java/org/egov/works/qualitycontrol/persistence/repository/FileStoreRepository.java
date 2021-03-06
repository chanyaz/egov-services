package org.egov.works.qualitycontrol.persistence.repository;

import lombok.extern.slf4j.Slf4j;
import org.egov.works.qualitycontrol.web.contract.FileStoreResponse;
import org.egov.works.qualitycontrol.web.contract.RequestInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class FileStoreRepository {

    @Autowired
    private RestTemplate restTemplate;

    private String url;

    public FileStoreRepository(final RestTemplate restTemplate,
                               @Value("${egov.filestore.hostname}") final String fileStoreHostName,
                               @Value("${egov.filestore.uri}") final String url) {
        this.restTemplate = restTemplate;
        this.url = fileStoreHostName + url;
    }

    public boolean searchFileStore(final String tenantId, final String fileStoreId, final RequestInfo requestInfo) {
        try {
            restTemplate.getForObject(url, FileStoreResponse.class, fileStoreId, tenantId);
        } catch (Exception e) {
            log.error("Error while validating filestore id", e);
            return false;
        }
        return true;
    }
}
