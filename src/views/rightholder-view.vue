<template>
  <div class="rightholder-view">
    <section class="hero-section">
      <div class="container">
        <div class="hero-badge">
          Лицензия и покупка
        </div>
        <h1 class="hero-title">
          Адрес страницы сайта правообладателя
        </h1>
        <p class="hero-subtitle">
          Информация о стоимости лицензии на использование программного обеспечения
          «EEG Emulator V2.0».
        </p>
      </div>
    </section>

    <section class="rightholder-section">
      <div class="container">
        <div class="grid">
          <div class="card price-card">
            <h2 class="card-title">
              Стоимость лицензии
            </h2>
            <div class="price-wrap">
              <div class="price-label">для использования</div>
              <div class="price">
                5000<span class="ruble">р</span>
              </div>
            </div>
            <p class="card-text">
              Лицензия подходит для работы с программным обеспечением
              «EEG Emulator V2.0».
            </p>
            <div class="divider" />
            <div class="spec-row">
              <span class="spec-key">Продукт</span>
              <span class="spec-value">EEG Emulator V2.0</span>
            </div>
          </div>

          <div class="card order-card">
            <h2 class="card-title">
              Как купить
            </h2>
            <ol class="steps">
              <li class="step">
                Напишите на почту <a class="inline-link" href="mailto:neyromionica@mail.ru">neyromionica@mail.ru</a>
                и укажите, для каких целей нужна лицензия.
              </li>
              <li class="step">
                Мы пришлём условия и инструкции по оформлению.
              </li>
              <li class="step">
                После согласования вы получите лицензионные материалы.
              </li>
            </ol>

            <div class="cta">
              <a
                class="btn-primary"
                href="mailto:neyromionica@mail.ru?subject=Покупка%20лицензии%20EEG%20Emulator%20V2.0"
              >
                Купить лицензию
              </a>
              <p class="cta-subtitle">
                Ответим в ближайшее рабочее время.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightholderView',
})
</script>

<style scoped>
.rightholder-view {
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 18px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.hero-title {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.95;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
}

.rightholder-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 28px;
  align-items: stretch;
}

.card {
  background: white;
  padding: 32px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.price-card {
  position: relative;
  overflow: hidden;
}

.price-card::before {
  content: '';
  position: absolute;
  inset: -50px -80px auto auto;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(102, 126, 234, 0.35), rgba(102, 126, 234, 0) 70%);
  pointer-events: none;
}

.order-card {
  background: linear-gradient(180deg, #ffffff 0%, #fcfcff 100%);
}

.card-title {
  font-size: 22px;
  margin-bottom: 18px;
  color: #1a1a1a;
}

.card-text {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-top: 10px;
}

.price-wrap {
  margin-top: 6px;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #fbfbff;
}

.price-label {
  font-size: 13px;
  font-weight: 700;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.price {
  margin-top: 6px;
  font-size: 54px;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ruble {
  font-size: 24px;
  vertical-align: super;
  margin-left: 2px;
}

.divider {
  height: 1px;
  background: #edf2f7;
  margin: 18px 0;
}

.spec-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  color: #4a5568;
}

.spec-key {
  font-size: 14px;
  color: #718096;
  font-weight: 600;
}

.spec-value {
  font-size: 14px;
  font-weight: 800;
  color: #1a1a1a;
}

.steps {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
  color: #4a5568;
  line-height: 1.6;
}

.step {
  font-size: 15px;
}

.inline-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 800;
}

.inline-link:hover {
  text-decoration: underline;
}

.cta {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 10px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(102, 126, 234, 0.28);
}

.cta-subtitle {
  font-size: 13px;
  color: #718096;
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 30px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .price {
    font-size: 44px;
  }
}
</style>

