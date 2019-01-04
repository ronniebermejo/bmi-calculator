import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import BodyMassIndexCalc from '@/components/BodyMassIndexCalc.vue'

const wrapper = shallowMount(BodyMassIndexCalc, {
  attachToDocument: true
})

describe('BodyMassIndexCalc.vue', () => {
  it('Content is rendered', () => {
    expect(wrapper.text()).to.include('BMI Calculator')
  })

  it('submit is disabled when no data provided', () => {
    expect(wrapper.html()).to.contain('disabled="disabled"')
  })

  it('submit is enabled when all data is provided', () => {
    const weight = wrapper.find('#weight')
    weight.element.value = '80'
    weight.trigger('input')

    const height = wrapper.find('#height')
    height.element.value = '80'
    height.trigger('input')
    expect(wrapper.html()).to.not.contain('disabled="disabled"')
  })

  it('calculates healthy BMI & Category', () => {
    const weight = wrapper.find('#weight')
    weight.element.value = '80'
    weight.trigger('input')
    const height = wrapper.find('#height')
    height.element.value = '1.80'
    height.trigger('input')
    wrapper.find('#submit').trigger('click')
    expect(wrapper.text()).to.include('BMI: 24.7')
    expect(wrapper.text()).to.include('Normal (healthy weight)')
  })

  it('calculates non healthy BMI & Category again', () => {
    let newWrapper = shallowMount(BodyMassIndexCalc, {
      attachToDocument: true
    })
    const weight = newWrapper.find('#weight')
    weight.element.value = '173.5'
    weight.trigger('input')
    const height = newWrapper.find('#height')
    height.element.value = '1.70'
    height.trigger('input')
    newWrapper.find('#submit').trigger('click')
    expect(newWrapper.text()).to.include('BMI: 60.0')
    expect(newWrapper.text()).to.include('Obese Class VI (Hyper Obese)')
  })
})
