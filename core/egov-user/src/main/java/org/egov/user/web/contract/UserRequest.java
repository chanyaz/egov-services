package org.egov.user.web.contract;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.egov.user.domain.model.Address;
import org.egov.user.domain.model.Role;
import org.egov.user.domain.model.User;
import org.egov.user.domain.model.enums.*;

import java.util.*;
import java.util.stream.Collectors;

import static org.apache.commons.lang3.StringUtils.isNotBlank;
import static org.apache.commons.lang3.StringUtils.trim;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserRequest {

    private Long id;
    private String userName;
    private String salutation;
    private String name;
    private String gender;
    private String mobileNumber;
    private String emailId;
    private String altContactNumber;
    private String pan;
    private String aadhaarNumber;
    private String permanentAddress;
    private String permanentCity;
    private String permanentPinCode;
    private String correspondenceAddress;
    private String correspondenceCity;
    private String correspondencePinCode;
    private Boolean active;
    private String locale;
    private UserType type;
    private Boolean accountLocked;
    private String fatherOrHusbandName;
    private String signature;
    private String bloodGroup;
    private String photo;
    private String identificationMark;
    private Long createdBy;
    private String password;
    private String otpReference;
    private Long lastModifiedBy;
    private String tenantId;
    private List<RoleRequest> roles;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
    private Date createdDate;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
    private Date lastModifiedDate;
    @JsonFormat(pattern = "MM/dd/YYYY")
    private Date dob;
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "IST")
    private Date pwdExpiryDate;

    public UserRequest(User user) {

        this.id = user.getId();
        this.userName = user.getUsername();
        this.salutation = user.getSalutation();
        this.name = user.getName();
        this.gender = user.getGender() != null ? user.getGender().toString() : null;
        this.mobileNumber = user.getMobileNumber();
        this.emailId = user.getEmailId();
        this.altContactNumber = user.getAltContactNumber();
        this.pan = user.getPan();
        this.aadhaarNumber = user.getAadhaarNumber();
        this.active = user.getActive();
        this.dob = user.getDob();
        this.pwdExpiryDate = user.getPwdExpiryDate() != null ? user.getPwdExpiryDate() : null;
        this.locale = user.getLocale();
        this.type = user.getType();
        this.accountLocked = user.getAccountLocked();
        this.signature = user.getSignature();
        this.bloodGroup = user.getBloodGroup() != null ? user.getBloodGroup().getValue() : null;
        this.photo = user.getPhoto();
        this.identificationMark = user.getIdentificationMark();
        this.createdBy = user.getCreatedBy();
        this.createdDate = user.getCreatedDate();
        this.lastModifiedBy = user.getLastModifiedBy();
        this.lastModifiedDate = user.getLastModifiedDate();

        this.roles = convertRoleEntitiesToContract(user.getRoles());

        if (isGuardianRelationFatherOrHusband(user.getGuardianRelation())) {
            this.fatherOrHusbandName = user.getGuardian();
        }

        convertAndSetAddressesToContract(user.getAddress());
    }

    private void convertAndSetAddressesToContract(List<Address> addresses) {
        if (addresses == null) return;

        Optional<Address> permanentAddress =
                getAddressOfType(addresses, AddressType.PERMANENT);
        Optional<Address> correspondenceAddress = getAddressOfType(addresses, AddressType.CORRESPONDENCE);
        permanentAddress.ifPresent(address -> {
            this.permanentAddress = convertAddressEntityToString(address);
            this.permanentCity = address.getCityTownVillage();
            this.permanentPinCode = address.getPinCode();
        });

        correspondenceAddress.ifPresent(address -> {
            this.setCorrespondenceAddress(convertAddressEntityToString(address));
            this.setCorrespondenceCity(address.getCityTownVillage());
            this.setCorrespondencePinCode(address.getPinCode());
        });
    }

    private Optional<Address> getAddressOfType(List<Address> addressList, AddressType addressType) {
        return addressList.stream()
                .filter(address -> address.getType().equals(addressType))
                .findFirst();
    }

    private String convertAddressEntityToString(Address address) {
        final String ADDRESS_SEPARATOR = "%s, ";
        final String PIN_CODE_FORMATTER = "PIN: %s";

        Formatter formatter = new Formatter();
        if (isNotBlank(address.getHouseNoBldgApt()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getHouseNoBldgApt()));
        if (isNotBlank(address.getAreaLocalitySector()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getAreaLocalitySector()));
        if (isNotBlank(address.getStreetRoadLine()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getStreetRoadLine()));
        if (isNotBlank(address.getLandmark()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getLandmark()));
        if (isNotBlank(address.getCityTownVillage()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getCityTownVillage()));
        if (isNotBlank(address.getPostOffice()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getPostOffice()));
        if (isNotBlank(address.getSubDistrict()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getSubDistrict()));
        if (isNotBlank(address.getDistrict()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getDistrict()));
        if (isNotBlank(address.getState()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getState()));
        if (isNotBlank(address.getCountry()))
            formatter.format(ADDRESS_SEPARATOR, trim(address.getCountry()));
        if (isNotBlank(address.getPinCode()))
            formatter.format(PIN_CODE_FORMATTER, trim(address.getPinCode()));

        return formatter.toString();
    }

    private List<RoleRequest> convertRoleEntitiesToContract(List<Role> domainRoles) {
        if (domainRoles == null) return new ArrayList<>();
        return domainRoles.stream().map(RoleRequest::new).collect(Collectors.toList());
    }

    private boolean isGuardianRelationFatherOrHusband(GuardianRelation guardianRelation) {
        return guardianRelation != null &&
                (guardianRelation.equals(GuardianRelation.Father)
                        || guardianRelation.equals(GuardianRelation.Husband));
    }

    User toDomain() {
        Role role = Role.builder()
                .name(String.valueOf(type)).build();
        return forDomain()
                .roles(Collections.singletonList(role))
                .build();
    }
    
    User toUpdateDomain() {
        return forDomain()
                .build();
    }

    private User.UserBuilder forDomain() {
        return User.builder()
                .id(this.id)
                .name(this.name)
                .username(this.userName)
                .salutation(this.salutation)
                .mobileNumber(this.mobileNumber)
                .emailId(this.emailId)
                .altContactNumber(this.altContactNumber)
                .pan(this.pan)
                .aadhaarNumber(this.aadhaarNumber)
                .active(this.active)
                .dob(this.dob)
                .pwdExpiryDate(this.pwdExpiryDate)
                .locale(this.locale)
                .type(this.type)
                .accountLocked(this.accountLocked)
                .signature(this.signature)
                .photo(this.photo)
                .identificationMark(this.identificationMark)
                .gender(this.gender != null ? Gender.valueOf(this.gender.toUpperCase()) : null)
                .bloodGroup(this.bloodGroup != null ? BloodGroup.valueOf(this.bloodGroup.toUpperCase()) : null)
                .lastModifiedDate(new Date())
                .createdDate(new Date())
                .otpReference(this.otpReference)
                .tenantId(this.tenantId)
                .password(this.password)
                .roles(toDomainRoles());
    }

    private List<Role> toDomainRoles() {
        return this.roles != null
                ? this.roles.stream().map(RoleRequest::toDomain).collect(Collectors.toList())
                : null;
    }
}
