<template>
<div class="about-container">
  <main class="about-wrapper">
    <section class="about-block-element">
      <header>
        <h1>Project schema and description</h1>
      </header>
        <section class="about-content-wrapper">
          <section class="about-media">
            <BackgroundImage
              :imagePath="imageSchemaProject" />
          </section>
        <section class="about-text-content">
          <h4>Basic description of the proejct and different parts wich include.</h4>
          <ul>
            <li>
              <p>Projects</p>
            </li>
            <ul>
              <li><p>The Project have public and private part.</p></li>
              <li><p>In the public part you can only look at the content of project.</p></li>
              <li><p>In the private part you can add features.</p></li>
            </ul>
            <li>
              <p>Features</p>
            </li>
             <ul>
              <li><p>The Feature have public and private part.</p></li>
              <li><p>In the public part you can only look at the content of the feature.</p></li>
              <li><p>In the private part you can add suggestion.</p></li>
            </ul>
            <li>
              <p>Suggestions</p>
            </li>
             <ul>
              <li><p>The Suggestions have public and private part.</p></li>
              <li><p>In the public part you can only look at the content of the suggestion.</p></li>
              <li><p>In the private part you can add suggestion.</p></li>
            </ul>
            <li>
              <p>Issues</p>
            </li>
             <ul>
              <li><p>The Issues have public and private part.</p></li>
              <li><p>In the public part you can only look at the content of sssues.</p></li>
            </ul>
          </ul>
        </section>
      </section>
    </section>
    <section class="about-block-element">
      <header>
        <h1>Feature description</h1>
      </header>
        <section class="about-content-wrapper">
          <section class="about-text-content">
            <h4>Basic description of feature using</h4>
            <p>Every feature have a 3 steps of execution, "SUGGESTION", "DEVELOPMENT" and "TESTING"</p>
            <ul>
              <li>
                <p>1.Suggestion</p>
              </li>
              <ul>
                <li><p>ADMIN or CREATOR of the feature, can send the feature to "DEVELOPMENT SECTION"</p></li>
                <li><p>Every authenticated user can post suggestions about the feature.</p></li>
                <li><p>ADMIN or CREATOR of the feature, can "ACCEPT" or "DECLINE" the suggestions</p></li>
              </ul>
              <li>
                <p>2.Development</p>
              </li>
               <ul>
                  <li><p>DEVELOPER, CREATOR or ADMIN can send the feature in "TESTING SECTION"</p></li>
                  <li><p>DEVELOPER, CREATOR or ADMIN can change the status of the suggestions to "DONE"</p></li>
                  <li><p>DEVELOPER, CREATOR or ADMIN can change the status of the issues to "FIXED"</p></li>
              </ul>
              <li>
                <p>3.Testing</p>
              </li>
               <ul>
                <li><p>ADMIN or CREATOR of the feature, can send the feature to "DEVELOPMENT SECTION" if there are reported issues</p></li>
                <li><p>ADMIN or CREATOR of the feature, can send the feature to "DONE SECTION" if there are no reported issues</p></li>
                <li><p>QA ADMIN or CREATOR of the feature, can post issues about the feature.</p></li>
                <li><p>ADMIN or CREATOR of the feature, can "ACCEPT" or "DECLINE" the issues</p></li>
              </ul>
            </ul>
          </section>
          <section class="about-media">
          <BackgroundImage
            :imagePath="imageSchemaFeature" />
        </section>
      </section>
    </section>
  </main>
 
</div>
</template>

<script>

import imageSchemaProject from '../assets/images/ProjectSchema.png';
import imageSchemaFeature from '../assets/images/FeatureSchema.jpg';
import BackgroundImage from '../components/UI/BackgroundImage.vue';

export default {
  props: {

  },
  components: {
    BackgroundImage
  },
  data() {
    return {
      imageSchemaProject: imageSchemaProject,
      imageSchemaFeature: imageSchemaFeature
    }
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>

.about-container {
  
}

.about-wrapper {

}

.about-block-element {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  margin-bottom: 2em;
  background: rgb(250, 246, 238);
}

.about-block-element header {
  width: 100%;
  margin-bottom: 3em;
}

.about-block-element header h1 {
  text-align: center;
  font-size: 2.8em;
}

.about-content-wrapper {
  display: flex;
  width: 100%;
}

.about-media {
  width: 60%;
}

.about-text-content {
  background: white;
  padding: 2em;
  width: 40%;
}

.about-block-element:nth-child(odd) .about-text-content {
  margin-right: 4em;
}

.about-block-element:nth-child(even) .about-text-content {
  margin-left: 4em;
}


.about-text-content > ul {
  margin-top: 1em;
}

.about-text-content > ul > li p {
  font-size: 1.2em;
  font-weight: bold;
}

.about-text-content ul > ul {
  padding: 0.2em 1em;
}

.about-text-content ul > ul li {
  list-style-type: disc;
  margin-left: 1em;
}

</style>
