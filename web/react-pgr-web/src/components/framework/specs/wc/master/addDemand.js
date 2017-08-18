var dat = {
  "wc.view": {
    "numCols": 12 / 3,
    "version": "v1",
    "url": "/wcms-connection/connection/_search?acknowledgementNumber={acknowledgementNumber}",
    "useTimestamp": true,
    "tenantIdRequired": true, //Instead of boolean value give json path
    "objectName": "Connection",
    "level": 0,
    "groups": [{
          "label": "wc.create.groups.applicationParticular.title", //Cut short labels by taking initial path from parent
          "name": "applicationParticular", //Follow Title case pattern
          "children": [],
          "multiple": false,
          "fields": [
            {
              "name": "With Property",
              "jsonPath": "Connection.withProperty",
              "label": "",
              "pattern": "",
              "type": "radio",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
  			"values": [{"label":"With Property", "value":true},{"label":"Without Property", "value":false}],
  			"defaultValue":true,
        "showHideFields": [{
               "ifValue": false,
               "hide": [{
                "name": "applicantDetails",
                "isGroup": true,
                "isField": false
               }],
               "show": [{
                "name": "NoOfFlats",
                "isGroup": false,
                "isField": true
              },
              {
               "name": "applicantDetailsWithProp",
               "isGroup": true,
               "isField": false
             }]
              }]
            }
          ]
        },
        {
        "label": "wc.create.groups.applicantDetails.title", //Cut short labels by taking initial path from parent
        "name": "applicantDetails", //Follow Title case pattern
        "children": [],
        "multiple": false,
        "fields": [{
            "name": "acknowledgementNumber",
            "jsonPath": "Connection[0].acknowledgementNumber",
            "label": "wc.create.groups.applicantDetails.acknowledgementNumber",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "AssessmentNumber",
            "jsonPath": "Connection[0].property.propertyidentifier",
            "label": "wc.create.groups.applicantDetails.propertyIdentifier",
            "pattern": "",
            "type": "textSearch",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          // {
          // 	"name": "AssessmentNumber",
          // 	"jsonPath": "Connection.property.propertyIdentifier",
          // 	"label": "wc.create.groups.applicantDetails.propertyIdentifier",
          // 	"pattern": "",
          // 	"type": "number",
          // 	"isRequired": true,
          // 	"isDisabled": false,
          // 	"autoCompleteUrl": "",
          // 	"autoFillFields": {
          // 		"NameOfApplicant": "",
          // 		"MobileNumber": "",
          // 		"Email": "",
          // 		"AadharNumber": ""
          // 	},
          // 	"requiredErrMsg": "",//Remove required messages
          // 	"patternErrMsg": ""
          // },
          {
            "name": "NameOfApplicant",
            "jsonPath": "Connection[0].property.nameOfApplicant",
            "label": "wc.create.groups.applicantDetails.nameOfApplicant",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "MobileNumber",
            "jsonPath": "Connection[0].property.mobileNumber",
            "label": "wc.create.groups.applicantDetails.mobileNumber",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Email",
            "jsonPath": "Connection[0].property.email",
            "label": "wc.create.groups.applicantDetails.email",
            "pattern": "",
            "type": "email",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "isHidden": false,
            "defaultValue": ""
          },
          {
            "name": "AadharNumber",
            "jsonPath": "Connection[0].property.adharNumber",
            "label": "wc.create.groups.applicantDetails.adharNumber",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Locality",
            "jsonPath": "Connection[0].property.locality",
            "label": "wc.create.groups.applicantDetails.locality",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Address",
            "jsonPath": "Connection[0].property.address",
            "label": "wc.create.groups.applicantDetails.address",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Zone",
            "jsonPath": "Connection[0].property.zone",
            "label": "wc.create.groups.applicantDetails.zone",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "adharNumber",
            "jsonPath": "Connection[0].property.adharNumber",
            "label": "No of floors",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "propertyTaxDue",
            "jsonPath": "Connection[0].property.propertyTaxDue",
            "label": "wc.create.groups.applicantDetails.propertyTaxDue",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
      {
        "label": "wc.create.groups.connectionDetails.title",
        "name": "connectionDetails",
        "multiple": false,
        "fields": [{
            "name": "PropertyType",
            "jsonPath": "Connection[0].property.propertyType",
            "label": "wc.create.groups.connectionDetails.propertyType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/pt-property/property/propertytypes/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "CategoryType",
            "jsonPath": "Connection[0].categoryType",
            "label": "wc.create.groups.connectionDetails.categoryType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "UsageType",
            "jsonPath": "Connection[0].property.usageType",
            "label": "wc.create.groups.connectionDetails.usageType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "hscPipeSizeType",
            "jsonPath": "Connection[0].hscPipeSizeType",
            "label": "wc.create.groups.connectionDetails.hscPipeSizeType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "applicationType",
            "jsonPath": "Connection[0].applicationType",
            "label": "wc.create.groups.connectionDetails.applicationType",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "NEWCONNECTION",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "connectionStatus",
            "jsonPath": "Connection[0].connectionStatus",
            "label": "wc.create.groups.connectionDetails.applicationType",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "INPROGRESS",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "billingType",
            "jsonPath": "Connection[0].billingType",
            "label": "wc.create.groups.connectionDetails.billingType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms-connection/connection/_getbillingtypes?|$..key|$..object",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "ConnectionType",
            "jsonPath": "Connection[0].connectionType",
            "label": "wc.create.groups.connectionDetails.connectionType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms-connection/connection/_getconnectiontypes?|$..key|$..object",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "SourceType",
            "jsonPath": "Connection[0].sourceType",
            "label": "wc.create.groups.connectionDetails.sourceType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/sourcetype/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "supplyType",
            "jsonPath": "Connection[0].supplyType",
            "label": "wc.create.groups.connectionDetails.supplyType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/supplytype/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },

          {
            "name": "waterTreatment",
            "jsonPath": "Connection[0].waterTreatment",
            "label": "wc.create.groups.connectionDetails.waterTreatment",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/wcms/masters/treatmentplant/_search?|$..name|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "sumpCapacity",
            "jsonPath": "Connection[0].sumpCapacity",
            "label": "wc.create.groups.connectionDetails.fields.sumpCapacity",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "numberOfPersons",
            "jsonPath": "Connection[0].numberOfPersons",
            "label": "wc.create.groups.connectionDetails.fields.numberOfPersons",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
      {
        "label": "wc.create.groups.fileDetails.title",
        "name": "Documents",
        "multiple": false,
        "fields": [
          // {
          // 	"name": " ",
          // 	"jsonPath": "Connection.documents[0].fileStoreId",
          // 	"label": "wc.create.groups.fileDetails.fields.PTaxReciept",
          // 	"pattern": "",
          // 	"type": "singleFileUpload",
          // 	"isRequired": true,
          // 	"isDisabled": false,
          // 	"requiredErrMsg": "",
          // 	"patternErrMsg": "",
          // 	"defaultValue": "4567"
          // },
          {
            "name": " ",
            "jsonPath": "Connection.documents[0].fileStoreId",
            "label": "wc.create.groups.fileDetails.fields.PTaxReciept",
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "defaultValue": "4567",
            "isHidden": true
          },
          {
            "name": " ",
            "jsonPath": "Connection.documents[0].document",
            "label": "wc.create.groups.fileDetails.fields.PTaxReciept",
            "pattern": "",
            "isHidden": true,
            "type": "singleFileUpload",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "defaultValue": "1"
          },
          {
            "name": " ",
            "jsonPath": "Connection.documents[0].name",
            "label": "wc.create.groups.fileDetails.fields.PTaxReciept",
            "pattern": "",
            "type": "singleFileUpload",
            "isRequired": true,
            "isHidden": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "defaultValue": "Test"
          },
          {
            "name": " ",
            "jsonPath": "Connection.documents[1]",
            "label": "wc.create.groups.fileDetails.fields.DistributionLineLocationMap",
            "pattern": "",
            "type": "singleFileUpload",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": " ",
            "jsonPath": "Connection.documents[2]",
            "label": "wc.create.groups.fileDetails.fields.WhiteRationCard",
            "pattern": "",
            "type": "singleFileUpload",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": " ",
            "jsonPath": "Connection.documents[3]",
            "label": "wc.create.groups.fileDetails.fields.CourtFeeStamp",
            "pattern": "",
            "type": "singleFileUpload",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
      {
        "label": "wc.create.groups.approvalDetails.title",
        "name": "ApprovalDetails",
        "multiple": false,
        "fields": [{
            "name": "department",
            "jsonPath": "Connection.workflowDetails.department",
            "label": "wc.create.groups.approvalDetails.fields.department",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "url": "/egov-common-masters/departments/_search?tenantId=default|$..id|$..name",
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants": [{
              "name": "Connection.workflowDetails.approver",
              "type": "dropDown",
              "pattern": "/hr-employee/employees/_search?tenantId=default&departmentId={connection.workflowDetails.department}&designationId={connection.workflowDetails.designation}|$..id|$..name"
            }]
          },
          {
            "name": "designation",
            "jsonPath": "Connection.workflowDetails.designation",
            "label": "wc.create.groups.approvalDetails.fields.designation",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-common-workflows/designations/_search?tenantId=default&businessKey=WaterConnection&approvalDepartmentName=&departmentRule=&currentStatus=&additionalRule=&pendingAction=&designation=&amountRule=|$..id|$..name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "depedants": [{
              "jsonPath": "Connection.workflowDetails.approver",
              "type": "dropDown",
              "pattern": "/hr-employee/employees/_search?tenantId=default&departmentId={connection.workflowDetails.department}&designationId={connection.workflowDetails.designation}|$..id|$..name"
            }]
          },
          {
            "name": "assignee",
            "jsonPath": "Connection.workflowDetails.assignee",
            "label": "wc.create.groups.approvalDetails.fields.Assignee",
            "pattern": "",
            "type": "singleValueList",
            "url": "/hr-employee/employees/_search?tenantId=default&departmentId={connection.workflowDetails.department}&designationId={connection.workflowDetails.designation}|$..id|$..name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "comments",
            "jsonPath": "Connection.workflowDetails.comments",
            "label": "wc.create.groups.approvalDetails.fields.comments",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "initiatorPosition",
            "jsonPath": "Connection.workflowDetails.initiatorPosition",
            "label": "wc.create.groups.approvalDetails.fields.comments",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "isHidden": true,
            "defaultValue": "2",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }




        ]
      }
    ]
  }
}

export default dat;
