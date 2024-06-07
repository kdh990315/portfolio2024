<template>
  <HeaderSection></HeaderSection>
	<IntroSection></IntroSection>
	<SkillSection></SkillSection>
	<ProjectSection></ProjectSection>
	<ScriptSection></ScriptSection>
	<AboutmeSection></AboutmeSection>
	<FooterSection></FooterSection>
</template>

<script>
import HeaderSection from '../components/layout/HeaderSection.vue';
import IntroSection from '../components/IntroSection.vue';
import SkillSection from '../components/SkillSection.vue';
import ProjectSection from '../components/ProjectSection.vue';
import ScriptSection from '../components/ScriptSection.vue';
import AboutmeSection from '../components/AboutmeSection.vue';
import FooterSection from '../components/layout/FooterSection.vue';

export default {
	components: {
		IntroSection,
		SkillSection,
		ProjectSection,
		ScriptSection,
		HeaderSection,
		AboutmeSection,
		FooterSection,
	}
}
</script>