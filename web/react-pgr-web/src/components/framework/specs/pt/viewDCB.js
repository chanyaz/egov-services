var dat = {
	"dcb.view": {
		"numCols": 12/3,
		"version": "v1",
		"url": "pt-property/properties/_search?upicNumber={upicNo}",
		"useTimestamp": true,
    "objectName": "properties",
		"level": 0,
		"groups": [
      {
				"label": "", //Cut short labels by taking initial path from parent
        "name": "applicantDetailsWithProp", //Follow Title case pattern,
        "jsonPath":"properties[0].owners",
        "multiple":true,
				"fields": [
          {
            "name": "Owner name",
            "jsonPath": "properties[0].owners[0].name",
            "label": "Owner name",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
        ]
      },
			{
				"label": "",
				"name": "",
				"fields": [
          {
            "name": "Assessment Number",
            "jsonPath": "properties[0].upicNumber",
            "label": "Assessment Number",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          
          {
            "name": "Door No",
            "jsonPath": "",
            "label": "Door No",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Revenue ward",
            "jsonPath": "",
            "label": "Revenue ward",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Locality",
            "jsonPath": "",
            "label": "Locality",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Property type",
            "jsonPath": "properties[0].propertyDetail.propertyType",
            "label": "Property type",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          },
          {
            "name": "Current demand due",
            "jsonPath": "",
            "label": "Current demand due",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "url": "",
            "requiredErrMsg": "",
            "patternErrMsg": ""
          }
				]
      }
    ]
  }
  
}

export default dat;
		