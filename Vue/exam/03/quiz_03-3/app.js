// 할 일 #1
// sibing-component를 이름으로 하는 새로운 컴포넌트를 아래에 등록해 보세요.
// options: template, props

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibing-component', {
  props: ['propsdata'],
  template: '<h1>{{ propsdata }}</h1>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'Wow props is very hard!'
    // 할 일 #2
    // data 속성을 1개 더 지정하고(예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
    // 새로 지정한 data 속성은 위 'sibing-component' 에 props 로 전달합니다.
  }
})