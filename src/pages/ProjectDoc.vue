<template>
  <div>
    <div class="background" @click="goToBack"></div>
    <article v-if="projectData">
      <BaseButton class='closeBtn' @click="goToBack">close</BaseButton>
      <ProjectIntro :detailIntroDatas="projectData.intro"></ProjectIntro>
      <ProjectMainFuc :detailDatas="projectData.detail"></ProjectMainFuc>
      <ProjectPostscript :detailPostscript="projectData.postscript"></ProjectPostscript>
    </article>
    <article v-else>
      <p>프로젝트 데이터를 불러올 수 없습니다.</p>
    </article>
  </div>
</template>

<script>
import ProjectIntro from '../components/projectdoc/ProjectIntro.vue';
import ProjectMainFuc from '../components/projectdoc/ProjectMainFuc.vue';
import ProjectPostscript from '../components/projectdoc/ProjectPostscript.vue';
import { projectDatas } from '../data/projectDatas';

export default {
  components: {
    ProjectMainFuc,
    ProjectIntro,
    ProjectPostscript
  },
  data() {
    return {
      projectId: '',
      projectData: null,
    };
  },
  mounted() {
    this.projectId = this.$route.params.projectId;
    this.projectData = projectDatas.find(project => project.id === this.projectId);
    window.scrollTo(0, 0);
  },
  methods: {
    goToBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped lang="scss">
.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

article {
  width: 1200px;
  background-color: #fff;
  position: relative;
  top: 5rem;
  left: 50%;
  padding: 1rem 1rem 5rem;
  z-index: 100;
  transform: translateX(-50%);

  .closeBtn {
    position: absolute;
    right: -120px;
    top: 0;
    border: none;
  }

  @media (max-width: 1400px) {

    .closeBtn {
      right: 0;
      top: -30px
    }
  }

  @media (max-width: 1200px) {
    width: calc(100% - 50px);
  }
}
</style>