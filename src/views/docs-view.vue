<template>
  <div class="docs-view">
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Документация</h1>
        <p class="hero-subtitle">
          Информация и функциональные характеристики ПО «EEG Emulator V2.0».
        </p>
      </div>
    </section>

    <section class="docs-section">
      <div class="container">
        <div class="docs-grid">
          <a
            class="doc-card"
            :href="manualUrl"
            target="_blank"
            rel="noopener"
          >
            <h2>Информация для эксплуатации</h2>
            <p>
              Описание того, как использовать экземпляр ПО «EEG Emulator V2.0»:
              установка, запуск и базовые требования.
            </p>
          </a>

          <a
            class="doc-card"
            :href="specsUrl"
            target="_blank"
            rel="noopener"
          >
            <h2>Функциональные характеристики</h2>
            <p>
              Ключевые функциональные возможности и характеристики ПО
              «EEG Emulator V2.0».
            </p>
          </a>
        </div>

        <p class="hint">
          Если файлы не открываются автоматически, разрешите скачивание/открытие
          PDF в настройках браузера.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import manualUrl from '@/docs/Документация, содержащая информацию, необходимую для эксплуатации экземпляра программного обеспечения «EEG Emulator V2.0» .pdf'
import specsUrl from '@/docs/Документация, содержащая описание функциональных характеристик программного обеспечения «EEG Emulator V2.0».pdf'

export default defineComponent({
  name: 'DocsView',
  setup() {
    return {
      manualUrl,
      specsUrl,
    }
  },
})
</script>

<style scoped>
.docs-view {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.docs-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.doc-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.doc-card:hover {
  border-color: #667eea;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
  transform: translateY(-5px);
}

.doc-card h2 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.doc-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
}

.hint {
  margin-top: 25px;
  font-size: 13px;
  color: #718096;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }
}
</style>

