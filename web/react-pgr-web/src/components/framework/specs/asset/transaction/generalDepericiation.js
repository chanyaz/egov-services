var dat = {
	"asset.transaction": {
		"numCols": 12/3,
		"url": "/asset-services-maha/assets/_search",
    "tenantIdRequired": true,
		"idJsonPath": "CategoryTypes[0].code",
    "objectName": "Depreciation",
    "useTimestamp": true,
    "groups": [{
        "label": "ac.transaction.gd.title",
        "name": "createCategoryType",
        "fields": [
					{
						"name": "dateOfDepreciation",
						"jsonPath": "toDate",
						"label": "Date of Depreciation",
						"pattern": "",
						"type": "datePicker",
						"url": "",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"maxDate":"today"
					},
						{
							"name": "AssetSearchCode",
							"jsonPath": "assetCategoryType",
							"label": "ac.create.asset.asset.category.type",
							"pattern": "",
							"type": "singleValueList",
							"url": "",
							"isRequired": false,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"defaultValue": [  {
									"key": "MOVABLE",
									"value": "MOVABLE"
								},  {
									"key": "IMMOVABLE",
									"value": "IMMOVABLE"
								}
							],

						},
						{
							"name": "AssetCategory",
							"jsonPath": "assetCategory",
							"label": "ac.create.Asset.Category",
							"pattern": "",
							"type": "singleValueList",
							"url": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=AssetCategory&filter=%5B%3F(%20%40.isAssetAllow%20%3D%3D%20false%20%26%26%20%40)%5D|$.MdmsRes.ASSET.AssetCategory.*.id|$.MdmsRes.ASSET.AssetCategory.*.name",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"isStateLevel":true,
							"depedants": [{
								"jsonPath": "assetSubCategory",
								"type": "dropDown",
								"pattern": "/egov-mdms-service/v1/_get?&moduleName=ASSET&masterName=AssetCategory&filter=%5B%3F%28%40.parent%3D%3D'{assetCategory}'%29%5D|$.MdmsRes.ASSET.AssetCategory.*.id|$.MdmsRes.ASSET.AssetCategory.*.name"
							}]
						},
						{
							"name": "AssetSearchAssetSubCategory",
							"jsonPath": "assetSubCategory",
							"label": "ac.create.Asset.SubCategory.Name",
							"pattern": "",
							"type": "singleValueList",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"isStateLevel":true
						},
						{
							"name": "fromOriginalValue",
							"jsonPath": "originalValueFrom",
							"label": "ac.create.OriginalFromDate",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "toOriginalValue",
							"jsonPath": "originalValueTo",
							"label": "ac.create.OriginalToDate",
							"pattern": "",
							"type": "number",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Department",
							"jsonPath": "department",
							"label": "ac.create.Department",
							"pattern": "",
							"type": "singleValueList",
							"url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"isStateLevel":true
						},
						{
							"name": "fromDate",
							"jsonPath": "assetCreatedFrom",
							"label": "ac.create.createFromDate",
							"pattern": "",
							"type": "datePicker",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "toDate",
							"jsonPath": "assetCreatedTo",
							"label": "ac.create.createToDate",
							"pattern": "",
							"type": "datePicker",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "AssetSearchCode",
							"jsonPath": "code",
							"label": "ac.search.asset.code",
							"pattern": "",
							"type": "text",
							"url": "",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "AssetSearchName",
							"jsonPath": "name",
							"label": "ac.search.asset.name",
							"pattern": "",
							"type": "text",
							"url": "",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "transactionType",
							"jsonPath": "transaction",
							"label": "transaction",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": "",
							"defaultValue": "DEPRECIATION",
							"isHidden": true
						}
        ]
      }],
      "result": {
        "header": [
					{
						"name": "",
	          "jsonPath": "isChecked",
	          "label": "",
	          "pattern": "",
	          "type": "checkbox",
	          "isRequired": false,
	          "isDisabled": false,
	          "requiredErrMsg": "",
	          "patternErrMsg": "",
	    			"values": [{"label":"", "value":true}],
	    			"defaultValue":false
			},
					{
            "name": "AssetCode",
            "jsonPath": "code",
            "label": "ac.create.Asset.Code",
            "pattern": "",
            "type": "label",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isLabel": false,
          },
          {
            "name": "NameAsset",
            "jsonPath": "name",
            "label": "ac.create.Name.of.Asset",
            "pattern": "",
            "type": "label",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isLabel": false,
          },
          {
            "name": "DateofPurchase/Construction/Acquisition",
            "jsonPath": "acquisitionDate",
            "label": "ac.transaction.create.datePurchaseConstruction",
            "pattern": "",
            "type": "label",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isLabel": false,
						"isDate":true,
          },
					{
            "name": "WdvValue",
            "jsonPath": "currentValue",
            "label": "ac.create.WDV.Value",
            "pattern": "",
            "type": "label",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isLabel": false,
          },
					{
            "name": "depreciationRate",
            "jsonPath": "assetCategory.depreciationRate",
            "label": "ac.create.depreciationRate",
            "pattern": "",
            "type": "label",
            "isRequired": false,
            "isDisabled": false,
            "requiredErrMsg": "",
            "patternErrMsg": "",
						"isLabel": false,
          }
        ],
        // "values": ["businessService", "consumerCode", "totalAmount","minimumAmount","bill"],
        "resultPath": "Assets",
        "tableResultPath": "Depreciation.Assets",

        // "rowClickUrlUpdate": "/update/wc/pipeSize/{id}",
        // "rowClickUrlView": "/view/wc/pipeSize/{id}"
      },
			"transaction": [{
	      "label": "",
	      "name": "OtherDetails",
	      "children": [],
				"fields": [
	        {
	          "name": "ValuationDate",
	          "jsonPath": "Depreciation.assetIds",
						"label": "Revaluation date",
	          "pattern": "",
	          "type": "text",
	          "isRequired": true,
	          "isDisabled": false,
	          "requiredErrMsg": "",
	          "patternErrMsg": "",
						"hide": true
	        },
					{
	          "name": "toDate",
	          "jsonPath": "Depreciation.toDate",
						"label": "To Date",
	          "pattern": "",
	          "type": "datePicker",
	          "isRequired": true,
	          "isDisabled": false,
	          "requiredErrMsg": "",
	          "patternErrMsg": "",
						"hide": true
	        }
	      ]
	    }]
	}
}

export default dat;
