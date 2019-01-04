<template>
  <div>
    <h1>BMI Calculator</h1>
    <div class="row" v-if="!bmi">
      <div class="col-sm-4 offset-sm-4">
        <form novalidate v-on:submit.prevent="calculateCategory(calculateBMI())">
          <div class="form-group">
            <label class="form-control-label" for="weight">Weight (kg): </label>
            <input class="form-control" id="weight" name="weight" type="number" v-model="weight" required autofocus="true">
            <small>Enter your weight in Kilos</small>
            <div class="invalid-feedback">This field is required.</div>
          </div>
          <div class="form-group">
            <label class="form-control-label" for="height">Height (m): </label>
            <input class="form-control" id="height" name="height" type="number" v-model="height" required>
            <small>Enter your Height in Meters (e.g 1.79)</small>
            <div class="invalid-feedback">This field is required.</div>
          </div>
          <p>* All fields are required</p>
          <button name="submit" id="submit" class="btn btn-primary" :disabled="!height || !weight">CALCULATE BMI</button>
          <br>
        </form>
      </div>
    </div>
    <div class="row"  v-if="bmi">
      <div class="col-sm-4 offset-sm-4">
        <div class="results" v-show="bmi">
          BMI: {{bmi}}
          <br>
          Category: <span v-bind:class="['badge', categoryLabel]">{{category}}</span>
          <hr>
          <button class="btn btn-outline-primary" @click="bmi=''">Calculate Again</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BodyMassIndexCalc',
  data: () => {
    return {
      bmi: '',
      category: '',
      categoryLabel: 'light',
      weight: '',
      height: ''
    }
  },
  methods: {
    calculateBMI () {
      this.bmi = (Math.round(this.weight / (Math.pow(this.height, 2)) * 100) / 100).toFixed(1)
      return this.bmi
    },
    calculateCategory (bmi) {
      if (bmi < 15) {
        this.category = 'Very severely underweight'
        this.categoryLabel = 'badge-danger'
      }
      if (bmi >= 15 && bmi < 16) {
        this.category = 'Severely underweight'
        this.categoryLabel = 'badge-warning'
      }
      if (bmi >= 16 && bmi < 18.5) {
        this.category = 'Underweight'
        this.categoryLabel = 'badge-warning'
      }
      if (bmi >= 18.5 && bmi < 25) {
        this.category = 'Normal (healthy weight)'
        this.categoryLabel = 'badge-success'
      }
      if (bmi >= 25 && bmi < 30) {
        this.category = 'Overweight'
        this.categoryLabel = 'badge-warning'
      }
      if (bmi >= 30 && bmi < 35) {
        this.category = 'Obese Class I (Moderately obese)'
        this.categoryLabel = 'badge-warning'
      }
      if (bmi >= 35 && bmi < 40) {
        this.category = 'Obese Class II (Severely obese)'
        this.categoryLabel = 'badge-danger'
      }
      if (bmi >= 40 && bmi < 45) {
        this.category = 'Obese Class III (Very severely obese'
        this.categoryLabel = 'badge-danger'
      }
      if (bmi >= 45 && bmi < 50) {
        this.category = 'Obese Class IV (Morbidly Obese)'
        this.categoryLabel = 'badge-dark'
      }
      if (bmi >= 50 && bmi < 60) {
        this.category = 'Obese Class V (Super Obese)'
        this.categoryLabel = 'badge-dark'
      }
      if (bmi >= 60) {
        this.category = 'Obese Class VI (Hyper Obese)'
        this.categoryLabel = 'badge-dark'
      }
      console.info(`BMI: ${bmi}, Category: ${this.category}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .results {
    margin: 10px;
    padding: 10px;
    border: 1px solid silver;
  }
</style>
