import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('has a beforeRouteUpdate hook', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.vm.beforeRouteUpdate).to.be.an.instanceof(Function)
  })

  it('calls the beforeRouteUpdate function', () => {
    const wrapper = shallowMount(Home)
    wrapper.vm.beforeRouteUpdate({}, {}, () => {})
  })
})
