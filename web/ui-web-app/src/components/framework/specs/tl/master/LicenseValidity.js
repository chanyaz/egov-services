var dat = {
	"tl.create": {
		"numCols": 12/2,
		"url": "/v1/category/_create",
		"tenantIdRequired": true,
		"objectName": "LicenseValidityType",
		"groups": [
			{
				"label": "tl.create.licensevalidity.title",
				"name": "createLicenseCategoryType",
				"fields": [
            {
              "name": "natureofbusiness",
              "jsonPath": "name",
              "label": "tl.create.groups.licensevalidity.natureofbusiness",
              "pattern": "",
              "type": "singleValueList",
              "url": "",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
							"name": "licensecategory",
							"jsonPath": "name",
							"label": "tl.create.groups.licensevalidity.licensecategory",
							"pattern": "",
							"type": "singleValueList",
              "url": "",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
              "name": "basedonfinancialyear",
              "jsonPath": "CategoryType.active",
              "label": "tl.create.groups.licensevalidity.basedonfinancialyear",
              "pattern": "",
              "type": "checkbox",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
						{
							"name": "days",
							"jsonPath": "categories.name",
							"label": "tl.create.groups.licensevalidity.days",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "weeks",
							"jsonPath": "categories.code",
							"label": "tl.create.groups.licensevalidity.weeks",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
							"name": "months",
							"jsonPath": "categories.name",
							"label": "tl.create.groups.licensevalidity.months",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "years",
							"jsonPath": "categories.code",
							"label": "tl.create.groups.licensevalidity.years",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},

  "tl.search": {
		"numCols": 12/2,
		"url": "/v1/category/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "tl.search.groups.licensevalidity.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "natureofbusiness",
							"jsonPath": "name",
							"label": "tl.search.groups.licensevalidity.natureofbusiness",
							"pattern": "",
							"type": "singleValueList",
              "url": "",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
            {
							"name": "licensecategory",
							"jsonPath": "name",
							"label": "tl.search.groups.licensevalidity.licensecategory",
							"pattern": "",
							"type": "singleValueList",
              "url": "",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		],
		"result": {
			"header": [{label: "wc.create.code"},{label: "wc.search.result.categoryType"}, {label: "wc.search.result.description"}, {label: "wc.search.result.active"}],
			"values": ["code","name", "description", "active"],
			"resultPath": "CategoryTypes",
			"rowClickUrlUpdate": "/update/wc/categoryType/{id}",
			"rowClickUrlView": "/view/wc/categoryType/{id}"
			}
	},
  "tl.view": {
		"numCols": 12/2,
		"url": "/v1/category/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "tl.view.groups.licensevalidity.title",
				"name": "viewCategoryType",
				"fields": [
          {
            "name": "natureofbusiness",
            "jsonPath": "name",
            "label": "tl.view.groups.licensevalidity.natureofbusiness",
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "licensecategory",
            "jsonPath": "name",
            "label": "tl.view.groups.licensevalidity.licensecategory",
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "basedonfinancialyear",
            "jsonPath": "name",
            "label": "tl.view.groups.licensevalidity.basedonfinancialyear",
            "pattern": "",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			}
		]
	},

  "tl.update": {
		"numCols": 12/2,
		"searchUrl": "/v1/category/_search",
		"url":"/v1/category/_update",
		"isResponseArray":true,
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "CategoryType",
		"groups": [
			{
				"label": "tl.update.groups.licensevalidity.title",
				"name": "createCategoryType",
				"fields": [
          {
            "name": "natureofbusiness",
            "jsonPath": "name",
            "label": "tl.update.groups.licensevalidity.natureofbusiness",
            "pattern": "",
            "type": "singleValueList",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "licensecategory",
            "jsonPath": "name",
            "label": "tl.update.groups.licensevalidity.licensecategory",
            "pattern": "",
            "type": "singleValueList",
            "url": "",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "basedonfinancialyear",
            "jsonPath": "CategoryType.active",
            "label": "tl.update.groups.licensedocumenttype.basedonfinancialyear",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			}
		]
	}
}
export default dat;
