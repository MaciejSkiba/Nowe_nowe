import Vue from 'vue';
import Meetings from './Meetings.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  render: h => h(Meetings),
}).$mount('#app');

mounted() {
  this.$http.get('participants').then(response => {
    this.people = response.body;
  });
}
