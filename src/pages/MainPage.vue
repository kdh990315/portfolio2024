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
import IntroSection from '../components/IntroSection.vue';
import SkillSection from '../components/SkillSection.vue';
import ProjectSection from '../components/ProjectSection.vue';
import ScriptSection from '../components/ScriptSection.vue';
import HeaderSection from '../components/HeaderSection.vue';
import AboutmeSection from '../components/AboutmeSection.vue';
import FooterSection from '../components/FooterSection.vue';

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