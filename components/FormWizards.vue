<template>
  <div class="profile">
    <!-- <slot name="page1"></slot>
    <slot name="page2"></slot>
    <slot name="page3"></slot> -->
    <div class="indicator">
      <vertical-indicator :steps="steps" :currentStep="currentStep" :wizardCompleted="wizardCompleted"></vertical-indicator>
    </div>
    <div class="mainContent">
      <div class="wizard-body-step" v-for="(step, index) in steps" :key="index" v-show="isStepShow(step)">
        <slot :name="step.slot" />
      </div>
      <div class="wizard-body-step" v-show="wizardCompleted">
        <slot :name="wizardCompletedSlotName" />
      </div>
      <div class="btn btn-default" @click="goBack" v-if="backEnabled && !wizardCompleted">Back</div>
      <div class="btn btn-default" @click="goNext" v-if="!isLastStep()">Next</div>
      <div class="btn btn-default" @click="completeWizard" v-if="currentStep === steps.length - 1 && !wizardCompleted">Confirm</div>
    </div>
  </div>
</template>
<script>
import VerticalIndicator from '~/components/VerticalIndicator.vue'

export default {
  components: {
    VerticalIndicator
  },
  props: {
    steps: {},
    lastStepLabel: {default: 'Confirm'},
    onNext: {},
    onBack: {}
  },
  computed: {
    currentSlot () {
      let slotName = this.steps[this.currentStep].slot
      if (this.wizardCompleted) {
        slotName = this.wizardCompletedSlotName
      }
      return slotName
    },
    backEnabled () {
      return this.currentStep !== 0
    }
  },
  data () {
    return {
      currentStep: 0,
      wizardCompleted: false,
      wizardCompletedSlotName: 'complete-page'
    }
  },
  methods: {
    isStepShow (step) {
      return step.slot === this.currentSlot && !this.wizardCompleted
    },
    isCurrentStepValid () {
      return this.steps[this.currentStep].isValid()
    },
    isLastStep () {
      return this.currentStep === this.steps.length - 1
    },
    goNext () {
      if(!this.$store.state.authUser) {
        this.$router.replace('/')
        return
      }
      this.currentStepOnNext()
      if(!this.isLastStep() && this.isCurrentStepValid()) {
        this.currentStep++
      }
    },
    goBack () {
      this.currentStepOnBack()
      if (this.currentStep > 0) {
        this.currentStep--
      }
    },
    completeWizard () {
      this.wizardCompleted = true
      this.goNext()
    },
    currentStepOnNext () {
      let step = this.steps[this.currentStep]
      if (step.onNext) {
        step.onNext()
      }
    },
    currentStepOnBack () {
      let step = this.steps[this.currentStep]
      if (step.onBack) {
        step.onBack()
      }
    }
  }
}
</script>
<style lang="scss">
.profile {
  display: flex;
}
.indicator {
  margin-left: 20px;
  min-width: 120px;
}
.mainContent {
  margin-left: 10px;
}
</style>
