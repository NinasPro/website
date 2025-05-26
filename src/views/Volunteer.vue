<template>
  <div id="volunteer">
    <Banner :type="type" :title="$t('volunteer.help')" />

    <section id="volunteer-intro">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="title">
              {{ $t('volunteer.titleIntro') }}
            </div>
            <div class="subtitle">
              {{ $t('volunteer.subtitleIntro') }}
            </div>
            <div class="subtitle">
               {{ $t('volunteer.invitationIntro') }}
            </div>
          </div>
          <div class="column is-4 is-offset-1">
            <div class="tile is-parent is-vertical">
              <div class="tile vspaced-tile">
                <a class="button is-primary is-rounded is-fullwidth" 
                href="#volunteer-do" v-smooth-scroll>
                  {{ $t('volunteer.titleDo') }}
                </a>
              </div>
              <div class="tile vspaced-tile">
                <a class="button is-success is-rounded is-fullwidth" 
                href="#volunteer-profile" v-smooth-scroll>
                  {{ $t('volunteer.titleProfile') }}
                </a>
              </div>
              <div class="tile vspaced-tile">
                <a class="button is-primary is-rounded is-fullwidth" 
                href="#volunteer-testimony" v-smooth-scroll>
                 {{ $t('volunteer.titleTestimony') }}
                </a>
              </div>
              <div class="tile vspaced-tile">
                <a class="button is-success is-rounded is-fullwidth" 
                href="#volunteer-signup" v-smooth-scroll>
                  {{ $t('volunteer.titleSignup') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="volunteer-do">
      <div class="title">{{ $t('volunteer.titleDo') }}</div>
      <div class="subtitle">{{ $t('volunteer.subtitleDo') }}</div>
      <Do />
    </section>

    <section id="volunteer-profile">
      <Profile />
    </section>

    <section id="volunteer-testimony">
      <div class="container">
        <div class="title">{{ $t('volunteer.titleTestimony') }}</div>
        <div class="subtitle">{{ $t('volunteer.subtitleTestimony') }}</div>
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="(testimony, i) in datos('testimony')" :key="i">
            <Testimony :name="testimony.name" :title="testimony.title" :type="testimony.type" />
          </div>
        </div>
      </div>
    </section>

    <section id="volunteer-signup">
      <div class="container">
        <div class="title">{{ $t('volunteer.titleSignup') }}</div>
        <div class="subtitle">{{ $t('volunteer.subtitleSignup') }}</div>
        <div class="form">
          <div style="height: 90vh; width: 100%;" id="inline-embed-container">
            <!-- NeetoForm widget will be added here -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Profile from "@/components/VolunteerProfile.vue"
import Do from "@/components/VolunteerDo.vue"
import Testimony from "@/components/Testimony.vue"
import * as Data from '@/data/volunteer.js'

export default {
  name: 'Volunteer',
  components: {
    Banner,
    Profile,
    Do,
    Testimony
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      data: Data.default
    }
  },
  methods: {
    datos(section) {
      if (this.$i18n.locale === 'en') {
        if (section === 'testimony') {
          return this.data.en.testimony
        }
      } else {
        if (section === 'testimony') {
          return this.data.es.testimony
        }
      }
      return null
    }
  },
  mounted() {
    // Initialize NeetoForm if needed
    window.neetoForm = window.neetoForm || { embed: function(){(neetoForm.q=neetoForm.q||[]).push(arguments)} }
    
    // Load the NeetoForm script
    const script = document.createElement('script')
    script.src = 'https://ninaspro.neetoform.com/javascript/embed.js'
    script.async = true
    document.head.appendChild(script)

    // Initialize the form
    window.neetoForm.embed({
      type: "inline",
      id: "5f7ec94f-f3b0-48d7-9815-1357f2d0a3b2",
      organization: "ninaspro",
      elementSelector: "#inline-embed-container",
      styles: { height: "100%", width: "100%"},
    })
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 200px 0;

  .title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  .subtitle {
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
  }

  .form {
    text-align: center;
    
    iframe {
      width: 100%;
      max-width: 600px;
    }
  }
}

#volunteer-intro {
  .title, .subtitle {
    text-align: left;
  }
  .button {
    margin: 5px 0;
    border-width: 4px;
  } 
}

.vspaced-tile {
  margin-bottom: 1rem;
}
</style>
