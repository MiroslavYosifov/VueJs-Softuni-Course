<template>
  <div>
    <section class="profile">
        <section class="profile-media-container">
            <section class="profile-media">
                <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="">
            </section>
        </section>
       
        <section class="profile-content">
            <h4>Username: miro</h4>
            <p>Names: Miroslav Yosifov</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur a
                dipisicing elit. 
                Sequi minima corrupti omnis voluptas eni
                m, cupiditate quasi. Dolore magn
                am veniam debitis nisi non harum corrupti even
                iet esse eius, eligendi ex reprehenderit!
            </p>
        </section>
    </section>
  </div>

</template>

<script>
export default {
  props: {
    userId: {
        type: String,
        required: false,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
  },
  computed: {

  },
  methods: {

  },
};
</script>

<style>

.profile {
    display: flex;
    flex-wrap: wrap;
}

.profile-media-container {
    width: 50%;
    padding: 2em;
}

.profile-media {
    position: relative;
    overflow: hidden;
}

.profile-media::before {
    content: '';
    display: block;
    padding: 50%;
    background: red;
}

.profile-media img {
    position: absolute;
    display: block;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}

.profile-content{
    width: 50%;
    padding: 2em;
}

</style>
