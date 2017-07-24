package org.egov.pgrrest.common.persistence.entity;

import lombok.*;
import org.egov.pgrrest.common.domain.model.ServiceStatus;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "attribute_action_definition")
public class AttributeActionsDefinition {

    @EmbeddedId
    private AttributeActionsDefinitionKey id;

    public String getAttributeCode() {
        return id.getAttributeCode();
    }

    public org.egov.pgrrest.common.domain.model.AttributeActionsDefinition toDomain() {
        final ServiceStatus serviceStatus = ServiceStatus.parse(id.getCode());
        return new org.egov.pgrrest.common.domain.model.AttributeActionsDefinition(serviceStatus);
    }
}
