import EntryCard from './components/EntryCard.vue'
// import DetailCard from './components/DetailCard.vue'
// import HomeCard from './components/HomeCard.vue'
import {
  createApp
} from 'vue'

const ecgCard = {
  mountEntry: (id, options = {}) => {
    const app = createApp(EntryCard, options)
    app.mount(id)

    console.log('入口组件渲染成功');
  }
}

window.HonorEcgCardInit = ecgCard

export default ecgCard