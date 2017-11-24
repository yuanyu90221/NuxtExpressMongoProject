<template>
  <div>
    <div class="wizard-particle" :key="index" v-for="(step, index) in steps" :class="{activeWizard: index <= currentStep,
         verifiedWizard: index <= currentStep}"
        >
        <div class="wizard-circle" ></div>
        <span>{{step.label}}</span>
    </div>
    <div class="wizard-particle">
      <div class="wizard-circle"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentStep: 0,
    steps: {}
  }
}
</script>
<style lang="scss">
$marginTop: 100px;
$defaultColor: gray;
$activeColor: green;
.verifiedWizard {
  & {
    color: $activeColor !important;
  }
}
.activeWizard {
  & {
    // color: $activeColor !important;
    .wizard-circle {
      background-color: $activeColor !important;
      &::before {
        background-color: $activeColor !important; 
      }
    }
  }
}
  // margin-left: 20px;
.wizard-particle {
  display: flex;
  color: $defaultColor;
  // &:nth-child(1),&:nth-child(2) {
  //   color: green;
  //   .wizard-circle {
  //     background-color: green;
  //   }
  // }
  &:last-child {
    .wizard-circle {
      &:before {
        background-color: $defaultColor;
      }
      background-color: white;
    }
  }
  span {
    margin-top: $marginTop;
    align-items: center;
    line-height: 1em;
    margin-left: 2em;
  }
  .wizard-circle {
    margin-top: $marginTop;
    line-height: 2em;
    align-items: center;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background-color: $defaultColor;
    position: relative;
    &::before {
      content:'';
      height: $marginTop;
      width: .1em;
      background-color: $defaultColor;
      display: flex;
      left: .45em;
      top: -$marginTop;
      position: absolute;
    }
  }
}

</style>


