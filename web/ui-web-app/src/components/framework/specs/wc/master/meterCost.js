var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url":  "/wcms/masters/metercosts/_create",
		"tenantIdRequired": true,
		"idJsonPath": "MeterCosts[0].code",
		"useTimestamp": true,
		"objectName": "MeterCosts",
		"groups": [
			{
				"label": "wc.create.meterCost.title",
				"name": "createMeterCosts",
				"fields": [
						{
							"name": "Name",
							"jsonPath": "MeterCosts[0].meterMake",
							"label": "wc.create.meterCost",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,50}$",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "MeterCost",
							"jsonPath": "MeterCosts[0].amount",
							"label": "wc.group.meterCost",
							"pattern": "^\\d{1,6}$",
							"type": "number",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "MeterCosts[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"defaultValue":true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/metercosts/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "MeterCosts",
		"groups": [
			{
				"label": "wc.search.meterCost.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "meterMake",
							"label": "wc.create.meterCost",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,100}$",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "Length is more than 100"
						},
						{
							"name": "Active",
							"jsonPath": "active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		],
		"result": {
			"header": [{label: "wc.create.meterCost"}, {label: "wc.group.meterCost"}, {label: "wc.search.result.active"}],
			"values": ["meterMake", "amount", "active"],
			"resultPath": "MeterCosts",
			"rowClickUrlUpdate": "/update/wc/meterCost/{id}",
			"rowClickUrlView": "/view/wc/meterCost/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/metercosts/_search?ids={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "MeterCosts",
		"groups": [
			{
				"label": "wc.view.MeterCost.title",
				"name": "MeterCost",
				"fields": [
          {
            "name": "Name",
            "jsonPath": "MeterCosts[0].meterMake",
            "label": "wc.create.meterCost",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,50}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "MeterCost",
            "jsonPath": "MeterCosts[0].amount",
            "label": "wc.group.meterCost",
            "pattern": "^\\d{1,6}$",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Active",
            "jsonPath": "MeterCosts[0].active",
            "label": "wc.create.active",
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
	},
	"wc.update": {
		"numCols": 12/3,
		"searchUrl": "/wcms/masters/metercosts/_search?ids={id}",
		"url":"/wcms/masters/metercosts/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "MeterCost",
		"groups": [
			{
				"label": "wc.update.MeterCost.title",
				"name": "UpdateMeterCost",
				"fields": [
          {
            "name": "Name",
            "jsonPath": "MeterCosts[0].meterMake",
            "label": "wc.create.meterCost",
            "pattern": "^[\s.]*([^\s.][\s.]*){0,50}$",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "MeterCost",
            "jsonPath": "MeterCosts[0].amount",
            "label": "wc.group.meterCost",
            "pattern": "^\\d{1,6}$",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Active",
            "jsonPath": "MeterCosts[0].active",
            "label": "wc.create.active",
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
