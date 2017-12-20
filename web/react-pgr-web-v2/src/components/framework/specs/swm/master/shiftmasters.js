var dat = {
    'swm.search': {
      numCols: 4,
      useTimestamp: true,
      objectName: 'Shift',
      url: '/egov-mdms-service/v1/_search',
      groups: [
        {
          name:'ShiftSelection',
          label: 'swm.shift.create.group.title.ShiftSelection',
          fields: [
            {
              name: 'shiftType',
              jsonPath: 'code',
              label: 'swm.Shift.create.shiftType',
              pattern: '',
              type: 'autoCompelete',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=ShiftType|$..ShiftType.*.code|$..ShiftType.*.name',
            },
            {
              name: 'designationName',
              jsonPath: 'id',
              label: 'swm.Shift.create.designation',
              pattern: '',
              type: 'autoCompelete',
              isRequired: false,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
              url: '/hr-masters/designations/_search?tenantId=default|$..id|$..name',
            },
            /*{
              name: 'code',
              jsonPath: 'MasterMetaData.masterData[0].code',
              type: 'text',
            },*/
           /* {
              name: 'moduleName',
              jsonPath: 'moduleName',
              type: 'text',             
              defaultValue: 'swm',
              hide: true
            },
            {
              name: 'masterName',
              jsonPath: 'masterName',              
              type: 'text',
              defaultValue: 'Shift',
              hide: true
            },*/
          ]
        },
      ],
      result: {
        header: [
          {
            label: 'swm.Shift.create.shiftType',
          },
          {
            label: 'swm.Shift.create.designation',
          },
          {
            label: 'swm.Shift.create.shiftStartTime',
          },
          {
            label: 'swm.Shift.create.shiftEndTime',
          },
        ],
        values: [
          'shiftType.name',
          'designation.name',
          'shiftStartTime',
          'shiftEndTime',
        ],
        resultPath: 'MdmsRes.swm.Shift',
        rowClickUrlUpdate: '/update/swm/shiftmasters/{code}',
        rowClickUrlView: '/view/swm/shiftmasters/{code}',
        isMasterScreen: true
      },
    },
    'swm.create': {
      numCols: 3,
      useTimestamp: true,
      objectName: 'MasterMetaData',
      idJsonPath: 'MasterMetaData.masterData[0].code',
      title: 'swm.create.page.title.shiftmasters',
      groups: [
        {
          name:'ShiftSelection',
          label: 'swm.shift.create.group.title.ShiftSelection',
          fields: [
            {
              name: 'shiftType',
              jsonPath: 'MasterMetaData.masterData[0].shiftType.code',
              label: 'swm.Shift.create.shiftType',
              pattern: '',
              type: 'singleValueList',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=ShiftType|$..ShiftType.*.code|$..ShiftType.*.name',
            },
            {
              name: 'departmentName',
              jsonPath: 'MasterMetaData.masterData[0].department.code',
              label: 'swm.Shift.create.department',
              pattern: '',
              type: 'autoCompelete',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
              url: "/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Department|$..code|$..name",
              hasIdConverion: true,
            },
            {
              name: 'designationName',
              jsonPath: 'MasterMetaData.masterData[0].designation.code',
              label: 'swm.Shift.create.designation',
              pattern: '',
              type: 'autoCompelete',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
              url: '/hr-masters/designations/_search?tenantId=default|$..id|$..name',
            },
            {
              name: 'code',
              jsonPath: 'MasterMetaData.masterData[0].code',
              defaultValue: 'Shift-' + new Date().getTime(),
              isRequired : true,
              type: 'text',
              hide: true,
            },
            {
              name: 'tenantId',
              jsonPath: 'MasterMetaData.masterData[0].tenantId',
              type: 'text',             
              defaultValue: localStorage.getItem("tenantId"),
              hide: true
            },
            {
              name: 'moduleName',
              jsonPath: 'MasterMetaData.moduleName',
              type: 'text',             
              defaultValue: 'swm',
              hide: true
            },
            {
              name: 'masterName',
              jsonPath: 'MasterMetaData.masterName',              
              type: 'text',
              defaultValue: 'Shift',
              hide: true
            },
          ]
        },
        {
          name:'SiftDetails',
          label: 'swm.shift.create.group.title.SiftDetails',
          fields: [
            {
              name: 'shiftStartTime',
              jsonPath: 'MasterMetaData.masterData[0].shiftStartTime',
              label: 'swm.Shift.create.shiftStartTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'shiftEndTime',
              jsonPath: 'MasterMetaData.masterData[0].shiftEndTime',
              label: 'swm.Shift.create.shiftEndTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'lunchStartTime',
              jsonPath: 'MasterMetaData.masterData[0].lunchStartTime',
              label: 'swm.Shift.create.lunchStartTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'lunchEndTime',
              jsonPath: 'MasterMetaData.masterData[0].lunchEndTime',
              label: 'swm.Shift.create.lunchEndTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'graceTimeFrom',
              jsonPath: 'MasterMetaData.masterData[0].graceTimeFrom',
              label: 'swm.Shift.create.graceTimeFrom',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'graceTimeTo',
              jsonPath: 'MasterMetaData.masterData[0].graceTimeTo',
              label: 'swm.Shift.create.graceTimeTo',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'remarks',
              jsonPath: 'MasterMetaData.masterData[0].remarks',
              label: 'swm.Shift.create.remarks',
              pattern: '',
              type: 'textarea',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
          ],
        },
      ],
      url: '/egov-mdms-create/v1/_create',
      tenantIdRequired: true
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
      objectName: 'MasterMetaData',
      searchUrl: '/egov-mdms-update/v1/_update',
      idJsonPath: 'MdmsRes.swm.Shift[*].code',
      groups: [
        {
          name:'ShiftSelection',
          label: 'swm.shift.create.group.title.ShiftSelection',
          fields: [
            {
              name: 'shiftType',
              jsonPath: 'MasterMetaData.masterData[0].shiftType.code',
              label: 'swm.Shift.create.shiftType',
              pattern: '',
              type: 'singleValueList',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              url: '/egov-mdms-service/v1/_get?&moduleName=swm&masterName=ShiftType|$..ShiftType.*.code|$..ShiftType.*.name',
            },
            {
              name: 'departmentName',
              jsonPath: 'MasterMetaData.masterData[0].department.code',
              label: 'swm.Shift.create.department',
              pattern: '',
              type: 'autoCompelete',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
              url: "/egov-mdms-service/v1/_get?&moduleName=common-masters&masterName=Department|$..code|$..name",
              hasIdConverion: true,
            },
            {
              name: 'designationName',
              jsonPath: 'MasterMetaData.masterData[0].designation.code',
              label: 'swm.Shift.create.designation',
              pattern: '',
              type: 'autoCompelete',
              isRequired: true,
              isDisabled: false,
              defaultValue: '',
              maxLength: 128,
              minLength: 1,
              patternErrorMsg: '',
              url: '/hr-masters/designations/_search?tenantId=default|$..id|$..name',
            },
            {
              name: 'code',
              jsonPath: 'MasterMetaData.masterData[0].code',
              defaultValue: 'Shift-' + new Date().getTime(),
              isRequired : true,
              type: 'text',
              hide: true,
            },
            {
              name: 'tenantId',
              jsonPath: 'MasterMetaData.masterData[0].tenantId',
              type: 'text',             
              defaultValue: localStorage.getItem("tenantId"),
              hide: true
            },
            {
              name: 'moduleName',
              jsonPath: 'MasterMetaData.moduleName',
              type: 'text',             
              defaultValue: 'swm',
              hide: true
            },
            {
              name: 'masterName',
              jsonPath: 'MasterMetaData.masterName',              
              type: 'text',
              defaultValue: 'Shift',
              hide: true
            },
          ]
        },
        {
          name:'SiftDetails',
          label: 'swm.shift.create.group.title.SiftDetails',
          fields: [
            {
              name: 'shiftStartTime',
              jsonPath: 'MasterMetaData.masterData[0].shiftStartTime',
              label: 'swm.Shift.create.shiftStartTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'shiftEndTime',
              jsonPath: 'MasterMetaData.masterData[0].shiftEndTime',
              label: 'swm.Shift.create.shiftEndTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'lunchStartTime',
              jsonPath: 'MasterMetaData.masterData[0].lunchStartTime',
              label: 'swm.Shift.create.lunchStartTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'lunchEndTime',
              jsonPath: 'MasterMetaData.masterData[0].lunchEndTime',
              label: 'swm.Shift.create.lunchEndTime',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'graceTimeFrom',
              jsonPath: 'MasterMetaData.masterData[0].graceTimeFrom',
              label: 'swm.Shift.create.graceTimeFrom',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              maxLength: 12,
              minLength: 6,
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'graceTimeTo',
              jsonPath: 'MasterMetaData.masterData[0].graceTimeTo',
              label: 'swm.Shift.create.graceTimeTo',
              pattern: '',
              type: 'timePicker',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
            {
              name: 'remarks',
              jsonPath: 'MasterMetaData.masterData[0].remarks',
              label: 'swm.Shift.create.remarks',
              pattern: '',
              type: 'textarea',
              isDisabled: false,
              defaultValue: '',
              patternErrorMsg: '',
              url: '',
            },
          ],
        },
      ],
      url: '/egov-mdms-update/shiftmasters/_update',
      tenantIdRequired: true,
      searchUrl: '/egov-mdms-create/shiftmasters/_search?code={code}',
    },
  };
  export default dat;