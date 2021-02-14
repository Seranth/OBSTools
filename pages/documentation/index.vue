<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline"> Documentation </v-card-title>
          <v-card-text>
            <p>
              Most, if not all, of the below are simple browser overlays for
              OBS. You should be able to open them in a new tab and they should
              work directly. If they don't odds are they won't work in OBS
              either.
            </p>
            <ol>
              <li>Open OBS/Streamlabs OBS</li>
              <li>Add a new Browser Source</li>
              <li>Use the URL from one of the overlays</li>
              <li>
                (Conditional) If the overlay specifies dimensions you need to
                set the same dimensions in OBS for the browser for it to display
                properly. I'm considering going through the extra effort of not
                enforcing it but haven't bothered yet. You can still resize the
                window in OBS, you just have to specify that the window is a
                certain size that when you then resize in your OBS stream window
                actually just change the zoom of, that'll let the overlay keep
                sizing things based on absolute values and you can still change
                its size. Again, working on a better solution, but I'm a one man
                army for this project.
              </li>
              <li>
                (Optional) Select "Refresh browser when scene becomes active" in
                case something doesn't load properly
              </li>
            </ol>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline"> SNES controller </v-card-title>
          <v-card-text>
            <p>
              Displays a SNES controller that reacts to your button presses.
              This version of the overlay works by using the Gamepad API in the
              browser to light up whichever buttons are being pressed.
            </p>
            <v-simple-table class="pa-5">
              <template #default>
                <tbody>
                  <tr>
                    <td>Requires connector</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Verified to work with</td>
                    <td>
                      <a
                        href="https://www.8bitdo.com/sn30-wireless-for-original-snes-sfc/"
                        target="_blank"
                        >8BitDo SNES Gamepad</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Dimensions</td>
                    <td>1000x600</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>
                      <a
                        href="https://seranth.github.io/OBSTools/overlays/controller/snes"
                        target="_blank"
                        >https://seranth.github.io/OBSTools/overlays/controller/snes</a
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-expansion-panels class="pa-5">
              <v-expansion-panel class="elevation-2">
                <v-expansion-panel-header> Preview </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <iframe
                    frameborder="0"
                    scrolling="no"
                    class="my-iframe"
                    src="https://seranth.github.io/OBSTools/overlays/controller/snes"
                    sandbox="allow-same-origin allow-scripts"
                    onload="this.style.height=(this.contentWindow.document.getElementById('overlay').scrollHeight)+'px';"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-alert border="left" color="indigo" dark>
              If it doesn't respond to your button mashing, try reconnecting
              your controller
            </v-alert>

            <v-alert border="left" color="indigo" dark>
              If the wrong buttons light up your controller may be different
              from mine. Contact me on Discord and maybe I'll create a new one
              that supports your controller
            </v-alert>

            <v-alert border="left" color="indigo" dark>
              If your controller works but isn't listed in the "Verified"
              section feel free to tell me about it so I might add it there
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline"> Countdown </v-card-title>
          <v-card-text>
            <p>
              Displays a simple countdown. By default it's white. I could add
              support for more fonts but I had no reason to do so yet, request
              it if you want it.
            </p>
            <p>
              As a tip, if you set this overlay to clear cache whenever its
              scene gets activated you can easily set this to be e.g. a default
              5 minutes for your "BRB" screen, so that every time you go to your
              "BRB" screen it will always do a 5 minute countdown.
            </p>
            <v-simple-table class="pa-5">
              <template #default>
                <tbody>
                  <tr>
                    <td>Requires connector</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>
                      <a
                        href="https://seranth.github.io/OBSTools/overlays/countdown"
                        target="_blank"
                        >https://seranth.github.io/OBSTools/overlays/countdown</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Parameters</td>
                    <td>
                      <ul>
                        <li>
                          <b>for=DD:HH:MM:SS</b> - How long the countdown should
                          last. Supports days, hours, minutes and seconds.
                        </li>
                        <li><b>black</b> - Makes the text black.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Example 5 min countdown</td>
                    <td>
                      <a
                        href="https://seranth.github.io/OBSTools/overlays/countdown?for=5:00"
                        target="_blank"
                        >https://seranth.github.io/OBSTools/overlays/countdown?for=5:00</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Example with black text</td>
                    <td>
                      <a
                        href="https://seranth.github.io/OBSTools/overlays/countdown?for=2:35&black"
                        target="_blank"
                        >https://seranth.github.io/OBSTools/overlays/countdown?for=2:35&black</a
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-expansion-panels class="pa-5">
              <v-expansion-panel class="elevation-2">
                <v-expansion-panel-header> Preview </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <iframe
                    frameborder="0"
                    scrolling="no"
                    class="my-iframe"
                    src="https://seranth.github.io/OBSTools/overlays/countdown?for=6:6:6"
                    sandbox="allow-same-origin allow-scripts"
                    onload="this.style.height=(this.contentWindow.document.getElementById('overlay').scrollHeight)+'px';"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.my-iframe {
  width: 100%;
}
</style>
