<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-modal-provider>
          <n-dialog-provider>
            <div class="container">
              <n-config-provider :theme="darkTheme">
                <MenuComponent />
              </n-config-provider>
            </div>
          </n-dialog-provider>
        </n-modal-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { defineComponent } from 'vue'
import MenuComponent from './MenuComponent.vue'
import {
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  NModalProvider,
  NDialogProvider,
  NConfigProvider
} from 'naive-ui'
import { darkTheme } from 'naive-ui'

export default defineComponent({
  setup() {
    return {
      darkTheme
    }
  },
  components: {
    MenuComponent,
    NLoadingBarProvider,
    NMessageProvider,
    NNotificationProvider,
    NModalProvider,
    NDialogProvider
  }
})
</script>
