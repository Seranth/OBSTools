<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline"> Welcome! </v-card-title>
          <v-card-text>
            <p>
              This is a little project I made for the sake of developing some
              easy to use overlays and tools for OBS.
            </p>
            <p>
              Keep in mind that this is a hobby of mine, I'll be focusing work
              on what I feel needs to be developed and will only add stuff I
              have the time and energy to add. Any part of the project may be
              altered at any time as I see fit with no warning, so if something
              breaks you'll probably have to return to this site to look for
              updates.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline"> Getting started </v-card-title>
          <v-card-text>
            <p>
              Head on over to the
              <nuxt-link to="/documentation">"Documentation"</nuxt-link> section
              for a more detailed description on various overlays and how to get
              started guides.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">
            Download "OBSTools Connector"
          </v-card-title>
          <v-card-text>
            <p>
              I'm still working on this part of the project, so there's no
              download for it yet.
            </p>
            <p>
              The basic idea of it is that it'll start a websocket server on
              your computer that overlays can connect to in order to receive
              information about what's going on in your system.
            </p>
            <p>
              Two important notes on this. First, this is a lot of trust you're
              putting in me since what the connector essentially is is a data
              collection tool, currently that data collection is in the form of
              keystrokes for the purpose of making a SNES controller overlay
              react to your button presses. You can read the source code of the
              project if you don't believe me, but otherwise all you have is my
              word that the information is never sent to a server anywhere. Your
              browser connects to a server on your computer and the two
              communicate, there's no third party that receives information, not
              even the website server gets any information, it's purely between
              your browser window running some fancy javascript code in order to
              connect to your local machine.
            </p>
            <p>
              Second, there's a security aspect to this to consider that if you
              have a vulnerable system this could potentially be used against
              you. This is a hobby project of mine, I know my own setup, I know
              my own code, I can trust my code, I can trust my other network
              securities to keep me safe. I don't know your system. I don't know
              your network. I don't know if you potentially have a hacker
              looking into your network and this connector now just gave him
              access to a powerful keylogger that he didn't even have to use
              viruses to install on your computer.
            </p>
            <p>
              That being said, this connector is no more a virus than any other
              software you have on your computer. What makes something a virus
              is the intent, not the lines of code used to make it. There's no
              intent of secretly gathering data about you, I'm explicitly
              telling you that if you install this connector it will be
              gathering data about your system, if everything works as intended
              your browser and the connector will communicate without any data
              being leaked to any third parties, but because it's a hobby
              project I don't have the time and energy to work extensively
              towards your personal safety so installing it might result in a
              potential vulnerability.
            </p>
            <p>You have been warned.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline"> License </v-card-title>
          <v-card-text>
            <p>
              I'll figure this out sooner or later. It's an open source project
              currently licensed under the GNU GPL v3.
            </p>
            <p>
              I might wanna change license later, but no matter which exact one
              I pick the project will always be free and open source, it's
              mostly a matter of how people are allowed to use that source code
              to create their own products and such. The basic idea is that
              you're allowed to use the code for whatever you want as long as
              you give me some manner of attribution for the code I've made, and
              possibly that your derivative of my work has to be open source as
              well. Read the actual current license that applies to the project
              by reading the LICENSE file in the source code.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
