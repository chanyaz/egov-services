var dat = {
  "inventory.search": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "",
    "url": "/inventory-services/indents/_search",
    "customButtons":[
       {
         buttonText:"Create Material Issue",
         redirectUrl:"/create/inventory/materialissues/{0}",
         selectionParamName:"materialIssues[0].indent.indentNumber"
       }
    ],
    "groups": [
      {
        "name": "search",
        "label": "inventory.search.title",
        "fields": [

          {
            "name": "issueStore",
            "jsonPath": "issueStore.code",
            "label": "inventory.create.issueStore",
            "type": "number",
            "isDisabled": false,
            "patternErrorMsg": "inventory.create.field.message.issueStore"
          },
          {
            "name": "indentDate",
            "jsonPath": "indentDate",
            "label": "inventory.create.indentDate",
            "type": "datePicker",
            "isDisabled": false,
            "patternErrorMsg": "inventory.create.field.message.indentDate"
          },
          {
            "name": "indentNumber",
            "jsonPath": "indentNumber",
            "label": "inventory.create.indentNumber",
            "type": "text",
            "isDisabled": false,
            "patternErrorMsg": "inventory.create.field.message.indentNumber"
          },
          {
            "name": "indentPurpose",
            "jsonPath": "indentPurpose",
            "label": "inventory.create.indentPurpose",
            "type": "singleValueList",
            "isDisabled": false,
            "patternErrorMsg": "inventory.create.field.message.indentPurpose"
          },
          {
            "name": "indentStatus",
            "jsonPath": "indentStatus",
            "label": "inventory.create.indentStatus",
            "type": "singleValueList",
            "isDisabled": false,
            "patternErrorMsg": "inventory.create.field.message.indentStatus"
          }
        ]
      }
    ],
    "result": {
      "header": [
        {
          "label": "inventory.indentNumber"
        },
        {
          "label": "inventory.indentDate"
        },
        {
          "label": "inventory.indentPurpose"
        },
        {
          "label": "inventory.inventoryType"
        },

        {
          "label": "inventory.issueStore.name"
        }
      ],
      "values": [
        "indentNumber",
        "indentDate",
        "indentPurpose",
        "inventoryType",
        "issueStore.name"
      ],
      "isMultipleSelection":false,
      "resultIdKey":"indentNumber",
      "resultPath": "indents",
      "rowClickUrlUpdate": "/update/inventory/indent/{indentNumber}",
      "rowClickUrlView": "/view/inventory/indent/{indentNumber}",
  		"rowClickUrlAdd" : "/create/inventory/indent"
    }
  },
  "inventory.create": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "indents",
    "groups": [
      {
        "name": "indent",
        "label": "inventory.create.group.title.indent",
        "fields": [
          {
            "name": "name",
            "jsonPath": "indents[0].issueStore.code",
            "label": "inventory.create.store.name",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": "inventory.create.field.message.store.name",
						"url":"inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name"
          },
          {
            "name": "indentDate",
            "jsonPath": "indents[0].indentDate",
            "label": "inventory.create.indentDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "indentNumber",
            "jsonPath": "indents[0].indentNumber",
            "label": "inventory.create.indentNumber",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "maxLength": 64,
            "patternErrorMsg": ""
          },
          {
            "name": "indentPurpose",
            "jsonPath": "indents[0].indentPurpose",
            "label": "inventory.create.indentPurpose",
            "pattern": "",
            "type": "singleValueList",
						"defaultValue":[
              {key: null, value: "-- Please Select --"},
              {
                 "key":"Consumption",
                 "value":"Consumption"
              },
              {
                 "key":"Repairs and Maintenance",
                 "value":"Repairs and Maintenance"
              },
              {
                 "key":"Capital",
                 "value":"Capital"
              }
            ],
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },

          {
            "name": "indentType",
            "jsonPath": "indents[0].indentType",
            "label": "inventory.create.indentType",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue":"Indent",
            "patternErrorMsg": ""
          },
          {
            "name": "inventoryType",
            "jsonPath": "indents[0].inventoryType",
            "label": "inventory.create.inventoryType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
						 "defaultValue":[ {key: null, value: "-- Please Select --"},
              {
                 "key":"Asset",
                 "value":"Asset"
              },
              {
                 "key":"Consumable",
                 "value":"Consumable"
              }
            ],

            "patternErrorMsg": ""
          },
          {
            "name": "expectedDeliveryDate",
            "jsonPath": "indents[0].expectedDeliveryDate",
            "label": "inventory.create.expectedDeliveryDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "narration",
            "jsonPath": "indents[0].narration",
            "label": "inventory.create.narration",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1000,
            "patternErrorMsg": ""
          },
          {
            "name": "indentStatus",
            "jsonPath": "indents[0].indentStatus",
            "label": "inventory.create.indentStatus",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "indentCreatedBy",
            "jsonPath": "indents[0].indentCreatedBy",
            "label": "inventory.create.indentRaisedBy",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 128,
            "patternErrorMsg": ""
          },
          {
            "name": "designation",
            "jsonPath": "indents[0].designation",
            "label": "inventory.create.designation",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          }

        ]
      },

    {

						 "name":"Indent Details",
            "label":"inventory.create.group.title.indentdetails",
            "fields":[
               {
                  "type":"tableList",
                  "jsonPath":"",
                  "tableList":{
                     "header":[
                        {
                           "label":"Material Name"
                        },
                        {
                           "label":"Material Descr."
                        },
                        {
                           "label":"Uom"
                        },
                        {
                           "label":"Asset Code"
                        },
                        {
                           "label":"Project Code"
                        },
												 {
                           "label":"Quantity Reqd."
                        }

                     ],
                     "values":[

               {
          			"name":"material",
                 "pattern":"",
                 "type":"singleValueList",
                 "jsonPath":"indents[0].indentdetails[0].material.code",
                 "isRequired":true,
                 "isDisabled":false,
                 "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Material|$.MdmsRes.inventory.Material[*].code|$.MdmsRes.inventory.Material[*].name|$.MdmsRes.inventory.Material[*].description",
                 "depedants":[
                      {
                         "jsonPath":"indentdetails[0].material.description",
                         "type":"textField",
                         "valExp":"getValFromDropdownData('materialStoreMappings[*].material.code', getVal('materialStoreMappings[*].material.code'), 'others')"
                      }
                    ]
               },
               {
                  "name":"materialDescription",
                  "jsonPath":"indents[0].indentdetails[0].material.description",
                  "pattern":"",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":true,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"uom",
                  "jsonPath":"indents[0].indentdetails[0].uom.code",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                   "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..description"
               },

               {
                  "name":"asset",
                  "jsonPath":"indents[0].indentdetails[0].asset.code",
                  "pattern":"",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }, {
                  "name":"projectcode",
                  "jsonPath":"indents[0].indentdetails[0].projectCode.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "patternErrorMsg":"inventory.create.field.message.code"
               },
               {
                  "name":"indentQuantity",
                  "jsonPath":"indents[0].indentdetails[0].indentQuantity",
                  "pattern":"",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }


     ]
                  }
               }
            ]
         }
      ],
    "url": "/inventory-services/indents/_create",
    "tenantIdRequired": true
  },
  "inventory.view": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "indents",
    "groups": [
      {
        "name": "indent",
        "label": "inventory.create.group.title.indent",
        "fields": [
          {
            "name": "name",
            "jsonPath": "indents[0].issueStore.name",
            "label": "inventory.create.name",
            "pattern": "^[a-zA-Z ]+$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 50,
            "minLength": 5,
            "patternErrorMsg": "inventory.create.field.message.name"
          },
          {
            "name": "indentDate",
            "jsonPath": "indents[0].indentDate",
            "label": "inventory.create.indentDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "indentNumber",
            "jsonPath": "indents[0].indentNumber",
            "label": "inventory.create.indentNumber",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "maxLength": 64,
            "patternErrorMsg": ""
          },
          {
            "name": "indentPurpose",
            "jsonPath": "indents[0].indentPurpose",
            "label": "inventory.create.indentPurpose",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "name",
            "jsonPath": "indents[0].indentStore.name",
            "label": "inventory.create.name",
            "pattern": "^[a-zA-Z ]+$",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 50,
            "minLength": 5,
            "patternErrorMsg": "inventory.create.field.message.name"
          },
          {
            "name": "indentType",
            "jsonPath": "indents[0].indentType",
            "label": "inventory.create.indentType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "inventoryType",
            "jsonPath": "indents[0].inventoryType",
            "label": "inventory.create.inventoryType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "expectedDeliveryDate",
            "jsonPath": "indents[0].expectedDeliveryDate",
            "label": "inventory.create.expectedDeliveryDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "narration",
            "jsonPath": "indents[0].narration",
            "label": "inventory.create.narration",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1000,
            "patternErrorMsg": ""
          },
          {
            "name": "indentStatus",
            "jsonPath": "indents[0].indentStatus",
            "label": "inventory.create.indentStatus",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "indentCreatedBy",
            "jsonPath": "indents[0].indentCreatedBy",
            "label": "inventory.create.indentCreatedBy",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 128,
            "patternErrorMsg": ""
          },
          {
            "name": "designation",
            "jsonPath": "indents[0].designation",
            "label": "inventory.create.designation",
            "pattern": "",
            "type": "",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "stateId",
            "jsonPath": "indents[0].stateId",
            "label": "inventory.create.stateId",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          }
        ]
      }
    ],
    "tenantIdRequired": true,
    "url": "/inventory-services/indents/_search?indentNumber={indentNumber}"
  },
  "inventory.update": {
     "numCols": 4,
    "useTimestamp": true,
    "objectName": "indents",
    "groups": [
      {
        "name": "indent",
        "label": "inventory.create.group.title.indent",
        "fields": [
          {
            "name": "name",
            "jsonPath": "indents[0].issueStore.code",
            "label": "inventory.create.store.name",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": "inventory.create.field.message.store.name",
						"url":"inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name"
          },
          {
            "name": "indentDate",
            "jsonPath": "indents[0].indentDate",
            "label": "inventory.create.indentDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "indentNumber",
            "jsonPath": "indents[0].indentNumber",
            "label": "inventory.create.indentNumber",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "maxLength": 64,
            "patternErrorMsg": ""
          },
          {
            "name": "indentPurpose",
            "jsonPath": "indents[0].indentPurpose",
            "label": "inventory.create.indentPurpose",
            "pattern": "",
            "type": "singleValueList",
						"defaultValue":[
              {key: null, value: "-- Please Select --"},
              {
                 "key":"Consumption",
                 "value":"Consumption"
              },
              {
                 "key":"Repairs and Maintenance",
                 "value":"Repairs and Maintenance"
              },
              {
                 "key":"Capital",
                 "value":"Capital"
              }
            ],
            "isRequired": true,
            "isDisabled": false,
            "patternErrorMsg": ""
          },

          {
            "name": "indentType",
            "jsonPath": "indents[0].indentType",
            "label": "inventory.create.indentType",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue":"Indent",
            "patternErrorMsg": ""
          },
          {
            "name": "inventoryType",
            "jsonPath": "indents[0].inventoryType",
            "label": "inventory.create.inventoryType",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
						 "defaultValue":[ {key: null, value: "-- Please Select --"},
              {
                 "key":"Asset",
                 "value":"Asset"
              },
              {
                 "key":"Consumable",
                 "value":"Consumable"
              }
            ],

            "patternErrorMsg": ""
          },
          {
            "name": "expectedDeliveryDate",
            "jsonPath": "indents[0].expectedDeliveryDate",
            "label": "inventory.create.expectedDeliveryDate",
            "pattern": "",
            "type": "datePicker",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "narration",
            "jsonPath": "indents[0].narration",
            "label": "inventory.create.narration",
            "pattern": "",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1000,
            "patternErrorMsg": ""
          },
          {
            "name": "indentStatus",
            "jsonPath": "indents[0].indentStatus",
            "label": "inventory.create.indentStatus",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "indentCreatedBy",
            "jsonPath": "indents[0].indentCreatedBy",
            "label": "inventory.create.indentRaisedBy",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 128,
            "patternErrorMsg": ""
          },
          {
            "name": "designation",
            "jsonPath": "indents[0].designation",
            "label": "inventory.create.designation",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          }

        ]
      },

    {

						 "name":"Indent Details",
            "label":"inventory.create.group.title.indentdetails",
            "fields":[
               {
                  "type":"tableList",
                  "jsonPath":"",
                  "tableList":{
                     "header":[
                        {
                           "label":"Material Name"
                        },
                        {
                           "label":"Material Descr."
                        },
                        {
                           "label":"Uom"
                        },
                        {
                           "label":"Asset Code"
                        },
                        {
                           "label":"Project Code"
                        },
												 {
                           "label":"Quantity Reqd."
                        }

                     ],
                     "values":[

               {
          			"name":"material",
                 "pattern":"",
                 "type":"singleValueList",
                 "jsonPath":"indents[0].indentdetails[0].material.code",
                 "isRequired":true,
                 "isDisabled":false,
                 "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Material|$.MdmsRes.inventory.Material[*].code|$.MdmsRes.inventory.Material[*].name|$.MdmsRes.inventory.Material[*].description",
                 "depedants":[
                      {
                         "jsonPath":"indentdetails[0].material.description",
                         "type":"textField",
                         "valExp":"getValFromDropdownData('materialStoreMappings[*].material.code', getVal('materialStoreMappings[*].material.code'), 'others')"
                      }
                    ]
               },
               {
                  "name":"materialDescription",
                  "jsonPath":"indents[0].indentdetails[0].material.description",
                  "pattern":"",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":true,
                  "defaultValue":"",
                  "patternErrorMsg":""
               },
               {
                  "name":"uom",
                  "jsonPath":"indents[0].indentdetails[0].uom.code",
                  "pattern":"",
                  "type":"singleValueList",
                  "isRequired":true,
                  "isDisabled":false,
                   "url":"/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Uom|$..code|$..description"
               },

               {
                  "name":"asset",
                  "jsonPath":"indents[0].indentdetails[0].asset.code",
                  "pattern":"",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }, {
                  "name":"projectcode",
                  "jsonPath":"indents[0].indentdetails[0].projectCode.code",
                  "pattern":"[a-zA-Z0-9-\\\\]+",
                  "type":"text",
                  "isRequired":false,
                  "isDisabled":false,
                  "defaultValue":"",
                  "maxLength":100,
                  "patternErrorMsg":"inventory.create.field.message.code"
               },
               {
                  "name":"indentQuantity",
                  "jsonPath":"indents[0].indentdetails[0].indentQuantity",
                  "pattern":"",
                  "type":"number",
                  "isRequired":true,
                  "isDisabled":false,
                  "defaultValue":"",
                  "patternErrorMsg":""
               }


     ]
                  }
               }
            ]
         }
      ],
    "url": "/inventory-services/indents/_update",
    "tenantIdRequired": true,
    "searchUrl": "/inventory-services/indents/_search?indentNumber={indentNumber}"
  }
}
export default dat;
