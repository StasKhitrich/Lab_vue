<template>
  <div class="home">
    <div class="home__content">
      <div class="home__content__categories">
        <Section headerName="Categories">
          <CategoryCard/>
        </Section>
      </div>
    </div> 
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CategoryCard from '@/components/CategoryCards.vue';
import Section from '@/components/Section.vue';

@Options({
  components: {
    CategoryCard,
    Section
  }
})
export default class HomePage extends Vue {
        
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
