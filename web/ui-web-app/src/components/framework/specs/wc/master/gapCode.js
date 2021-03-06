var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/gapcodes/_create",
		"tenantIdRequired": true,
		"idJsonPath": "Gapcodes[0].id",
		"useTimestamp": true,
		"objectName": "Gapcodes",
		"groups": [
			{
				"label": "wc.create.gapCode.title",
				"name": "meterWaterRateCreate",
				"fields": [
          {
            "name": "name",
            "jsonPath": "Gapcodes[0].name",
            "label": "wc.create.gapCode",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "Length minimum is 3 and maximum is 100"
          },
          {
            "name": "description",
            "jsonPath": "Gapcodes[0].description",
            "label": "wc.create.description",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "Length is more than 250"
          },
          {
            "name": "Active",
            "jsonPath": "Gapcodes[0].active",
            "label": "wc.create.active",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue":true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			},
      {
				"label": "wc.create.Formula",
				"name": "Formula",
				"fields": [
          {
            "name": "Logic",
            "jsonPath": "Gapcodes[0].logic",
            "label": "wc.create.groups.fields.logic",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/logic/_search?&active=true|$..key|$..object",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "NoOfMonths",
            "jsonPath": "Gapcodes[0].noOfMonths",
            "label": "wc.create.groups.fields.noOfMonths",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/lastmonths/_search?&active=true|$..key|$..object",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Outside ULB",
            "jsonPath": "Gapcodes[0].outSideUlb",
            "label": "wc.create.groups.connectionDetails.fields.outSide",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "defaultValue":false
          }
				]
			}
		]
	},
	"wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/gapcodes/_search",
		"tenantIdRequired": true,

		"useTimestamp": true,
		"objectName": "Gapcodes",
		"groups": [
			{
				"label": "wc.search.gapCode.title",
				"name": "SearchGapCode",
				"fields": [
          {
            "name": "GapCode",
            "jsonPath": "name",
            "label": "wc.create.gapCode",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/_search?&active=true|$..name|$..name",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			}
		],
		"result": {
			"header": [{label: "employee.Employee.fields.code"},{label: "wc.create.Formula"}, {label: "wc.create.description"}],
			"values": ["code", "name","description"],
			"resultPath": "Gapcodes",
			"rowClickUrlUpdate": "/update/wc/gapCode/{id}",
			"rowClickUrlView": "/view/wc/gapCode/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/gapcodes/_search?ids={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "Gapcodes",
		"groups": [
			{
				"label": "wc.view.gapCode.title",
				"name": "meterWaterRateCreate",
				"fields": [
          {
            "name": "name",
            "jsonPath": "Gapcodes[0].name",
            "label": "wc.create.gapCode",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "Length minimum is 3 and maximum is 100"
          },
          {
            "name": "description",
            "jsonPath": "Gapcodes[0].description",
            "label": "wc.create.description",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "Length is more than 250"
          },
          {
            "name": "Active",
            "jsonPath": "Gapcodes[0].active",
            "label": "wc.create.active",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue":true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			},
      {
				"label": "wc.create.Formula",
				"name": "Formula",
				"fields": [
          {
            "name": "Logic",
            "jsonPath": "Gapcodes[0].logic",
            "label": "wc.create.groups.fields.logic",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/logic/_search?&active=true|$..key|$..object",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "NoOfMonths",
            "jsonPath": "Gapcodes[0].noOfMonths",
            "label": "wc.create.groups.fields.noOfMonths",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/lastmonths/_search?&active=true|$..key|$..object",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Outside ULB",
            "jsonPath": "Gapcodes[0].outSideUlb",
            "label": "wc.create.groups.connectionDetails.fields.outSide",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "defaultValue":true
          }
				]
			}
		]
	},
	"wc.update" : {
		"numCols": 12/3,
		"searchUrl": "/wcms/masters/gapcodes/_search?ids={id}",
    "url":"/wcms/masters/gapcodes/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "Gapcodes",
		"groups": [
			{
				"label": "wc.update.gapCode.title",
				"name": "meterWaterRateCreate",
				"fields": [
          {
            "name": "name",
            "jsonPath": "Gapcodes[0].name",
            "label": "wc.create.gapCode",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "description",
            "jsonPath": "Gapcodes[0].description",
            "label": "wc.create.description",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Active",
            "jsonPath": "Gapcodes[0].active",
            "label": "wc.create.active",
            "pattern": "",
            "type": "checkbox",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue":true,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
			},
      {
				"label": "wc.create.Formula",
				"name": "Formula",
				"fields": [
          {
            "name": "Logic",
            "jsonPath": "Gapcodes[0].logic",
            "label": "wc.create.groups.fields.logic",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/logic/_search?&active=true|$..key|$..object",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",

          },
          {
            "name": "NoOfMonths",
            "jsonPath": "Gapcodes[0].noOfMonths",
            "label": "wc.create.groups.fields.noOfMonths",
            "pattern": "",
            "type": "singleValueList",
            "url": "/wcms/masters/gapcodes/lastmonths/_search?&active=true|$..key|$..object",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "convertToString":true
          },
          {
            "name": "Outside ULB",
            "jsonPath": "Gapcodes[0].outSideUlb",
            "label": "wc.create.groups.connectionDetails.fields.outSide",
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
