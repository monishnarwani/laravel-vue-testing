import {mount} from 'vue-test-utils'
import ExampleComponent from './../../resources/assets/js/components/ExampleComponent.vue'
import expect from 'expect'

describe ('example component testing', () => {
  it ('shows example component', () => {
    let wrapper = mount(ExampleComponent);
    expect(wrapper.html()).toContain('Changed');
  })
})
