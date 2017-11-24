<template>
  <div>
    <form-wizard :steps="vsSteps">
      <div slot="page1">
        <div class="form-group">
          <h1>1. 驗證姓名</h1>
          <input v-model="vsName" name="vsName" :class="{validatorError: !validateFormField('vsName') && this.vsNameHook}" 
          @focus="setHookChange('vsName')" />
        </div>
      </div>
      <div slot="page2">
        <h1>2. 驗證國籍</h1>
        <input v-model="vsCountry" name="vsCountry" :class="{validatorError: !validateFormField('vsCountry') && this.vsCountryHook}" 
          @focus="setHookChange('vsCountry')"/>
      </div>
      <div slot="page3">
        <h1>3. 驗證身分證</h1>
        <input v-model="vsIdentity" name="vsIdentity" :class="{validatorError: !validateFormField('vsIdentity') && this.vsIdentityHook}" 
          @focus="setHookChange('vsIdentity')"/>
      </div>
      <div slot="page4">
        <h1>4. 最後確認</h1>
      </div>
      <div slot="complete-page">完成頁面</div>
    </form-wizard>
  </div>
</template>
<script>
import FormWizard from '~/components/FormWizards.vue'
export default {
  components: {
    FormWizard
  },
  // computed: {
  //   currentTest () {
  //     console.log(this['vsName'])
  //     return this['vsName'] !== ""
  //   }
  // },
  methods: {
    validateFormField (field) {
      let isValid = false
      if(this[field]) {
        isValid = this[field] !== ""
      }
      return isValid
    },
    isFormFieldValid (field) {
      let isValid = false
      if(this[field]) {
        isValid = this[field] !== ""
      }
      return isValid
    },  
    setHookChange (field) {
      //  let currentHook = this.vsHooks
      switch(field) {
        case 'vsName':
          this.vsNameHook = true
          break
        case 'vsCountry':
          this.vsCountryHook = true
          break
        case 'vsIdentity':
          this.vsIdentityHook = true
          break
      }
    }
  }
  ,
  data() {
    return {
      currentStep: 0,
      vsSteps: [
        {
          label: '1 驗證姓名',
          slot: 'page1',
          onNext: () => {
            this.vsNameHook = true
            return this.validateFormField('vsName')
          },
          isValid: () => {
            return this.validateFormField('vsName')
          }
        },
        {
          label: '2 驗證國籍',
          slot: 'page2',
          onNext: () => {
            this.vsCountryHook = true
            return this.validateFormField('vsCountry')
          },
          isValid: () => {
            return this.validateFormField('vsCountry')
          }
        },
        {
          label: '3 身分證',
          slot: 'page3',
          onNext: () => {
            this.vsIdentityHook = true
            return this.validateFormField('vsIdentity')
          },
          isValid: () => {
            return this.validateFormField('vsIdentity')
          }
        },
        {
          label: '4 最後確認',
          slot: 'page4',
          onNext: () => {
            return this.vsLastConfirm = true
          },
          isValid: () => {
            return this.vsLastConfirm
          }
        }
      ],
      vsName: '',
      vsCountry: '',
      vsIdentity: '',
      vsLastConfirm: false,
      vsNameHook: false,
      vsCountryHook: false,
      vsIdentityHook: false
    }
  }
}
</script>
<style lang="scss">
  .validatorError {
    border: 1px red solid;
  }
</style>
