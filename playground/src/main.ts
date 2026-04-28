declare global {
  interface Window {
    CESIUM_BASE_URL: string
  }
}

window.CESIUM_BASE_URL = '/cesium'

import 'cesium/Build/Cesium/Widgets/widgets.css'
import { createViewer } from '@congcn/cesium-kit-core'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Cesium Playground</h1>
  <div id="cesiumContainer" style="width: 100%; height: 500px;"></div>
`

// 2. 使用 createViewer 初始化
// 传入容器的 ID "cesiumContainer"
createViewer('cesiumContainer')
