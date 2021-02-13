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
    </v-row>
  </v-container>
</template>

<style scoped>
.my-iframe {
  width: 100%;
}
</style>
