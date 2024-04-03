// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/Mateus/archive/apache/forum-vue/node_modules/vite/dist/node/index.js";
import vue from "file:///home/Mateus/archive/apache/forum-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/Mateus/archive/apache/forum-vue/vite.config.js";
var vite_config_default = defineConfig((command) => {
  return {
    server: {
      port: 8080
    },
    preview: {
      port: 8080
    },
    build: {
      sourcemap: true
    },
    plugins: [
      vue({
        // isProduction 
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9NYXRldXMvYXJjaGl2ZS9hcGFjaGUvZm9ydW0tdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9NYXRldXMvYXJjaGl2ZS9hcGFjaGUvZm9ydW0tdnVlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL01hdGV1cy9hcmNoaXZlL2FwYWNoZS9mb3J1bS12dWUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKGNvbW1hbmQpID0+IHtcbiAgICAvLyBjb25zdCBpc1Byb2R1Y3Rpb24gPSAvYnVpbGR8cHJldmlldy9cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIHBvcnQ6IDgwODBcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgICAgcG9ydDogODA4MFxuICAgICAgICB9LFxuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICB2dWUoeyBcbiAgICAgICAgICAgICAgICAvLyBpc1Byb2R1Y3Rpb24gXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxlQUFlLFdBQVc7QUFFcFUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSGtLLElBQU0sMkNBQTJDO0FBS25PLElBQU8sc0JBQVEsYUFBYSxDQUFDLFlBQVk7QUFFckMsU0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLE1BQ0osTUFBTTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxXQUFXO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBO0FBQUEsTUFFSixDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN4RDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
