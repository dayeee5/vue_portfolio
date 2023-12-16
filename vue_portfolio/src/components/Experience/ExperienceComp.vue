<template>
  <div class="main-layout">
    <router-link to="/experience">Experience</router-link>
    <router-view />
    <div class="page-title">
      Project
      <div class="title-line"></div>
    </div>
    <div class="project-scope">
      <div class="projects-row">
        <div class="col">
          <Proj1 />
        </div>
        <div class="col">
          <Proj2 />
        </div>
        <div class="col">
          <Proj3 />
        </div>
      </div>
    </div>
  </div>
  <div class="main-layout2">
    <div class="activity-title">
      Activity
      <div class="title-line"></div>
    </div>
    <div class="activity-scope">
      <div class="col">
        <div class="row">
          <Act1 />
        </div>
        <div class="row">
          <Act2 />
        </div>
        <div class="row">
          <Act3 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Proj1 from './Project/ProjComp1';
import Proj2 from './Project/ProjComp2';
import Proj3 from './Project/ProjComp3';
import Act1 from './Activity/ActComp1';
import Act2 from './Activity/ActComp2';
import Act3 from './Activity/ActComp3';

export default {
  components: {
    Proj1,
    Proj2,
    Proj3,
    Act1,
    Act2,
    Act3,
  },
};
</script>

<style>
.main-layout,
.main-layout2 {
  background-color: beige;
  width: 100%;
  height: 100%;
}

.main-layout2 {
  background-color: cadetblue;
}

.page-title { 
    font-size: 2rem;
    padding-bottom: 5%;
    font-weight: 900;
    color: coral;
    padding-top: 5%;
    padding-left: 5%;
}

.activity-title {
  font-size: 2rem;
  padding-bottom: 5%;
  font-weight: 900;
  color: white;
  padding-top: 5%;
  padding-left: 5%;
}

.title-line {
  border: 1px solid burlywood;
  width: 12rem;
  height: 1px;
}

.project-scope {
  padding-left: 5%;
  padding-bottom: 5%;
  padding-right: 2%;
}

.projects-row {
  display: flex;
  justify-content: space-between;
}

.activity-scope {
  padding-left: 4%;
  padding-bottom: 5%;
}
</style>
