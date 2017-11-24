<template>
  <div>
    <form-wizard :steps="vsSteps">
      <div slot="page1">
        <div class="form-group">
          <h1>1. 驗證姓名</h1>
          <input v-model="vsName" name="vsName"/>
          <!-- <span>{{currentTest}}</span> -->
        </div>
      </div>
      <div slot="page2">
        <h1>2. 驗證國籍</h1>
        <input v-model="vsCountry" name="vsCountry"/>
      </div>
      <div slot="page3">
        <h1>3. 驗證身分證</h1>
        <input v-model="vsIdentity" name="vsIdentity"/>
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
  computed: {
    currentTest () {
      console.log(this['vsName'])
      return this['vsName'] !== ""
    }
  },
  data: () => {
    return {
      currentStep: 0,
      vsSteps: [
        {
          label: '1 驗證姓名',
          slot: 'page1',
          onNext: () => {
            return true
          },
          isValid: () => {
            return true
          }
        },
        {
          label: '2 驗證國籍',
          slot: 'page2',
          onNext: () => {
            return true
          },
          isValid: () => {
            return true
          }
        },
        {
          label: '3 身分證',
          slot: 'page3',
          onNext: () => {
            return true
          },
          isValid: () => {
            return true
          }
        },
        {
          label: '4 最後確認',
          slot: 'page4',
          onNext: () => {
            return true
          },
          isValid: () => {
            return true
          }
        }
      ],
      vsName: '',
      vsCountry: '',
      vsIdentity: ''
    }
  }
}
</script>
