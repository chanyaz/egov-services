var dat = {
    'swm.search': {
      numCols: 4,
      useTimestamp: true,
      objectName: 'DumpingGround',
      url: '/swm-services/dumpingground/_search',
      groups: [
        {
          name: 'DumpingGround',
          label: 'swm.dumpingground.search.title',
          fields: [
            {
              name: 'DumpingGroundName',
              jsonPath: 'name',
              label: 'swm.DumpingGround.create.name',
              pattern: '',
              type: 'text',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },

            {
                name: 'DumpingGroundULB',
                jsonPath: 'ulbs',
                label: 'swm.DumpingGround.create.ulbs',
                pattern: '',
                type: 'MultiValueList',
                isDisabled: false,
                defaultValue: '',
                patternErrorMsg: '',
                url: '',
              },
          ],
        },
      ],
      result: {
        header: [
          {
            label: 'swm.DumpingGround.create.name',
          },
          {
            label: 'swm.DumpingGround.create.ulbs',
          },
        ],
        values: [
          'name',
          'ulbs',
        ],
        resultPath: 'DumpingGround',
        rowClickUrlUpdate: '/update/swm/dumpingground/{name}',
        rowClickUrlView: '/view/swm/dumpingground/{name}',
      },
    },
    'swm.create': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'DumpingGround',
      idJsonPath: 'dumpingGround[0].code',
      title: 'swm.create.page.title.dumpingGround',
      groups: [
        {
          name: 'ULBs',
          label: 'swm.dumpingGround.create.ulbs',
          fields: [
            {
              name: 'ulbs',
              jsonPath: 'DumpingGround[0].ulbs',
              pattern: '',
              type: 'singleValueList',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: '',
              minLength: '',
              patternErrorMsg: '',
              url: '',
            }
          ]
        },

        {
            name: 'BankGuaranteeDetails',
            label: 'swm.create.page.title.bankGuaranteeDetails',
            fields: [
              {
                name: 'mpcbAuthorisation',
                jsonPath: 'DumpingGround[0].mpcbAuthorisation',
                label: 'swm.dumpingGround.create.mpcbAuthorisation',
                pattern: '',
                type: 'checkbox',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankGuarantee',
                jsonPath: 'DumpingGround[0].bankGuarantee',
                label: 'swm.dumpingGround.create.bankGuarantee',
                pattern: '',
                type: 'checkbox',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'dummy',
                jsonPath: 'dummy',
                label: 'swm.dumpingGround.create.dummy',
                pattern: '',
                type: 'textArea',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: 500,
                minLength: 10,
                patternErrorMsg: '',
                url: '',
            },

            {
                name: 'dummy',
                jsonPath: 'dummy',
                label: 'swm.dumpingGround.create.dummy',
                pattern: '',
                type: 'textArea',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: 500,
                minLength: 10,
                patternErrorMsg: '',
                url: '',
            },

              {
                name: 'bankName',
                jsonPath: 'DumpingGround[0].bankName',
                label: 'swm.dumpingGround.create.bankName',
                pattern: '',
                type: 'text',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankValidityFrom',
                jsonPath: 'DumpingGround[0].bankValidityFrom',
                label: 'swm.dumpingGround.create.bankValidityFrom',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankValidityTo',
                jsonPath: 'DumpingGround[0].bankValidityTo',
                label: 'swm.dumpingGround.create.bankValidityTo',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },
            ]
        },
        {
            name: 'DumpingGroundDetails',
            label: 'swm.dumpingGround.create.group.title.DumpingGroundDetails',
            fields: [
                {
                    name: 'dumpingGroundName',
                    jsonPath: 'DumpingGround[0].name',
                    label: 'swm.dumpingGround.create.dumpingGroundName',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundArea',
                    jsonPath: 'DumpingGround[0].siteDetails.area',
                    label: 'swm.dumpingGround.create.dumpingGroundArea',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundCapacity',
                    jsonPath: 'DumpingGround[0].siteDetails.capacity',
                    label: 'swm.dumpingGround.create.dumpingGroundCapacity',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundAddress',
                    jsonPath: 'DumpingGround[0].siteDetails.address',
                    label: 'swm.dumpingGround.create.dumpingGroundAddress',
                    pattern: '',
                    type: 'textarea',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: 500,
                    minLength: 10,
                    fullWidth: true,
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundLatitude',
                    jsonPath: 'DumpingGround[0].siteDetails.latitude',
                    label: 'swm.dumpingGround.create.dumpingGroundLatitude',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundLongitude',
                    jsonPath: 'DumpingGround[0].siteDetails.longitude',
                    label: 'swm.dumpingGround.create.dumpingGroundLongitude',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundisProcessingSite',
                    jsonPath: 'DumpingGround[0].isProcessingSite',
                    label: 'swm.dumpingGround.create.isProcessingSite',
                    pattern: '',
                    type: 'checkbox',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundAddress',
                    jsonPath: 'DumpingGround[0].siteDetails.address',
                    label: 'swm.dumpingGround.create.dumpingGroundAddress',
                    pattern: '',
                    type: 'textArea',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: 500,
                    minLength: 10,
                    fullWidth: true,
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundProcessingPlant',
                    jsonPath: 'DumpingGround[0].dumpingGroundProcessingPlant',
                    label: 'swm.dumpingGround.create.dumpingGroundProcessingPlant',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundDistance',
                    jsonPath: 'DumpingGround[0].distance',
                    label: 'swm.dumpingGround.create.distance',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

            ]
        },
        {
            name:'wasteType',
            label:'swm.create.page.title.wasteType',
            fields: [
                {
                    name: 'WasteType',
                    label: '',
                    jsonPath: 'vendors[0].servicesOffered[0].code',
                    type: 'multiValueList',
                    pattern: '^null|$',
                    isRequired: false,
                    isDisabled: false,
                    maxLength: 128,
                    url:'',
                    minLength: 1,
                    patternErrorMsg: 'may not be null',
                    mdms: {
                      "moduleName": "swm",
                      "masterName": "SwmProcess",
                      "filter": "",
                      "key": "$..code",
                      "value": "$..name",
                    },
                    hasATOAATransform:true,
                    aATransformInfo:{
                      to:'vendors[0].servicesOffered',
                      key:'code'
                    }
                  },
            ]
        }
      ],
      url: '/swm-services/dumpingground/_create',
      tenantIdRequired: true,
    },
    'swm.view': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'dumpingground',
      searchUrl: 'swm-services/dumpingground/_search?code={code}',
      groups: [
        {
          name: 'ULBs',
          label: 'swm.dumpingGround.create.ulbs',
          fields: [
            {
              name: 'ulbs',
              jsonPath: 'DumpingGround[0].ulbs',
              pattern: '',
              type: 'singleValueList',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: '',
              minLength: '',
              patternErrorMsg: '',
              url: '',
            }
          ]
        },

        {
            name: 'BankGuaranteeDetails',
            label: 'swm.create.page.title.bankGuaranteeDetails',
            fields: [
              {
                name: 'mpcbAuthorisation',
                jsonPath: 'DumpingGround[0].mpcbAuthorisation',
                label: 'swm.dumpingGround.create.mpcbAuthorisation',
                pattern: '',
                type: 'checkbox',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankGuarantee',
                jsonPath: 'DumpingGround[0].bankGuarantee',
                label: 'swm.dumpingGround.create.bankGuarantee',
                pattern: '',
                type: 'checkbox',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'dummy',
                jsonPath: 'dummy',
                label: 'swm.dumpingGround.create.dummy',
                pattern: '',
                type: 'textArea',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: 500,
                minLength: 10,
                patternErrorMsg: '',
                url: '',
            },

            {
                name: 'dummy',
                jsonPath: 'dummy',
                label: 'swm.dumpingGround.create.dummy',
                pattern: '',
                type: 'textArea',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: 500,
                minLength: 10,
                patternErrorMsg: '',
                url: '',
            },

              {
                name: 'bankName',
                jsonPath: 'DumpingGround[0].bankName',
                label: 'swm.dumpingGround.create.bankName',
                pattern: '',
                type: 'text',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankValidityFrom',
                jsonPath: 'DumpingGround[0].bankValidityFrom',
                label: 'swm.dumpingGround.create.bankValidityFrom',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankValidityTo',
                jsonPath: 'DumpingGround[0].bankValidityTo',
                label: 'swm.dumpingGround.create.bankValidityTo',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },
            ]
        },
        {
            name: 'DumpingGroundDetails',
            label: 'swm.dumpingGround.create.group.title.DumpingGroundDetails',
            fields: [
                {
                    name: 'dumpingGroundName',
                    jsonPath: 'DumpingGround[0].name',
                    label: 'swm.dumpingGround.create.dumpingGroundName',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundArea',
                    jsonPath: 'DumpingGround[0].siteDetails.area',
                    label: 'swm.dumpingGround.create.dumpingGroundArea',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundCapacity',
                    jsonPath: 'DumpingGround[0].siteDetails.capacity',
                    label: 'swm.dumpingGround.create.dumpingGroundCapacity',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundAddress',
                    jsonPath: 'DumpingGround[0].siteDetails.address',
                    label: 'swm.dumpingGround.create.dumpingGroundAddress',
                    pattern: '',
                    type: 'textarea',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: 500,
                    minLength: 10,
                    fullWidth: true,
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundLatitude',
                    jsonPath: 'DumpingGround[0].siteDetails.latitude',
                    label: 'swm.dumpingGround.create.dumpingGroundLatitude',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundLongitude',
                    jsonPath: 'DumpingGround[0].siteDetails.longitude',
                    label: 'swm.dumpingGround.create.dumpingGroundLongitude',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundisProcessingSite',
                    jsonPath: 'DumpingGround[0].isProcessingSite',
                    label: 'swm.dumpingGround.create.isProcessingSite',
                    pattern: '',
                    type: 'checkbox',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundAddress',
                    jsonPath: 'DumpingGround[0].siteDetails.address',
                    label: 'swm.dumpingGround.create.dumpingGroundAddress',
                    pattern: '',
                    type: 'textArea',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: 500,
                    minLength: 10,
                    fullWidth: true,
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundProcessingPlant',
                    jsonPath: 'DumpingGround[0].dumpingGroundProcessingPlant',
                    label: 'swm.dumpingGround.create.dumpingGroundProcessingPlant',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundDistance',
                    jsonPath: 'DumpingGround[0].distance',
                    label: 'swm.dumpingGround.create.distance',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

            ]
        },
        {
            name:'wasteType',
            label:'swm.create.page.title.wasteType',
            fields: [
                {
                    name: 'WasteType',
                    label: '',
                    jsonPath: 'vendors[0].servicesOffered[0].code',
                    type: 'multiValueList',
                    pattern: '^null|$',
                    isRequired: false,
                    isDisabled: false,
                    maxLength: 128,
                    url:'',
                    minLength: 1,
                    patternErrorMsg: 'may not be null',
                    mdms: {
                      "moduleName": "swm",
                      "masterName": "SwmProcess",
                      "filter": "",
                      "key": "$..code",
                      "value": "$..name",
                    },
                    hasATOAATransform:true,
                    aATransformInfo:{
                      to:'vendors[0].servicesOffered',
                      key:'code'
                    }
                  },
            ]
        }
      ],
      tenantIdRequired: true,
      url: '/swm-services/dumpingground/_search?code={code}',
    },
    'swm.update': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'dumpingground',
      searchUrl: 'swm-services/dumpingground/_search?code={code}',
      idJsonPath: 'dumpingground[0].code',
      groups: [
        {
          name: 'ULBs',
          label: 'swm.dumpingGround.create.ulbs',
          fields: [
            {
              name: 'ulbs',
              jsonPath: 'DumpingGround[0].ulbs',
              pattern: '',
              type: 'singleValueList',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: '',
              minLength: '',
              patternErrorMsg: '',
              url: '',
            }
          ]
        },

        {
            name: 'BankGuaranteeDetails',
            label: 'swm.create.page.title.bankGuaranteeDetails',
            fields: [
              {
                name: 'mpcbAuthorisation',
                jsonPath: 'DumpingGround[0].mpcbAuthorisation',
                label: 'swm.dumpingGround.create.mpcbAuthorisation',
                pattern: '',
                type: 'checkbox',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankGuarantee',
                jsonPath: 'DumpingGround[0].bankGuarantee',
                label: 'swm.dumpingGround.create.bankGuarantee',
                pattern: '',
                type: 'checkbox',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'dummy',
                jsonPath: 'dummy',
                label: 'swm.dumpingGround.create.dummy',
                pattern: '',
                type: 'textArea',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: 500,
                minLength: 10,
                patternErrorMsg: '',
                url: '',
            },

            {
                name: 'dummy',
                jsonPath: 'dummy',
                label: 'swm.dumpingGround.create.dummy',
                pattern: '',
                type: 'textArea',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: 500,
                minLength: 10,
                patternErrorMsg: '',
                url: '',
            },

              {
                name: 'bankName',
                jsonPath: 'DumpingGround[0].bankName',
                label: 'swm.dumpingGround.create.bankName',
                pattern: '',
                type: 'text',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankValidityFrom',
                jsonPath: 'DumpingGround[0].bankValidityFrom',
                label: 'swm.dumpingGround.create.bankValidityFrom',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },

              {
                name: 'bankValidityTo',
                jsonPath: 'DumpingGround[0].bankValidityTo',
                label: 'swm.dumpingGround.create.bankValidityTo',
                pattern: '',
                type: 'datePicker',
                isRequired: false,
                isDisabled: false,
                defaultValue: '',
                maxLength: '',
                minLength: '',
                patternErrorMsg: '',
                url: '',
              },
            ]
        },
        {
            name: 'DumpingGroundDetails',
            label: 'swm.dumpingGround.create.group.title.DumpingGroundDetails',
            fields: [
                {
                    name: 'dumpingGroundName',
                    jsonPath: 'DumpingGround[0].name',
                    label: 'swm.dumpingGround.create.dumpingGroundName',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundArea',
                    jsonPath: 'DumpingGround[0].siteDetails.area',
                    label: 'swm.dumpingGround.create.dumpingGroundArea',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundCapacity',
                    jsonPath: 'DumpingGround[0].siteDetails.capacity',
                    label: 'swm.dumpingGround.create.dumpingGroundCapacity',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundAddress',
                    jsonPath: 'DumpingGround[0].siteDetails.address',
                    label: 'swm.dumpingGround.create.dumpingGroundAddress',
                    pattern: '',
                    type: 'textarea',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: 500,
                    minLength: 10,
                    fullWidth: true,
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundLatitude',
                    jsonPath: 'DumpingGround[0].siteDetails.latitude',
                    label: 'swm.dumpingGround.create.dumpingGroundLatitude',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundLongitude',
                    jsonPath: 'DumpingGround[0].siteDetails.longitude',
                    label: 'swm.dumpingGround.create.dumpingGroundLongitude',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundisProcessingSite',
                    jsonPath: 'DumpingGround[0].isProcessingSite',
                    label: 'swm.dumpingGround.create.isProcessingSite',
                    pattern: '',
                    type: 'checkbox',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundAddress',
                    jsonPath: 'DumpingGround[0].siteDetails.address',
                    label: 'swm.dumpingGround.create.dumpingGroundAddress',
                    pattern: '',
                    type: 'textArea',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: 500,
                    minLength: 10,
                    fullWidth: true,
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundProcessingPlant',
                    jsonPath: 'DumpingGround[0].dumpingGroundProcessingPlant',
                    label: 'swm.dumpingGround.create.dumpingGroundProcessingPlant',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

                {
                    name: 'dumpingGroundDistance',
                    jsonPath: 'DumpingGround[0].distance',
                    label: 'swm.dumpingGround.create.distance',
                    pattern: '',
                    type: 'text',
                    isRequired: false,
                    isDisabled: false,
                    defaultValue: '',
                    maxLength: '',
                    minLength: '',
                    patternErrorMsg: '',
                    url: '',
                },

            ]
        },
        {
            name:'wasteType',
            label:'swm.create.page.title.wasteType',
            fields: [
                {
                    name: 'WasteType',
                    label: '',
                    jsonPath: 'vendors[0].servicesOffered[0].code',
                    type: 'multiValueList',
                    pattern: '^null|$',
                    isRequired: false,
                    isDisabled: false,
                    maxLength: 128,
                    url:'',
                    minLength: 1,
                    patternErrorMsg: 'may not be null',
                    mdms: {
                      "moduleName": "swm",
                      "masterName": "SwmProcess",
                      "filter": "",
                      "key": "$..code",
                      "value": "$..name",
                    },
                    hasATOAATransform:true,
                    aATransformInfo:{
                      to:'vendors[0].servicesOffered',
                      key:'code'
                    }
                  },
            ]
        }
      ],
      url: '/swm-services/dumpingground/_update',
      tenantIdRequired: true,
      searchUrl: '/swm-services/dumpingground/_search?code={code}',
    },
  };
  export default dat;