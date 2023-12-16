<template>
  <div class="lg:pl-20">
    <ul class="SocialLink_text">
      <li class="mb-4 SocialLink_text">
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-black hover:underline flex items-center"
        >
          <font-awesome-icon :icon="faEnvelope" class="mr-2 text-black" />
          <span class="text-black">dayeee5@naver.com</span>
        </a>
      </li>
      <li class="mb-4">
        <a
          href="https://github.com/dayeee5"
          target="_blank"
          rel="noopener noreferrer"
          class="text-black hover:underline flex items-center"
        >
          <font-awesome-icon :icon="faGithub" class="mr-2 text-black" />
          <span class="text-black">Follow on <strong>Github</strong></span>
        </a>
      </li>
      <li class="mb-4">
        <a
          href="https://m.blog.naver.com/dayeee5"
          target="_blank"
          rel="noopener noreferrer"
          class="text-black hover:underline flex items-center"
        >
          <font-awesome-icon :icon="faBloggerB" class="mr-2 text-black" />
          <span class="text-black">Follow on <strong>Blog</strong></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBloggerB, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  
  data() {
    return {
      faEnvelope,
      faGithub,
      faBloggerB,
    };
  },
};
</script>

<style>
.SocialLink_text {
  font-size: x-large;
}

.text-black {
  color: black !important;
}
</style>
