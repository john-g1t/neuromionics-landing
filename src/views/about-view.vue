<template>
  <div class="about-view">
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          Инновации на стыке медицины и технологий
        </h1>
        <p class="hero-subtitle">
          Разрабатываем передовые IT-решения для нейрореабилитации и биоуправления
        </p>
      </div>
    </section>

    <section class="mission-section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-content">
            <h2>Наша миссия</h2>
            <p>
              Мы создаём доступные и эффективные технологические решения для людей с
              нарушениями опорно-двигательного аппарата. Наша цель — сделать
              высококачественную реабилитацию доступной не только в клиниках,
              но и в домашних условиях.
            </p>
            <p>
              Ежегодно более 400 тысяч человек в России переносят инсульт, сотни тысяч
              нуждаются в восстановлении двигательных функций. Мы разрабатываем
              информационные системы, которые делают процесс реабилитации наглядным,
              интерактивным и мотивирующим.
            </p>
          </div>
          <div class="mission-stats">
            <div class="stat-card">
              <div class="stat-number">
                400K+
              </div>
              <div class="stat-label">
                инсультов ежегодно в РФ
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-number">
                90%
              </div>
              <div class="stat-label">
                точность детекции сигналов
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-number">
                &lt;500мс
              </div>
              <div class="stat-label">
                задержка системы
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="technology-section">
      <div class="container">
        <h2 class="section-title">
          Наш технологический стек
        </h2>
        <div class="tech-grid">
          <div class="tech-card">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3>Цифровая обработка сигналов</h3>
            <p>
              Алгоритмы обработки ЭМГ-сигналов с частотой дискретизации до 1000 Гц
              на канал. Применение сглаживания скользящим средним и детекция
              активации мышечных групп в реальном времени.
            </p>
            <div class="tech-tags">
              <span class="tag">Python</span>
              <span class="tag">NumPy</span>
              <span class="tag">SciPy</span>
            </div>
          </div>

          <div class="tech-card">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </div>
            <h3>AR/VR визуализация</h3>
            <p>
              Разработка интерактивных интерфейсов дополненной реальности для
              визуализации мышечной активности с использованием диаграмм Вороного
              и цветовой индикации уровня активации.
            </p>
            <div class="tech-tags">
              <span class="tag">Unity</span>
              <span class="tag">C#</span>
              <span class="tag">OpenXR</span>
            </div>
          </div>

          <div class="tech-card">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3>Машинное обучение</h3>
            <p>
              Классификация паттернов мышечной активности для точного распознавания
              намерений пользователя. Адаптивная калибровка под индивидуальные
              характеристики пациента за 5 минут.
            </p>
            <div class="tech-tags">
              <span class="tag">TensorFlow</span>
              <span class="tag">scikit-learn</span>
              <span class="tag">PyTorch</span>
            </div>
          </div>

          <div class="tech-card">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <h3>Системы хранения данных</h3>
            <p>
              Архитектура для хранения и анализа реабилитационных сессий.
              Формирование отчётов о динамике восстановления и аналитика
              эффективности тренировок.
            </p>
            <div class="tech-tags">
              <span class="tag">PostgreSQL</span>
              <span class="tag">MongoDB</span>
              <span class="tag">Redis</span>
            </div>
          </div>

          <div class="tech-card">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3>Встраиваемые системы</h3>
            <p>
              Разработка компактных устройств оцифровки биопотенциалов на базе
              одноплатных компьютеров. Поддержка от 8 до 20 каналов обработки
              с низким энергопотреблением (до 4.5 Вт).
            </p>
            <div class="tech-tags">
              <span class="tag">Raspberry Pi</span>
              <span class="tag">ARM</span>
              <span class="tag">Linux</span>
            </div>
          </div>

          <div class="tech-card">
            <div class="tech-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3>Веб-технологии</h3>
            <p>
              Современные веб-интерфейсы для удалённого мониторинга и телереабилитации.
              Облачная платформа для доступа к аналитике и результатам тренировок
              из любой точки мира.
            </p>
            <div class="tech-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">WebSocket</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <h2 class="section-title">
          Наши принципы
        </h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Доступность</h3>
            <p>
              Мы создаём решения, которые в 5-7 раз доступнее западных аналогов,
              не уступая им по функциональности. Стоимость наших систем составляет
              150-200 тысяч рублей против миллиона у конкурентов.
            </p>
          </div>
          <div class="value-card">
            <h3>Инновационность</h3>
            <p>
              Используем передовые технологии: AR/VR визуализацию, управление дронами
              через биосигналы, геймификацию реабилитационного процесса. Каждая
              разработка защищена интеллектуальной собственностью.
            </p>
          </div>
          <div class="value-card">
            <h3>Эффективность</h3>
            <p>
              Наши системы обеспечивают точность детекции команд более 90% при
              задержке менее 500 мс. Это позволяет пациентам получать мгновенную
              обратную связь и быстрее восстанавливать функции.
            </p>
          </div>
          <div class="value-card">
            <h3>Научный подход</h3>
            <p>
              Все решения проходят клинические испытания по ГОСТ ISO 13485.
              Тестирование проводится на группах здоровых добровольцев и пациентов
              с неврологической патологией различного возраста.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <h2 class="section-title">
          Экспертиза команды
        </h2>
        <div class="expertise-list">
          <div class="expertise-item">
            <div class="expertise-number">
              01
            </div>
            <div class="expertise-content">
              <h3>Биомедицинская инженерия</h3>
              <p>
                Глубокие знания в области нейрофизиологии, биомеханики и систем
                биологической обратной связи. Опыт работы с ЭМГ-сигналами и
                нейроинтерфейсами.
              </p>
            </div>
          </div>
          <div class="expertise-item">
            <div class="expertise-number">
              02
            </div>
            <div class="expertise-content">
              <h3>Разработка ПО</h3>
              <p>
                Команда разработчиков с опытом создания сложных систем реального
                времени, обработки сигналов и машинного обучения.
              </p>
            </div>
          </div>
          <div class="expertise-item">
            <div class="expertise-number">
              03
            </div>
            <div class="expertise-content">
              <h3>Аппаратная разработка</h3>
              <p>
                Проектирование компактных устройств регистрации биопотенциалов,
                разработка схем оцифровки и передачи данных.
              </p>
            </div>
          </div>
          <div class="expertise-item">
            <div class="expertise-number">
              04
            </div>
            <div class="expertise-content">
              <h3>Клинические исследования</h3>
              <p>
                Сотрудничество с медицинскими учреждениями для проведения испытаний
                и получения регистрационных удостоверений Росздравнадзора.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="certification-section">
      <div class="container">
        <h2 class="section-title">
          Сертификация и соответствие
        </h2>
        <div class="cert-grid">
          <div class="cert-card">
            <h3>Медицинское изделие</h3>
            <p>
              Получение регистрационного удостоверения Росздравнадзора.
              Сертификация ПО как медицинского изделия класса риска 1/2а.
            </p>
          </div>
          <div class="cert-card">
            <h3>ISO 13485</h3>
            <p>
              Проведение технических и клинических испытаний в соответствии
              с международными стандартами качества медицинских изделий.
            </p>
          </div>
          <div class="cert-card">
            <h3>Защита данных</h3>
            <p>
              Соответствие требованиям по защите персональных данных пациентов.
              Безопасное хранение и передача медицинской информации.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>

<style scoped>
.about-view {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
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

/* Mission Section */
.mission-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.mission-content h2 {
  font-size: 36px;
  margin-bottom: 30px;
  color: #1a1a1a;
}

.mission-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 20px;
}

.mission-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 42px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Technology Section */
.technology-section {
  padding: 80px 0;
}

.section-title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
  color: #e5e5e5;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.tech-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.tech-card:hover {
  border-color: #667eea;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
  transform: translateY(-5px);
}

.tech-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.tech-icon svg {
  width: 32px;
  height: 32px;
  color: white;
}

.tech-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.tech-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #edf2f7;
  color: #667eea;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

/* Values Section */
.values-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.values-section .section-title {
  color: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.value-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.value-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
}

.value-card p {
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.95;
}

/* Team Section */
.team-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.expertise-list {
  max-width: 900px;
  margin: 0 auto;
}

.expertise-item {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  align-items: flex-start;
}

.expertise-number {
  font-size: 48px;
  font-weight: 700;
  color: #667eea;
  opacity: 0.3;
  line-height: 1;
  min-width: 80px;
}

.expertise-content h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.expertise-content p {
  font-size: 16px;
  line-height: 1.7;
  color: #4a5568;
}

/* Certification Section */
.certification-section {
  padding: 80px 0;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.cert-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.cert-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateX(5px);
}

.cert-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.cert-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .expertise-item {
    flex-direction: column;
    gap: 15px;
  }

  .expertise-number {
    font-size: 36px;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>
